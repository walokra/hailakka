import React, { useState, useEffect, useContext } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { DateTime } from 'luxon';
import { createApiEndpoint } from '../controllers/api';
// import Header from '../components/HomeScreenHeader';
import { CategoryContext } from '../App';
import { timeSince, getOrder } from '../components/utils';
import { Entry } from '../models/Entry';

const init: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'User-Agent': 'Highlakka',
  },
};

interface Props {
  isLoading: boolean;
  isError: boolean;
}

export default function Homescreen({ route, navigation }) {
  const { htmlFilename } = useContext(CategoryContext);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { colors } = useTheme();

  // 'https://fi.high.fi/uutiset/json-private?APIKEY=1234567890';
  useEffect(() => {
    const apiRequest = new Request(
      createApiEndpoint(
        'fi.high.fi',
        `${htmlFilename}/json-private?APIKEY=123`,
      ),
      init,
    );
    fetch(apiRequest)
      .then(async (response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        const items = data.responseData.feed.entries;
        return items;
      })
      .then(async (items) => {
        setSections([]);

        // Top items are not grouped by time but by ranking
        if (htmlFilename == 'top') {
          let i = 0;
          let range = ' 1 ..10';
          items.forEach((entry: Entry) => {
            if (i < 10) {
              range = ' 1 ..10';
            } else if (i < 20) {
              range = ' 11 ..20';
            } else if (i < 30) {
              range = ' 21 ..30';
            } else if (i < 40) {
              range = ' 31 ..40';
            } else if (i < 50) {
              range = ' 41 ..50';
            } else if (i < 60) {
              range = ' 51 ..60';
            } else if (i < 70) {
              range = ' 61 ..70';
            } else {
              range = ' 70 ...';
            }

            if (!sections[range]) {
              sections[range] = [entry];
            } else {
              sections[range].push(entry);
            }
            i += 1;
          });

          setSections(sections);
          setLoading(false);
          setError(false);
        } else {
          const newsEntries = [];

          items.map((item, index) => {
            const article = {
              ...item,
              timeSince: timeSince(item.publishedDateJS),
              orderNo: getOrder(item.publishedDateJS),
              publishedDate: DateTime.fromISO(item.publishedDateJS)
                .toLocal()
                .toFormat('ccc d.m.yyyy HH:mm'),
            };

            newsEntries.push(article);
          });

          // Other categories are grouped by time
          newsEntries.sort((a: Entry, b: Entry) => a.orderNo < b.orderNo);

          newsEntries.forEach((entry: Entry) => {
            // Put each item in a section
            // If we don't have section for particular time, create new one,
            // Otherwise just add item to existing section
            if (!sections[entry.timeSince]) {
              sections[entry.timeSince] = [entry];
            } else {
              sections[entry.timeSince].push(entry);
            }
          });

          setSections(sections);
          setLoading(false);
          setError(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  // const renderItems = ({artileID, title, shortDescription}) => {
  //   return (
  //     <View key={artileID}>
  //         <Text>
  //           {title}
  //         </Text>
  //         <Text>
  //           {shortDescription}
  //         </Text>
  //     </View>
  //   )
  // }

  const Results = (props: Props) => {
    if (props.isLoading) {
      return <ActivityIndicator animating={true} />;
    }

    if (props.isError) {
      return <Text>Failed to load news!</Text>;
    }

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: colors.card }]}
        contentContainerStyle={[styles.contentContainer]}
      >
        <View style={styles.articleContainer}>
          {Object.keys(sections).map((section, index) => {
            return (
              <View key={index}>
                <View style={styles.article}>
                  <Text style={[styles.title, { color: colors.text }]}>
                    {section}
                  </Text>
                </View>
                {sections[section].map((article, index) => {
                  return (
                    <View key={index} style={styles.article}>
                      <TouchableOpacity
                        onPress={() =>
                          WebBrowser.openBrowserAsync(article.link)
                        }
                      >
                        <Text style={[styles.title, { color: colors.text }]}>
                          {article.title}
                        </Text>
                        <Text style={[styles.source, { color: colors.text }]}>
                          {article.author} - {article.publishedDate}
                        </Text>
                        <Text
                          style={[styles.description, { color: colors.text }]}
                        >
                          {article.shortDescription}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Results isLoading={loading} isError={error} />

      <View style={[styles.footerContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity onPress={handlePoweredPress}>
          <Text style={styles.footerInfoText}>
            Powered by <Text style={styles.linkText}>high.fi</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handlePoweredPress() {
  WebBrowser.openBrowserAsync('https://high.fi');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'baseline',
  },
  articleContainer: {
    alignItems: 'baseline',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
  },
  footerInfoText: {
    fontSize: 10,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  article: {
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
  },
  source: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    marginTop: 3,
  },
  linkText: {
    fontSize: 9,
    color: '#2e78b7',
  },
});

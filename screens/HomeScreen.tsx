import React, { useState, useEffect, useContext } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { DateTime } from 'luxon';
import { createApiEndpoint, init } from '../controllers/api';
import { CategoryContext } from '../context/CategoryContext';

import { timeSince, getOrder } from '../components/utils';
import SectionHeader from '../components/SectionHeader';

import { Entry } from '../models/Entry';
interface Props {
  isLoading: boolean;
  isError: boolean;
}

export interface ISections {
  section: [Entry];
}

export default function Homescreen({ route, navigation }) {
  const { htmlFilename } = useContext(CategoryContext);
  const [sections, setSections] = useState<ISections[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { colors } = useTheme();

  // 'https://fi.high.fi/uutiset/json-private?APIKEY=1234567890';
  useEffect(() => {
    const apiRequest = new Request(
      createApiEndpoint('fi.high.fi', `${htmlFilename}`),
      init,
    );
    fetch(apiRequest)
      .then(async (response) => {
        return response.json();
      })
      .then((data): [Entry] => {
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
          const newsEntries = [] as Entry[];

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
          newsEntries.sort((a, b) => a.orderNo - b.orderNo);

          newsEntries.forEach((entry) => {
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
        {Object.keys(sections).map((section, index) => {
          return (
            <View key={index} style={styles.articleContainer}>
              <SectionHeader section={section} colors={colors} />
              {sections[section].map((article: Entry, index) => {
                // console.log({ article });
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => WebBrowser.openBrowserAsync(article.link)}
                    style={styles.entryContainer}
                  >
                    <Image
                      source={{ uri: article.picture }}
                      style={[styles.entryImage]}
                    />
                    <View style={styles.entryContent}>
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
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
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
  },
  contentContainer: {
    alignItems: 'baseline',
  },
  articleContainer: {
    flex: 1,
    alignItems: 'baseline',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 5,
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
    // backgroundColor: '#fbfbfb',
  },
  footerInfoText: {
    fontSize: 10,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  entryContainer: {
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  entryImage: {
    alignItems: 'flex-start',
    width: 100,
    height: 100,
  },
  entryContent: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  title: {
    fontSize: 15,
    minWidth: 0,
  },
  source: {
    fontSize: 12,
  },
  description: {
    minWidth: 0,
    fontSize: 14,
    marginTop: 3,
  },
  linkText: {
    fontSize: 9,
    color: '#2e78b7',
  },
});

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { DateTime } from 'luxon';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SectionHeader from '../components/SectionHeader';
import { getOrder, timeSince } from '../components/utils';
import { CategoryContext } from '../context/CategoryContext';
import { createApiEndpoint, init } from '../controllers/api';
import { Entry } from '../models/Entry';

const styles = StyleSheet.create({
  articleContainer: {
    alignItems: 'baseline',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'baseline',
  },
  description: {
    fontSize: 14,
    marginTop: 3,
    minWidth: 0,
  },
  entryContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingVertical: 5,
  },
  entryContent: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  entryImage: {
    alignItems: 'flex-start',
    height: 100,
    width: 100,
  },
  footerContainer: {
    bottom: 5,
    left: 0,
    position: 'absolute',
    right: 0,
    ...Platform.select({
      android: {
        elevation: 20,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
    alignItems: 'center',
    // backgroundColor: '#fbfbfb',
  },
  footerInfoText: {
    color: 'rgba(96,100,109, 1)',
    fontSize: 10,
    textAlign: 'center',
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 9,
  },
  source: {
    fontSize: 12,
  },
  title: {
    fontSize: 15,
    minWidth: 0,
  },
});

interface Props {
  isError: boolean;
  isLoading: boolean;
}

interface ISections {
  section: [Entry];
}

const Homescreen = ({ navigation }) => {
  const { htmlFilename } = useContext(CategoryContext);
  const [sections, setSections] = useState<ISections[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { colors } = useTheme();

  // 'https://fi.high.fi/uutiset/json-private?APIKEY=1234567890';
  useEffect(() => {
    const apiRequest = new Request(createApiEndpoint('fi.high.fi', `${htmlFilename}`), init);

    fetch(apiRequest)
      .then(async (response) => response.json())
      .then((data): [Entry] => {
        // console.log(data)
        const items = data.responseData.feed.entries;

        return items;
      })
      .then((items) => {
        setSections([]);

        // Top items are not grouped by time but by ranking
        if (htmlFilename === 'top') {
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

          // eslint-disable-next-line array-callback-return
          items.map((item) => {
            const article = {
              ...item,
              orderNo: getOrder(item.publishedDateJS),
              publishedDate: DateTime.fromISO(item.publishedDateJS).toLocal().toFormat('ccc d.m.yyyy HH:mm'),
              timeSince: timeSince(item.publishedDateJS),
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
      .catch((e) => {
         
        console.error(e);
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
        contentContainerStyle={[styles.contentContainer]}
        style={[styles.container, { backgroundColor: colors.card }]}
      >
        {Object.keys(sections).map((section, index) => (
          <View key={index} style={styles.articleContainer}>
            <SectionHeader colors={colors} section={section} />
            {sections[section].map((article: Entry, index) => (
              // console.log({ article });
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('WebView', {
                    link: article.link,
                    title: article.title,
                  });
                  WebBrowser.openBrowserAsync(article.link).catch(console.error);
                }}
                style={styles.entryContainer}
              >
                <Image source={{ uri: article.picture }} style={[styles.entryImage]} />
                <View style={styles.entryContent}>
                  <Text style={[styles.title, { color: colors.text }]}>{article.title}</Text>
                  <Text style={[styles.source, { color: colors.text }]}>
                    {article.author} - {article.publishedDate}
                  </Text>
                  <Text style={[styles.description, { color: colors.text }]}>{article.shortDescription}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  };

  function handlePoweredPress() {
    // WebBrowser.openBrowserAsync('https://high.fi');
    navigation.navigate('WebView', {
      link: 'https://high.fi',
      title: 'High.fi',
    });
  }

  return (
    <View style={styles.container}>
      <Results isError={error} isLoading={loading} />

      <View style={[styles.footerContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity onPress={handlePoweredPress}>
          <Text style={styles.footerInfoText}>
            Powered by <Text style={styles.linkText}>high.fi</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homescreen;

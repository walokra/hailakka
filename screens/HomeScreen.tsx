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
import { createApiEndpoint } from '../controllers/api';
// import Header from '../components/HomeScreenHeader';
import { CategoryContext } from '../App';

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
  const [articles, setArticles] = useState([]);
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
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
        setError(false);
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
        {/* <Header {...props} selectedCategory={selectedCategory} /> */}
        <View style={styles.articleContainer}>
          {articles.map((item, index) => (
            <View key={index} style={styles.article}>
              <TouchableOpacity
                onPress={() => WebBrowser.openBrowserAsync(item.link)}
              >
                <Text style={[styles.title, { color: colors.text }]}>
                  {item.title}
                </Text>
                <Text style={[styles.source, { color: colors.text }]}>
                  {item.author} - {item.publishedDateJS}
                </Text>
                <Text style={[styles.description, { color: colors.text }]}>
                  {item.shortDescription}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import { Platform } from 'react-native';

// import { Language } from '../models/Language';
import { Category } from '../models/Category';

const HIGH_FI_API = 'json-private';
const API_KEY = '1234567890';
// const USER_AGENT = 'Highlakka, (0.0.1)-(1) (RN)';
// const domainToUse = 'high.fi';

// http://en.high.fi/api/help

// const domainToUse =
//   Platform.OS === 'web'
//     ? 'cors-anywhere.herokuapp.com/https://high.fi/'
//     : 'high.fi';

// const apiEndpoint =
//   Platform.OS === 'web'
//     ? 'https://cors-anywhere.herokuapp.com/https://fi.high.fi/uutiset/json-private?APIKEY=1234567890'
//     : 'https://fi.high.fi/uutiset/json-private?APIKEY=1234567890';

// const proxy = Platform.OS === 'web' ? 'http://0.0.0.0:8080/' : '';
const proxy = '';

export const createApiEndpoint = (domainToUse: string, endpoint: string): string =>
  `${proxy}https://${domainToUse}/${endpoint}/${HIGH_FI_API}?APIKEY=${API_KEY}`;

export const init: RequestInit = {
  headers: {
    Accept: 'application/json',
    // FIXME: Can't send User-Agent to high.fi API due CORS
    // 'User-Agent': USER_AGENT,
  },
  method: 'GET',
};

// export function load(source: Object, domainToUse: string, hideSections: [], onSuccess, onFailure) {
//     var url = "http://" + domainToUse + "/" + source.htmlFilename + "/" + HIGH_FI_API + "?APIKEY=" + API_KEY;
//     if (hideSections && hideSections.length > 0) {
//         url +="&jsonHideSections=" + hideSections.join();
//     }
//     console.debug("highfi.js, load(source="  + JSON.stringify(source) + "), hideSections=" + hideSections + ", url=" + url);

//     var req = new XMLHttpRequest;
//     req.open("GET", url);
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status == 200 ) {
//                 //console.debug("200: " + req.responseText);
//                 var jsonObject = JSON.parse(req.responseText);
//                 onSuccess(jsonObject);
//             } else {
//                 onFailure(req.status, req.responseText, url);
//             }
//         }
//     }

//     req.setRequestHeader("User-Agent", USER_AGENT);
//     req.send();
// }

// export function search(searchText, domainToUse, onSuccess, onFailure) {
//     // http://high.fi/search.cfm?q=formula&x=0&y=0&outputtype=json-private
//     var url = "http://" + domainToUse + "/search.cfm?q=" + searchText + "&x=0&y=0&outputtype=" + HIGH_FI_API + "&APIKEY=" + API_KEY;
//     //console.debug("highfi.js, search, url=" + url);

//     var req = new XMLHttpRequest;
//     req.open("GET", url);
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status === 200) {
//                 //console.debug(req.status +"; " + req.responseText);
//                 var jsonObject = JSON.parse(req.responseText);
//                 onSuccess(jsonObject);
//             } else {
//                 onFailure(req.status, req.statusText, url);
//             }
//         }
//     }

//     req.setRequestHeader("User-Agent", USER_AGENT);
//     req.send();
// }

// export function makeHighFiCall(url) {
//     //console.log("makeHighFiCall. url=" + url);

//     var req = new XMLHttpRequest;
//     req.open("GET", url);
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             //console.debug(req.status +"; " + req.responseText);
//         }
//     }

//     req.setRequestHeader("User-Agent", USER_AGENT);
//     req.send();
// }

// http://high.fi/api/?act=listLanguages&APIKEY=123456
// export const listLanguages = async (domainToUse: string) => {
//   const url = `${createApiEndpoint(domainToUse, '/api/?act=listLanguages')}`;
//   // console.debug("high.js, listLanguages, url=" + url);

//   const apiRequest = new Request(url, init);
//   fetch(apiRequest)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       // console.debug(data)
//       // {
//       //     "responseData": {
//       //       "supportedLanguages": [
//       //           {
//       //               "language": "Finnish",
//       //               "country": "Finland",
//       //               "domainToUse": "high.fi",
//       //               "languageCode": "fi-fi",
//       //               "mostPopularName": "Suosituimmat",
//       //               "latestName": "Uusimmat",
//       //               "useToRetrieveLists": "finnish",
//       //               "genericNewsURLPart": "uutiset"
//       //           },
//       //           {
//       //               "language": "English",
//       //               "country": "United States",
//       //               "domainToUse": "en.high.fi",
//       //               "languageCode": "en-us",
//       //               "mostPopularName": "Most Popular",
//       //               "latestName": "Latest News",
//       //               "useToRetrieveLists": "english",
//       //               "genericNewsURLPart": "news"
//       //           }
//       //       ]
//       //   }
//       // }
//       const items = data.responseData.supportedLanguages;

//       const languages = [];
//       items.forEach((entry) => {
//         const item = {};
//         for (const key in entry) {
//           item[key] = entry[key];
//         }
//         languages.push(item);
//       });

//       return languages;
//     })
//     .catch((error: Error) => {
//       console.error(error);
//       throw Error('Fetching languages failed! ' + error.message);
//     });
// };

/**
  Returns full list of news categories available for the selected language.
  The API doesn't return the always-present "Most popular" and "Latest news" lists so we add those manually.

  E.g. url: http://high.fi/api/?act=listCategories&usedLanguage=finnish&APIKEY=1234567
*/
export const listCategories = async (
  domainToUse: string,
  mostPopularName: string,
  genericNewsURLPart: string,
  latestName: string,
  useToRetrieveLists: string,
): Promise<Category[]> => {
  const categories = [];
  const popular = {
    depth: 1,
    htmlFilename: 'top',
    sectionID: 'top',
    selected: true,
    title: mostPopularName,
  };

  categories.push(popular);

  const latest = {
    depth: 1,
    htmlFilename: genericNewsURLPart,
    sectionID: genericNewsURLPart,
    selected: true,
    title: latestName,
  };

  categories.push(latest);

  const url = `${createApiEndpoint(
    domainToUse,
    `api/?act=listCategories&usedLanguage=${useToRetrieveLists}&APIKEY=${API_KEY}`,
  )}`;
  // console.debug("api.ts, listLanguages, url=" + url);

  const apiRequest = new Request(url, init);

  try {
    const response = await fetch(apiRequest);
    const data = await response.json();

    const items = data.responseData.categories;

    // FIXME
    items.forEach((entry: Category) => {
      const item = {};

      for (const key in entry) {
        item[key] = entry[key];
      }

      item.selected = false;

      categories.push(item);
    });

    return categories;
  } catch (error) {
    console.error(error);
    throw Error(`Fetching languages failed! ${(error as any).message}`);
  }
};

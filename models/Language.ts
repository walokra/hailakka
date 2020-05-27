// listLanguages
// https://fi.high.fi/api/?act=listLanguages&APIKEY=123
// {
//   "responseData": {
//     "supportedLanguages": [
//         {
//             "language": "Finnish",
//             "country": "Finland",
//             "domainToUse": "high.fi",
//             "languageCode": "fi-fi",
//             "mostPopularName": "Suosituimmat",
//             "latestName": "Uusimmat",
//             "useToRetrieveLists": "finnish",
//             "genericNewsURLPart": "uutiset"
//         },
//         {
//             "language": "English",
//             "country": "United States",
//             "domainToUse": "en.high.fi",
//             "languageCode": "en-us",
//             "mostPopularName": "Most Popular",
//             "latestName": "Latest News",
//             "useToRetrieveLists": "english",
//             "genericNewsURLPart": "news"
//         }
//     ]
// }
// }
export type Language = {
  language: string
  country: string
  domainToUse: string
  languageCode: string
  mostPopularName: string
  latestName: string
  useToRetrieveLists: string
  genericNewsURLPart: string
}

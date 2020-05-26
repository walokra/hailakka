
// https://fi.high.fi/api/?act=listCategories&usedLanguage=finnish
// {
//   "responseData": {
//     "categories": [
//         {
//             "title": "Kotimaa",
//             "sectionID": 95,
//             "depth": 1,
//             "htmlFilename": "kotimaa"
//         },
//         {
//             "title": "Ulkomaat",
//             "sectionID": 96,
//             "depth": 1,
//             "htmlFilename": "ulkomaat"
//         },
//         {
//             "title": "Talous",
//             "sectionID": 94,
//             "depth": 1,
//             "htmlFilename": "talous"
//         },
//         {
//             "title": "Urheilu",
//             "sectionID": 98,
//             "depth": 1,
//             "htmlFilename": "urheilu"
//         }
//     ]
// }
// }
export type Category = {
  title: String
  sectionID: Number
  depth: Number
  htmlFilename: String
  highlight: Boolean
  selected: Boolean
}

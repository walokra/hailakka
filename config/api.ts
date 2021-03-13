// http://en.high.fi/api/help

// const domainToUse =
//   Platform.OS === 'web'
//     ? 'cors-anywhere.herokuapp.com/https://high.fi/'
//     : 'high.fi';

// const apiEndpoint =
//   Platform.OS === 'web'
//     ? 'https://cors-anywhere.herokuapp.com/https://fi.high.fi/uutiset/json-private?APIKEY=1234567890'
//     : 'https://fi.high.fi/uutiset/json-private?APIKEY=1234567890';

export const domainToUse = 'high.fi';

export const createApiEndpoint = (endpoint: string) => {
  return `https://${domainToUse}/${endpoint}/json-private?APIKEY=1234567890`;
};

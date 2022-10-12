module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      'react-native-reanimated/plugin'
    ],
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset']
  };
};

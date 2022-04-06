// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   env: {
//     production: {
//       plugins: ['react-native-paper/babel', 'react-native-reanimated/plugin'],
//     },
//   },
// };

// plugins: ['react-native-reanimated/plugin'], 

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript'
  ],
  plugins: ['react-native-reanimated/plugin', 'react-native-paper/babel'],
};
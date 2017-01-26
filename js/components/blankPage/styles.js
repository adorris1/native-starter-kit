
const React = require('react-native');

const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
      flex: 1,
      alignItems: 'center',
  },
  text: {
      fontSize: 20,
      marginBottom: 15,
      alignItems: 'center',
      color: '#000000'
  },
  mt: {
      marginTop: 18,
  },
});

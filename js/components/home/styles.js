
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
  //  backgroundColor:
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
      paddingTop: 15,

      alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  backGroundImage: {
      flex: 1,
      width: deviceWidth,
      height: deviceHeight,
      opacity: .3
  },
});

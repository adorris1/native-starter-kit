
const React = require('react-native');
const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const lightGrey = '#D7D7D7';
module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  header: {
    backgroundColor: 'white'
  },
  box: {
    flex: 1,
      borderBottomColor: lightGrey,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',

      borderWidth: 1,
      height: deviceHeight/4.4,

  },
  boxSize: {
    height:deviceHeight/4.4,
    width: deviceWidth,
      flex: 1,
      backgroundColor: 'transparent'
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
      paddingTop: 15,
      marginTop: deviceHeight/12,
      marginLeft: 50,
      color: lightGrey
  },
  mt: {
    marginTop: 18,
  },
  backGroundImage: {
      flex: 1,
      width: deviceWidth,
      height: deviceHeight,
  },
  customIcon: {
    height: 26,
    width: 26,
    marginLeft: 30,
    marginTop: deviceHeight/12 + 6,
  },
  // iosIcon: {
  //     color: 'white'
  // }.this.custIcon,
  iosIcon: {
      height: 30,
      width: 30,
      marginLeft: 30,
      marginTop: deviceHeight/12 + 6  ,
      color: 'white'
  },
  chevronIcon: {
      height: 30,
      width: 30,
      marginRight: 30,
      color: 'white',
      marginTop: deviceHeight/12 + 6,
  }
});

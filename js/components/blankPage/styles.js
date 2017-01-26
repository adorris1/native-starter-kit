
const React = require('react-native');

const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const stealBlue = '#626E74';
module.exports = StyleSheet.create({
  tint: {
      position: 'absolute',
      top: 62,
      bottom: 0,
      left: 0,
      right: 0,
     backgroundColor: '#00000088',


  },
  background: {
      width: deviceWidth,
      height: deviceHeight,
      alignSelf: 'center',
      flex: 1,
      opacity: 1,

  },
  row: {
      flex: 1,
      alignItems: 'center',
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: stealBlue,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      borderWidth: 1,


  },

  boxSize: {
      width: deviceWidth/3.4,
      height: deviceWidth/3.4,
  },
  text: {
      fontSize: 16,
      marginTop: 10,
      textAlignVertical: 'center',
      alignSelf: 'center',
      marginLeft: 28,

      color: 'white'
  },
  mt: {
      // marginTop: 65,
  },
  bodyImg: {
      flex: 1,
      alignSelf: 'center',

  },
    chevronIcon: {
        height: 22,
        width: 22,
        marginRight: 30,
        color: '#626E74',
        marginTop: 8,
    }
});

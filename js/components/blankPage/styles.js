
const React = require('react-native');
import _ from 'lodash';

const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const darkBlue = '#07316D';// color: '#07316D',
const lightGrey = '#D7D7D7';
const lightTeal= '#0083ac';

module.exports = StyleSheet.create({
  tint: {
      position: 'absolute',
      top: 65,
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
      alignItems: 'center',
      height: 60,
      //borderColor: lightGrey,
      borderWidth: 1,
      //borderRadius: deviceWidth/2,
      borderBottomColor: lightGrey,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      marginTop:2,
      marginLeft: 20,
      marginRight: 20


  },
    selectedRow: {
        alignItems: 'center',
        height: 60,
        borderColor: lightTeal,
        borderWidth: 1,
        borderRadius: deviceWidth/2,
        backgroundColor: lightTeal,
        marginTop:2,
        marginLeft: 20,
        marginRight: 20
    },

  rowBackground: {
      width: deviceWidth/3.4,
      height: deviceWidth/3.4,
  },
  text: {
      fontSize: 16,
      textAlignVertical: 'center',
      alignSelf: 'center',
      marginLeft: 60,

      color: lightGrey,
  },
    selectedText: {
        fontSize: 16,
        textAlignVertical: 'center',
        alignSelf: 'center',
        marginLeft: 30,

        color: lightGrey,
    },
  mt: {
      marginTop: 65,
  },
  bodyImg: {
      flex: 1,
      alignSelf: 'center',
      position:'relative'

  },
    radioIcon: {
        color: lightGrey,
        height: 24,
        width: 24,
    },
    selectedRadioIcon: {
        color: lightTeal,
        height: 24,
        width: 24,
    },
    chevronIcon: {
        height: 30,
        width: 30,
        marginRight: 40,
        color: lightGrey,
    },
    selectedChevronIcon: {
        height: 30,
        width: 30,
        marginRight: 44,
        color: lightGrey,
        backgroundColor: 'transparent'
    },

    headNeck: {
        top: 60,
        left: 150,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    shouldersChest: {
        top: 100,
        left: 230,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    arms: {
        top: 200,
        left: 90,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    back: {
        top: 150,
        left: 170,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    core: {
        top: 220,
        left: 170,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    hips: {
        top: 280,
        left: 120,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    quads: {
        top: 334,
        left: 200,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    hamstrings: {
        top: 360,
        left: 220,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    adductors: {
        top: 354,
        left: 160,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    calf: {
        top: 454,
        left: 120,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    lowerLegFoot: {
        top: 500,
        left: 220,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    balance: {
        top: 554,
        left: 104,
        position: 'absolute',
        backgroundColor: 'transparent'
    }

});


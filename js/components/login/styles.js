
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {Platform} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backGroundImage: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,

      alignSelf: 'center',
      opacity: 1
  },
  icon: {
    width: 200,
    height: 70,
    alignSelf: 'center',
      paddingLeft: 40,
      paddingRight: 40,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: deviceHeight/3.2,


  },
  bg: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
   // backgroundColor:'#07316D'
  },
  btn: {
    marginTop: 20,
    borderColor: "#D7D7D7",
    alignSelf: 'stretch',
    flex: 1,
    marginBottom: 30
  },
  btnText: {
    color: "#D7D7D7"
  },
  appTitle: {
    fontSize: 32,
    color: '#D7D7D7',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    paddingTop: 20,
    fontFamily: 'Helvetica'
  },
  subTitle: {
    fontFamily: 'Times New Roman',
    fontSize: 22,
      alignSelf: 'center',
      //color: '#07316D',
      color: '#D7D7D7',
      lineHeight: 28,


  },
  subSubTitle: {
    fontSize: 16,
      alignSelf: 'center',
      fontFamily: 'Times New Roman',
      //color: '#07316D',
      color: '#D7D7D7',
      lineHeight: 20,
  },
  fontIcon: {
    color: "#D7D7D7",
      alignItems: 'flex-end'
  },

});

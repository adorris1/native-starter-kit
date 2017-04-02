
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 65,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#00000088',
    },
    backGroundImage: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: '#013D7B',
        alignSelf: 'center',
        opacity: 1
    },
    row: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 15,
        alignItems: 'center',
        color: 'white'
    },
    mt: {
        marginTop: 18,
    },
});

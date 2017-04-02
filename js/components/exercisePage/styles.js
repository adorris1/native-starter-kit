
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({

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
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: '300',
        color: 'red'
    },
    titleSection: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
});

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Header, Title, InputGroup, Input, Button, Icon, View,Text } from 'native-base';

import styles from './styles';

const {
    replaceAt,
    popRoute,
} = actions;

class FaqPage extends Component {
    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
        popRoute: React.PropTypes.func,
        navigation: React.PropTypes.shape({
            key: React.PropTypes.string,
        }),
    }
    constructor(props) {
        super(props);

    }

    popRoute() {
        this.props.popRoute(this.props.navigation.key);
    }

    render() {
        const { props: { name, index, list } } = this;

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title>{(name) ? this.props.name : 'FAQ page'}</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>

                <Content padder>
                    <Text>
                        { 'Create Something Awesome . . .'}
                    </Text>
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        popRoute: key => dispatch(popRoute(key)),
    };
}

const mapStateToProps = state => ({
    navigation: state.cardNavigation,
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(FaqPage);

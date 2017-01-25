
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, InputGroup, Input, Button, Icon, View,Text } from 'native-base';

import { setUser } from '../../actions/user';
import styles from './styles';
import { inputColorPlaceholder } from '../../themes/base-theme';

const {
  replaceAt,
} = actions;

// const background = require('../../../images/dorrisBlueWood.png');
// const iconShoulders = require('../../../images/shoulderIcons.png');
const spineIcon = require('../../../images/dorrisIconsNoLabel.png');
const background = require('../../../images/umweahfy.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
  }

  render() {



    return (
      <Container>
        <View>
          <Image source={background} style={styles.backGroundImage}/>
        </View>
        <View style={styles.container}>
          <Content>
              <View style={styles.bg}>

                <Text style = {styles.appTitle}>
                    {'INJURY GUIDE'}
                </Text>
                <Image source={spineIcon} style={styles.icon}/>

                <InputGroup style={styles.input}>
                  <Icon name="ios-person" style={styles.fontIcon} />
                  <Input placeholder="EMAIL" placeholderTextColor="#D7D7D7" onChangeText={name => this.setState({ name })} />
                </InputGroup>
                <InputGroup style={styles.input}>
                  <Icon name="ios-unlock-outline" style={styles.fontIcon} />
                  <Input
                      placeholder="PASSWORD"
                      secureTextEntry
                      placeholderTextColor="#D7D7D7"
                  />
                </InputGroup>
                <Button bordered style={styles.btn} textStyle={styles.btnText} onPress={() => this.replaceRoute('home')} >
                  Login
                </Button>
              </View>

          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setUser: name => dispatch(setUser(name)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);

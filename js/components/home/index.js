
import React, { Component } from 'react';
import { TouchableOpacity, Image, Stylesheet } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex, getExercises } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
const background = require('../../../images/runner.png');

const {
  reset,
  pushRoute,
} = actions;

class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    topics: React.PropTypes.arrayOf(React.PropTypes.string),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
      this.props.setIndex(index);
      this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);

  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Image source={background} style={styles.backGroundImage}>
        <Header>
          <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <Grid style={styles.mt}>
            {this.props.topics.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.pushRoute('blankPage', i) }
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>
        </Content>
        </Image>

      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),

  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  navigation: state.cardNavigation,
  topics: state.list.topics
});

export default connect(mapStateToProps, bindAction)(Home);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, View} from 'native-base';
import _ from 'lodash';
import { openDrawer } from '../../actions/drawer';
import { setAreaIndex, setExerciseList } from '../../actions/list';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { TouchableOpacity, Image, Stylesheet } from 'react-native';

const background = require('../../../images/darkBlueGradiant.png');
const bodySilhouette = require('../../../images/bodyImage.png');

import styles from './styles';

const {
  popRoute,
  pushRoute
} = actions;

class BlankPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,

      bodyAreas: React.PropTypes.arrayOf(React.PropTypes.string),
    setAreaIndex: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  pushRoute(route, index) {
    console.log("pushRoute in blankPage index: " + index + " route: " + route);
      this.props.setAreaIndex(index);
      this.props.pushRoute({key: route, index: 1}, this.props.navigation.key);
  }

  render() {

    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'REHAB GUIDE'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <View>
          <Image source={background} style={styles.background}/>

        </View>
        <Image source={bodySilhouette} style={styles.bodyImg}/>

        <View style={styles.tint}>
          <Content>

              <Grid style={styles.mt}>
                  {this.props.bodyAreas.map((item, i) =>
                      <Row key={i} style={styles.row}>
                        <Col>
                          <TouchableOpacity
                              onPress={() => this.pushRoute('exerciseListPage', i) }
                          >
                              <Text style={styles.text}>{item}</Text>
                          </TouchableOpacity>
                        </Col>
                        <Col style={{width: 30}}>
                          <Icon name="ios-arrow-forward" style={styles.chevronIcon}/>

                        </Col>
                      </Row>
                  )}
              </Grid>

          </Content>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setAreaIndex: index => dispatch(setAreaIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),


  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  bodyAreas: state.list.bodyAreas,

});


export default connect(mapStateToProps, bindAction)(BlankPage);

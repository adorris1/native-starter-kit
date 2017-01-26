
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, } from 'native-base';
import _ from 'lodash';
import { openDrawer } from '../../actions/drawer';
import { setAreaIndex, setExerciseList } from '../../actions/list';
import { TouchableOpacity } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';


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
    const areas = [];
    this.props.bodyAreas.map((item, i)=> {
      areas[i]=item;
    });
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Blank Page'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

          <Content>
              <Grid style={styles.mt}>
                <Col>
                  <Row key={0}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 0) }>
                      <Text style={styles.text}>{areas[0]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={1}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 1) }>
                      <Text style={styles.text}>{areas[1]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={2}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 2) }>
                      <Text style={styles.text}>{areas[2]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={3}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 3) }>
                      <Text style={styles.text}>{areas[3]}</Text>
                    </TouchableOpacity>
                  </Row>
                </Col>
                <Col>
                  <Row key={4}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 4) }>
                      <Text style={styles.text}>{areas[4]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={5}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 5) }>
                      <Text style={styles.text}>{areas[5]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={6}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 6) }>
                      <Text style={styles.text}>{areas[6]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={7}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 7) }>
                      <Text style={styles.text}>{areas[7]}</Text>
                    </TouchableOpacity>
                  </Row>
                </Col>
                <Col>
                  <Row key={8}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 8) }>
                      <Text style={styles.text}>{areas[8]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={9}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 9) }>
                      <Text style={styles.text}>{areas[9]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={10}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 10) }>
                      <Text style={styles.text}>{areas[10]}</Text>
                    </TouchableOpacity>
                  </Row>
                  <Row key={11}>
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => this.pushRoute('exerciseListPage', 11) }>
                      <Text style={styles.text}>{areas[11]}</Text>
                    </TouchableOpacity>
                  </Row>
                </Col>
              </Grid>
          </Content>
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

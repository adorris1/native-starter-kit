
import React, { Component } from 'react';
import { TouchableOpacity, Image, Stylesheet } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, View } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';
import _ from 'lodash';

import { openDrawer } from '../../actions/drawer';
import { setIndex, getExercises } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
const background = require('../../../images/darkBlueGradiant.png');
const exerciseIcon = require('../../../images/exerciseIcon.png');


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
     const grid = [];
        this.props.topics.map((item, i) => {
            grid[i]= item;

        })
      //console.log("gridlayout arry "+ grid);


    return (
      <Container theme={myTheme} style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <Grid>
              <Row style={{height: 0}}/>
                  <Image source={background} style={styles.boxSize}>
              <Row key={0} style={styles.box}>

                  <Col style={{width: 30}}>
                        <Icon name="ios-information-circle" style={styles.iosIcon}/>
                    </Col>
                    <Col>
                        <TouchableOpacity
                            onPress={() => this.pushRoute('faqPage', 0) }>
                          <Text style={styles.text}>{grid[0]}</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col style={{width: 30}}>
                      <Icon name="ios-arrow-forward" style={styles.chevronIcon}/>
                    </Col>

                  </Row>
                  </Image>
              <Image source={background} style={styles.boxSize}>
                  <Row key={1} style={styles.box}>
                    <Col style={{width: 30}}>
                      <Icon name="ios-search" style={styles.iosIcon}/>
                    </Col>
                    <Col>
                    <TouchableOpacity
                        onPress={() => this.pushRoute('symptomIdentifierPage', 1) }>
                      <Text style={styles.text}>{grid[1]}</Text>
                    </TouchableOpacity>
                    </Col>
                    <Col style={{width: 30}}>
                      <Icon name="ios-arrow-forward" style={styles.chevronIcon}/>
                    </Col>
                  </Row>
              </Image>
              <Image source={background} style={styles.boxSize}>
                  <Row key={2}  style={styles.box}>
                      <Col style={{width: 30}}>
                      <Icon name="ios-medkit" style={styles.iosIcon}/>
                    </Col>
                     <Col>
                      <TouchableOpacity
                          onPress={() => this.pushRoute('injurySummaryPage', 2) }>
                        <Text style={styles.text}>{grid[2]}</Text>
                      </TouchableOpacity>
                    </Col>
                    <Col style={{width: 30}}>
                      <Icon name="ios-arrow-forward" style={styles.chevronIcon}/>
                    </Col>
                  </Row>
              </Image>
              <Image source={background} style={styles.boxSize}>
                  <Row key={3} style={styles.box}>
                    <Col style={{width: 30}}>
                      <Image source={exerciseIcon} style={styles.customIcon}/>
                    </Col>
                    <Col>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => this.pushRoute('blankPage', 3) }>
                      <Text style={styles.text}>{grid[3]}</Text>
                    </TouchableOpacity>
                    </Col>
                    <Col style={{width: 30}}>
                      <Icon name="ios-arrow-forward" style={styles.chevronIcon}/>
                    </Col>
                  </Row>
              </Image>
          </Grid>
        </Content>
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

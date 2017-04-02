
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, View} from 'native-base';
import _ from 'lodash';
import { openDrawer } from '../../actions/drawer';
import { setAreaIndex, setPreviewAreaText } from '../../actions/list';
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
    previewAreaIndex:  React.PropTypes.number,
    setPreviewAreaText: React.PropTypes.func,
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
    //console.log("pushRoute in blankPage index: " + index + " route: " + route);
      this.props.setAreaIndex(index);
      this.props.pushRoute({key: route, index: 1}, this.props.navigation.key);
  }

  _setPreviewAreaText(index){
   // console.log("selected index in _setPreviewArea is: "+ index)
      this.props.setPreviewAreaText(index);
      this.setState({previewAreaIndex: index})

  }

  _setIcon(index){

      if(this.props.previewAreaIndex === index){
          //console.log("index MATCH in _setIcon index is: "+index+ " previewAreaIndex: "+ this.props.previewAreaIndex)
          return (
            <Icon name="ios-radio-button-on" style={styles.selectedRadioIcon}/>
            )
      } else {
         // console.log("Index NOT MATCH  in _setIcon index is: "+index+ " previewAreaIndex: "+ this.props.previewAreaIndex)

          return (
          <Icon name="ios-radio-button-off" style={styles.radioIcon}/>
          )
      }
  }

  render() {
      const bodyAreas =[];
      let rowCol, radioIcon;
      this.props.bodyAreas.map((item, i) => {
          bodyAreas[i]=item;
      });
      if(this.props.previewAreaIndex > -1) {
        //console.log("in render areas[7]: "+ bodyAreas[7])
        rowCol= (

            <Row style={styles.selectedRow}>
              <Col>
                <TouchableOpacity
                    onPress={() => this.pushRoute('exerciseListPage', this.props.previewAreaIndex) }>
                  <Text style={styles.selectedText}>
                      {bodyAreas[this.props.previewAreaIndex]}
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col style={{width: 30}}>
                <Icon name="ios-arrow-forward" style={styles.selectedChevronIcon}/>
              </Col>
            </Row>
        )
      } else {
         rowCol= (
              <Row style={styles.row}>
                    <Text style={styles.text}>{'Select Your Symptom Location'}</Text>
              </Row>
          );
      }

      return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
          {/*<Title>{(this.props.name) ? this.props.name : 'REHAB GUIDE'}</Title>*/}
            <Title>{'REHAB GUIDE'}</Title>

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
            <Grid>
                {rowCol}
            </Grid>

              <Button transparent
                  style={styles.headNeck}
                  onPress={() => this._setPreviewAreaText(0) }>
                  {this._setIcon(0)}
              </Button>
            <Button transparent
              style={styles.shouldersChest}
              onPress={() => this._setPreviewAreaText(1) }>
                {this._setIcon(1)}
                </Button>
            <Button transparent
                style={styles.arms}
                onPress={() => this._setPreviewAreaText(2) }>
                {this._setIcon(2)}            </Button>
            <Button transparent
                style={styles.back}
                onPress={() => this._setPreviewAreaText(3) }>
                {this._setIcon(3)}            </Button>
            <Button transparent
                    style={styles.core}
                    onPress={() => this._setPreviewAreaText(4) }>
                {this._setIcon(4)}            </Button>
              <Button transparent
                      style={styles.hips}
                      onPress={() => this._setPreviewAreaText(5) }>
                  {this._setIcon(5)}              </Button>
              <Button transparent
                      style={styles.quads}
                      onPress={() => this._setPreviewAreaText(6) }>
                  {this._setIcon(6)}              </Button>
              <Button transparent
                      style={styles.hamstrings}
                      onPress={() => this._setPreviewAreaText(7) }>
                  {this._setIcon(7)}              </Button>
              <Button transparent
                      style={styles.adductors}
                      onPress={() => this._setPreviewAreaText(8) }>
                  {this._setIcon(8)}              </Button>
              <Button transparent
                      style={styles.calf}
                      onPress={() => this._setPreviewAreaText(9) }>
                  {this._setIcon(9)}              </Button>
              <Button transparent
                      style={styles.lowerLegFoot}
                      onPress={() => this._setPreviewAreaText(10) }>
                  {this._setIcon(10)}              </Button>
              <Button transparent
                      style={styles.balance}
                      onPress={() => this._setPreviewAreaText(11) }>
                  {this._setIcon(11)}              </Button>
            </Content>
          </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setPreviewAreaText: index => dispatch(setPreviewAreaText(index)),
    setAreaIndex: index => dispatch(setAreaIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),


  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  index: state.list.selectedIndex,
  bodyAreas: state.list.bodyAreas,
  previewAreaIndex: state.list.previewAreaIndex
});


export default connect(mapStateToProps, bindAction)(BlankPage);

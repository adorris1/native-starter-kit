
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
    console.log("pushRoute in blankPage index: " + index + " route: " + route);
      this.props.setAreaIndex(index);
      this.props.pushRoute({key: route, index: 1}, this.props.navigation.key);
  }

  _setPreviewAreaText(index){
      this.props.setPreviewAreaText(index);
      this.setState({previewAreaIndex: index})

  }

  render() {
      const bodyAreas =[];
      let rowCol;
      this.props.bodyAreas.map((item, i) => {
          bodyAreas[i]=item;
      });
      if(this.props.previewAreaIndex > -1) {
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
                <Col>
                    <Text style={styles.text}>{'Select a Body Area'}</Text>
                </Col>
                <Col style={{width: 30}}>
                  <Icon name="ios-arrow-forward" style={styles.chevronIcon}/>
                </Col>
              </Row>
          );
      }



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
            <Grid>
                {rowCol}
            </Grid>

              <Button transparent
                  style={styles.headNeck}
                  onPress={() => this._setPreviewAreaText(0) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 0)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
            <Button transparent
              style={styles.shouldersChest}
              onPress={() => this._setPreviewAreaText(1) }>
              <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 1)? styles.selectedRadioIcon : styles.radioIcon} />
            </Button>
            <Button transparent
                style={styles.arms}
                onPress={() => this._setPreviewAreaText(2) }>
              <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 2)? styles.selectedRadioIcon : styles.radioIcon} />
            </Button>
            <Button transparent
                style={styles.back}
                onPress={() => this._setPreviewAreaText(3) }>
              <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 3)? styles.selectedRadioIcon : styles.radioIcon} />
            </Button>
            <Button transparent
                    style={styles.core}
                    onPress={() => this._setPreviewAreaText(4) }>
              <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 4)? styles.selectedRadioIcon : styles.radioIcon} />
            </Button>
              <Button transparent
                      style={styles.hips}
                      onPress={() => this._setPreviewAreaText(5) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 5)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
              <Button transparent
                      style={styles.quads}
                      onPress={() => this._setPreviewAreaText(6) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 6)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
              <Button transparent
                      style={styles.hamstrings}
                      onPress={() => this._setPreviewAreaText(7) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 7)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
              <Button transparent
                      style={styles.adductors}
                      onPress={() => this._setPreviewAreaText(8) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 8)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
              <Button transparent
                      style={styles.calf}
                      onPress={() => this._setPreviewAreaText(9) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 9)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
              <Button transparent
                      style={styles.lowerLegFoot}
                      onPress={() => this._setPreviewAreaText(10) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 10)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
              <Button transparent
                      style={styles.balance}
                      onPress={() => this._setPreviewAreaText(11) }>
                <Icon name="ios-radio-outline" style={(this.props.previewAreaIndex === 11)? styles.selectedRadioIcon : styles.radioIcon} />
              </Button>
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
  name: state.user.name,
  index: state.list.selectedIndex,
  bodyAreas: state.list.bodyAreas,
  previewAreaIndex: state.list.previewAreaIndex
});


export default connect(mapStateToProps, bindAction)(BlankPage);

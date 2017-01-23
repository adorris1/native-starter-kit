
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import _ from 'lodash';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

class BlankPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    areas: React.PropTypes.arrayOf(React.PropTypes.object),
    exercises: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.object)),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    const {props: {name, index, areas}}= this;
      let exerciseNodes = _.values(this.props.exercises).map((itemArray) => {
          console.log("itemArray:");
          console.table(itemArray);
              return itemArray.map((item, j ) => {
                  if(item.key === index){

                      console.log("blankpage double map: " +item.key + " value: " + item.value)

                      return(
                          <ListItem style={styles.row}>
                            <Text style={styles.text}>{item.value}</Text>
                          </ListItem>
                      );
                  }

              })
      })


    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Blank Page'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <List style={styles.mt}>
              {exerciseNodes}
          </List>

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
  areas: state.list.bodyAreas,
  exercises: state.list.exercises,
});


export default connect(mapStateToProps, bindAction)(BlankPage);

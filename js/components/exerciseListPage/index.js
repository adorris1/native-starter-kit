
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, View } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { Image } from 'react-native';

import _ from 'lodash';
import { openDrawer } from '../../actions/drawer';
import { setExerciseIndex, setExerciseList } from '../../actions/list';
import { TouchableOpacity } from 'react-native';
const background = require('../../../images/mediumOrangeWeight.png');

import styles from './styles';

const {
    popRoute,
    pushRoute
} = actions;

class ExerciseListPage extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        areaIndex: React.PropTypes.number,
        exercises: React.PropTypes.arrayOf(React.PropTypes.object),
        areas: React.PropTypes.arrayOf(React.PropTypes.string),
        setExerciseIndex: React.PropTypes.func,
        setExerciseList: React.PropTypes.func,
        // exerciseIndex: React.PropTypes.number,
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
        this.props.setExerciseIndex(index);
        this.props.pushRoute({key: route, index: 1}, this.props.navigation.key);
    }
    _setExerciseList(selectedList) {
        this.props.setExerciseList(selectedList);
    }

    render() {
        let selectedAreaExerciseList;
        const {props: { areaIndex, areas}}= this;
        let exerciseNodes = _.values(this.props.exercises).map((itemArray) => {

            if(itemArray.key === areaIndex){
                selectedAreaExerciseList = itemArray.value;
                this._setExerciseList(selectedAreaExerciseList);
                return itemArray.value.map((item, i ) => {
                    return(
                        <ListItem style={styles.row}
                                  onPress={() => this.pushRoute('exercisePage', i) }

                        >
                            <Text style={styles.text}>{item.name}</Text>
                        </ListItem>
                    );
                })
            }
        })

        return (
            <Container>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title>
                        {(!isNaN(areaIndex)) ? areas[areaIndex] : 'Exercise List Page'}</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>
                <View style={styles.backGroundImage}/>

                <View style={styles.container}>
                <Content>
                    <List style={styles.mt}>
                        {exerciseNodes}
                    </List>

                </Content>
                </View>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        setExerciseIndex: index => dispatch(setExerciseIndex(index)),
        setExerciseList: exerciseList => dispatch(setExerciseList(exerciseList)),
        openDrawer: () => dispatch(openDrawer()),
        popRoute: key => dispatch(popRoute(key)),
        pushRoute: (route, key) => dispatch(pushRoute(route, key)),


    };
}

const mapStateToProps = state => ({
    navigation: state.cardNavigation,
    name: state.user.name,
    index: state.list.selectedIndex,
    areaIndex: state.list.areaIndex,
    areas: state.list.bodyAreas,
    exercises: state.list.exercises,
    exerciseList: state.list.exerciseList,

});


export default connect(mapStateToProps, bindAction)(ExerciseListPage);

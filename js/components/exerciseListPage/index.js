
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import _ from 'lodash';
import { openDrawer } from '../../actions/drawer';
import { setExerciseIndex, setExerciseList } from '../../actions/list';
import { TouchableOpacity } from 'react-native';

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
        areas: React.PropTypes.arrayOf(React.PropTypes.object),
        setExerciseIndex: React.PropTypes.func,
        setExerciseList: React.PropTypes.func,
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

    render() {

        const {props: {name, areaIndex, areas, exercises}}= this;
        let exerciseNodes = _.values(this.props.exercises).map((itemArray) => {

            if(itemArray.key === areaIndex){
                this.props.setExerciseList(itemArray.value);
                return itemArray.value.map((item, i ) => {
                    return(
                        <ListItem style={styles.row}
                                  onPress={() => this.pushRoute('exercisePage', i) }

                        >
                            <Text style={styles.text}>{item.value}</Text>
                        </ListItem>
                    );
                })
            }
        })

        return (
            <Container style={styles.container}>
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

});


export default connect(mapStateToProps, bindAction)(ExerciseListPage);

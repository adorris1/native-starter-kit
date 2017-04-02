
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content,  Button, Icon } from 'native-base';
import { Text, View, TouchableHighlight,} from 'react-native';
import Bar from 'react-native-bar-collapsible';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import _ from 'lodash';
import Accordion from 'react-native-collapsible/Accordion';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
    popRoute,
    pushRoute
} = actions;

const CONTENT =[
    {
        title: "Starting Position",
        content: {}
    },
    {
        title: "Action",
        content: {}
    }, {
        title: "Keys to Success",
        content: {}
    }, {

        title: "Common Errors",
        content: {}
    }, {
        title: "Recommended For",
        content: {}
}];


const SELECTORS = [
    {
        title: 'First',
        value: 0,
    },
    {
        title: 'Third',
        value: 2,
    },
    {
        title: 'None',
        value: false,
    },
];


    class ExercisePage extends Component {

    static propTypes = {
        index: React.PropTypes.number,
        areaIndex: React.PropTypes.number,
        exerciseIndex: React.PropTypes.number,
        exercises: React.PropTypes.arrayOf(React.PropTypes.object),
        exerciseComponents: React.PropTypes.arrayOf(React.PropTypes.string),
        exerciseList: React.PropTypes.arrayOf(React.PropTypes.object),
        openDrawer: React.PropTypes.func,
        popRoute: React.PropTypes.func,
        navigation: React.PropTypes.shape({
            key: React.PropTypes.string,
        }),
    }
    constructor(props) {
        super(props);
        this.state = {
            activeSection: false,
            collapsed: true,
            exerciseAction: undefined,
        };
    }

    popRoute() {
        this.props.popRoute(this.props.navigation.key);
    }

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    _setSection(section) {
        this.setState({ activeSection: section });
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
                <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
            </Animatable.View>
        );
    }
    render() {
        const { props: { exerciseList, exerciseIndex, areaIndex } } = this;

        let myExerciseList=[];
        let exerciseComponent = [];
        let type, startingPosition, action, keysToSuccess, commonErrors, recommendedFor, exerciseName;


        this.props.exerciseList.map((item, i) => {
            myExerciseList[i]=item;
        });
        exerciseComponent = myExerciseList[exerciseIndex];
        exerciseName = exerciseComponent.name;
        type = exerciseComponent.type;
        CONTENT[0].content = exerciseComponent.startingPosition;
        CONTENT[1].content = exerciseComponent.exerciseAction;
        CONTENT[2].content = exerciseComponent.keysToSuccess;
        CONTENT[3].content = exerciseComponent.commonErrors;
        CONTENT[4].content = exerciseComponent.recommendedFor;
        for(let i = 0; i<CONTENT.length; i++){
            let strContentArray = "";
            if(_.isArray(CONTENT[i].content)){
                let contentArray = CONTENT[i].content;
                // console.table(contentArray)
                // console.log("contentArray: ");
                // console.log("in isArray!")
                for(let j =0;j<contentArray.length; j++){
                    strContentArray += "\n"+ contentArray[j].key_0;
                 //   console.log("contentArrayLine: " , strContentArray);

                }
               // console.log("contentArrayLine: " + strContentArray);

                CONTENT[i].content = strContentArray;

            }
            else {
                CONTENT[i].content = CONTENT[i].content.key_0;
            }
        }


        console.log("CONTENT: ")
        console.table(CONTENT);


        // let exerciseNodes = _.values(this.props.exerciseList).map((itemArray) => {
        //
        //     if(itemArray.key === exerciseIndex){
        //         return itemArray.value.map((item, i ) => {
        //
        //             exerciseName = item.name;
        //             type = item.type;
        //             startingPosition = item.startingPosition;
        //             action = item.action;
        //             keysToSuccess = item.keysToSuccess;
        //             commonErrors = item.commonErrors;
        //             recommendedFor = item.recommendedFor;
        //
        //
        //         })
        //     }
        // })


       // console.log("name: "+ exerciseName + " type " + type);

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title style={styles.title}>  {exerciseName}</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>

                <Content padder>

                    <TouchableHighlight onPress={this._toggleExpanded}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>
                               Exercise Type: {type}
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <Collapsible collapsed={this.state.collapsed} align="center">
                        <View style={styles.content}>
                            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
                        </View>
                    </Collapsible>
                    <Accordion
                        activeSection={this.state.activeSection}
                        sections={CONTENT}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        duration={400}
                        onChange={this._setSection.bind(this)}
                    />
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
    index: state.list.selectedIndex,
    exerciseIndex: state.list.exerciseIndex,
    exerciseList: state.list.exerciseList,
    areaIndex: state.list.areaIndex,
    exercises: state.list.exercises
});


export default connect(mapStateToProps, bindAction)(ExercisePage);

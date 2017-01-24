import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon,List, ListItem, } from 'native-base';

//import styles from '../blankPage/styles';

class Exercise extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        action: React.PropTypes.string,
        type: React.PropTypes.string,
        commonErrors: React.PropTypes.arrayOf(React.PropTypes.string),
        keysToSuccess: React.PropTypes.arrayOf(React.PropTypes.string),
        progression: React.PropTypes.arrayOf(React.PropTypes.string),
        purpose: React.PropTypes.arrayOf(React.PropTypes.string),
        recommendedFor: React.PropTypes.arrayOf(React.PropTypes.string),
        startingPosition: React.PropTypes.arrayOf(React.PropTypes.string),


    };
    render() {
        return (
            <Content>
                <Grid style={styles.mt}>
                    {this.props.startingPosition.map((item, i) =>
                        <Row key={i}>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() => this.pushRoute('blankPage', i)}
                            >
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        </Row>
                    )}
                </Grid>
            </Content>
        )
    }
}
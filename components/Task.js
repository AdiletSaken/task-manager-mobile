import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text, TouchableOpacity } from 'react-native';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: props.task.item.highlighted
        };
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
    }

    toggle() {
        this.setState(state => ({
            highlighted: !state.highlighted
        }));
    }

    delete() {
        this.props.onDelete(true);
    }

    render() {
        const taskStyles = [styles.task];
        if (this.props.task.index === 0) {
            taskStyles.push(styles.first);
        }
        return (
            <TouchableWithoutFeedback onPress={ this.toggle }>
                <View style={ taskStyles }>
                    <View style={ styles.data }>
                        { this.state.highlighted && <View style={ styles.highlight }></View> }
                        <View style={ styles.info }>
                            <Text style={ styles.text }>{ this.props.task.item.title }</Text>
                            <Text style={ styles.text }>{ this.props.task.item.datetime }</Text>
                        </View>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity style={ styles.button } onPress={ this.delete }>
                            <Text style={ styles.buttonText }>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    task: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#edf2f4'
    },
    first: {
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#edf2f4'
    },
    data: {
        height: 70,
        display: 'flex',
        flexDirection: 'row'
    },
    highlight: {
        width: 10,
        height: 70,
        backgroundColor: '#0ead69'
    },
    info: {
        padding: 15,
        height: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16
    },
    buttonContainer: {
        padding: 15
    },
    button: {
        width: 70,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e63946',
        borderRadius: 4
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16
    }
});

export default Task;

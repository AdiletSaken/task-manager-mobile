import React from 'react';
import { StyleSheet, View, TextInput, Text, Switch, TouchableOpacity } from 'react-native';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            datetime: '',
            highlighted: false
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDatetime = this.changeDatetime.bind(this);
        this.changeHighlighted = this.changeHighlighted.bind(this);
        this.reset = this.reset.bind(this);
        this.save = this.save.bind(this);
    }

    changeTitle(e) {
        const newTitle = e.nativeEvent.text;
        this.setState({
            title: newTitle
        });
    }

    changeDatetime(e) {
        const newDatetime = e.nativeEvent.text;
        this.setState({
            datetime: newDatetime
        });
    }

    changeHighlighted(highlighted) {
        const newHighlighted = highlighted;
        this.setState({
            highlighted: newHighlighted
        });
    }

    reset() {
        this.setState({
            title: '',
            datetime: '',
            highlighted: false
        });
    }

    save() {
        const task = {
            title: this.state.title,
            datetime: this.state.datetime,
            highlighted: this.state.highlighted
        };
        this.props.onSaveTask(task);
        this.reset();
    }

    render() {
        return (
            <View style={ styles.editor }>
                <TextInput style={ styles.input } placeholder="Add Task" value={ this.state.title } onChange={ this.changeTitle }></TextInput>
                <TextInput style={ [styles.input, styles.marginTop] } placeholder="Add Day & Time" value={ this.state.datetime } onChange={ this.changeDatetime }></TextInput>
                <View style={ [styles.reminder, styles.marginTop] }>
                    <Text style={ styles.text }>Set Reminder</Text>
                    <Switch style={ styles.switch } value={ this.state.highlighted } onValueChange={ this.changeHighlighted }></Switch>
                </View>
                <TouchableOpacity style={ [styles.button, styles.marginTop] } onPress={ this.save }>
                    <Text style={ styles.buttonText }>Save Task</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    editor: {
        paddingTop: 15,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'column'
    },
    marginTop: {
        marginTop: 15
    },
    input: {
        padding: 5,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 16
    },
    reminder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    },
    switch: {
        marginLeft: 15
    },
    button: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d3557',
        borderRadius: 4
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16
    }
});

export default Editor;

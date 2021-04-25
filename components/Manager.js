import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Editor from './Editor';
import List from './List';

class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tasks: [
                {
                    id: 1,
                    title: 'Build a rocket!',
                    datetime: '10 Apr 10:00 AM',
                    highlighted: true
                },
                {
                    id: 2,
                    title: 'Test the rocket!',
                    datetime: '11 Apr 1:00 PM',
                    highlighted: false
                },
                {
                    id: 3,
                    title: 'Fly to Mars!',
                    datetime: '12 Apr 3:00 PM',
                    highlighted: false
                }
            ],
            lastTaskId: -1
        };
        this.state.lastTaskId = this.state.tasks.reduce((maxId, task) => Math.max(maxId, task.id), this.state.lastTaskId);
        this.toggle = this.toggle.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    toggle() {
        this.setState(state => ({
            open: !state.open
        }));
    }

    saveTask(task) {
        const newLastTaskId = this.state.lastTaskId + 1;
        const id = {
            id: newLastTaskId
        };
        const newTask = Object.assign(id, task);
        this.setState(state => ({
            tasks: state.tasks.concat(newTask),
            lastTaskId: newLastTaskId
        }));
    }

    deleteTask(deletedTask) {
        this.setState(state => ({
            tasks: this.state.tasks.filter(task => task !== deletedTask)
        }));
    }

    render() {
        const buttonStyles = [styles.button];
        if (this.state.open) {
          buttonStyles.push(styles.buttonClose);
        }
        return (
          <View>
            <View style={ styles.buttonContainer }>
              <TouchableOpacity style={ buttonStyles } onPress={ this.toggle }>
                <Text style={ styles.buttonText }>{ this.state.open ? 'Close' : 'Add' }</Text>
              </TouchableOpacity>
            </View>
            { this.state.open && <Editor onSaveTask={ this.saveTask }></Editor> }
            <List tasks={ this.state.tasks } onDeleteTask={ this.deleteTask }></List>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 15,
        paddingHorizontal: 15
    },
    button: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0ead69',
        borderRadius: 4
    },
    buttonClose: {
        backgroundColor: '#e63946'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16
    }
});

export default Manager;

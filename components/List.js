import React from 'react';
import { FlatList } from 'react-native';
import Task from './Task';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.renderTask = this.renderTask.bind(this);
    }

    deleteTask(task) {
        this.props.onDeleteTask(task);
    }

    renderTask(task) {
        return <Task key={ task.item.id } task={ task } onDelete={ e => { this.deleteTask(task.item) } }></Task>;
    }

    render() {
        const tasks = this.props.tasks;
        return (
            <FlatList data={ tasks } renderItem={ this.renderTask }></FlatList>
        );
    }
}

export default List;

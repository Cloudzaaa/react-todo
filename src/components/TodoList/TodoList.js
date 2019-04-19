import React from 'react';
import TodoListItem from '../TodoListItem';
import {MDBListGroup, MDBListGroupItem} from "mdbreact";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
        return (
            <MDBListGroupItem key={item.id}>
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </MDBListGroupItem>
        )
    });
    return (
        <MDBListGroup>
            {elements}
        </MDBListGroup>
    )
};

export default TodoList;
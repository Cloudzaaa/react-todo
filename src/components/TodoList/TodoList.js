import React from 'react';
import TodoListItem from '../TodoListItem';
import {MDBListGroup, MDBListGroupItem} from "mdbreact";

const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
        return (
            <MDBListGroupItem key={item.id}>
                <TodoListItem { ...itemProps } />
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
import React from 'react';
import {MDBBtn, MDBBtnGroup, MDBIcon} from 'mdbreact';
import './style.css';

const TodoListItem= ( {label, important = false} ) => {
    const itemStyle = {
        color: important ? 'tomato' : 'black',
    };

    return (
        <div className="todo-list-item d-flex">
            <span style={itemStyle}>{label}</span>
            <MDBBtnGroup size="sm">
                <MDBBtn color="danger">
                    <MDBIcon icon="trash-alt" />
                </MDBBtn>
                <MDBBtn color="success">
                    <MDBIcon icon="check" />
                </MDBBtn>
            </MDBBtnGroup>
        </div>

    )
};

export default TodoListItem;
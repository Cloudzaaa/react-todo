import React , { Component } from 'react';
import {MDBBtn, MDBBtnGroup, MDBIcon} from 'mdbreact';
import './style.css';

export default class TodoListItem extends Component {
    render() {
        const {label, onDeleted,
            onToggleImportant,
            onToggleDone,
            done, important} = this.props;
        let classNames = 'todo-list-item__label';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <div className="todo-list-item d-flex">
                <span
                    className={classNames}
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                <MDBBtnGroup size="sm">
                    <MDBBtn color="danger" size="sm"
                    onClick={onDeleted}>
                        <MDBIcon icon="trash-alt" />
                    </MDBBtn>
                    <MDBBtn color="warning" size="sm"
                    onClick={onToggleImportant}>
                        <MDBIcon icon="exclamation" />
                    </MDBBtn>
                </MDBBtnGroup>
            </div>
        )
    }
}

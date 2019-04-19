import React, { Component } from 'react';
import {MDBBtnGroup, MDBBtn} from "mdbreact";

export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'},
    ];

    render() {
        const {filter, onFilter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const color = isActive ? 'primary' : 'blue-grey';
            return (
                <MDBBtn
                    color={color}
                    key={name}
                    onClick={() => onFilter(name)}
                >{label}</MDBBtn>
            )
        });

        return(
            <MDBBtnGroup size="sm">
                {buttons}
            </MDBBtnGroup>
        );
    };
};
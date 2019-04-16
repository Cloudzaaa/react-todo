import React from 'react';
import {MDBBtnGroup, MDBBtn} from "mdbreact";

const ItemStatusFilter = () => {
    return (
        <MDBBtnGroup size="sm">
            <MDBBtn color="info">All</MDBBtn>
            <MDBBtn color="primary">Active</MDBBtn>
            <MDBBtn color="primary">Done</MDBBtn>
        </MDBBtnGroup>
    );
};

export default ItemStatusFilter;
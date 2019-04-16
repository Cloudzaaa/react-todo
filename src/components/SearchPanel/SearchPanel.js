import React from 'react';
import { MDBInput } from 'mdbreact';
import './style.css';

const SearchPanel = () => {
    return (
        <form className="search-panel">
            <MDBInput placeholder={'search'} />
        </form>
    )
};

export default SearchPanel;
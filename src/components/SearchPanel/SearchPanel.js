import React, {Component} from 'react';
import {MDBInput} from 'mdbreact';
import './style.css';

export default class SearchPanel extends Component {
    state = {
        searchText: '',
    };

    onSearch = (e) => {
        const searchtext = e.target.value;
        this.setState({
            searchText: searchtext,
        });

        this.props.onSearchChange(searchtext);
    };

    render() {
        return (
            <form className="search-panel">
                <MDBInput
                    label={'Search to do...'}
                    onChange={this.onSearch}
                />
            </form>
        )
    }
};
import React, {Component} from 'react';
import {MDBBtn, MDBInput} from 'mdbreact';
import './style.css'

export default class ItemAddForm extends Component {
    state = {
      label: '',
    };

    onLabelChange = (e) => {
        this.setState({label: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({label: ''});
    };

    render () {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <MDBInput
                    label='What to do?'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    required
                />
                <MDBBtn color="primary" size="md" type="submit">Add</MDBBtn>
            </form>
        );
    }
};

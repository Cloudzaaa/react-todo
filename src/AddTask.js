import React, { Component } from 'react';
import { MDBBtn, MDBInput} from "mdbreact";

class AddTask extends Component {
    componentDidUpdate() {
        console.log(this._input.inputElementRef.current.focus());
    }

    render() {
        return (
            <form
                className="add-task"
                onSubmit={this.props.submit}
            >

                <MDBInput
                    placeholder="fill exercise..."
                    value={this.props.name}
                    onChange={this.props.change}
                    ref={input => (this._input = input)}
                    required={true}
                    label="Task description..."
                    autoFocus={true}
                >
                </MDBInput>

                <MDBBtn type="submit">Add</MDBBtn>
            </form>
        )
    }
}

export default AddTask;

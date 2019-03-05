import React, { Component } from 'react';
import { MDBListGroup } from "mdbreact";

class TaskList extends Component {
    render() {
        return (
            <MDBListGroup className="task-list">
                {this.props.tasks}
            </MDBListGroup>
        )
    }
}

export default TaskList;

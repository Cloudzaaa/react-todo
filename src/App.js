import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import {MDBContainer, MDBRow, MDBCol, MDBListGroupItem} from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';


class App extends Component {
  constructor() {
    super();
      this.state = {
        task: {
          name: '',
          date: '',
        },
        tasks: [],
      }
  }

  changeTask = (e) => {
      this.setState({
          task: {
            name: e.target.value,
            date: new Date().getTime(),
          }
      });
      console.log('changed', e.target.value);
  };

  addTask = (e) => {
      e.preventDefault();
      this.setState({
          tasks: [...this.state.tasks, this.state.task],
          task: {
              name: '',
              date: '',
          },
      });
      console.log(this.state);
  };

  deleteTask = (e) => () => {
    this.setState(prevState => ({
        tasks: prevState.tasks.filter(t => t.date !== e)
    }));
  };

  createTask = (task) => {
      return (
          <MDBListGroupItem
              key={task.date}
              onClick={this.deleteTask(task.date)}
              hover
          >
              {task.name}
          </MDBListGroupItem>
      )
  };

  render() {
    let tasks = this.state.tasks;
    tasks = tasks.map(this.createTask);
    return (
      <div className="App">
          <MDBContainer>
              <MDBRow>
                  <MDBCol size={6}>
                    <AddTask
                      submit={this.addTask}
                      name={this.state.task.name}
                      change={this.changeTask}
                    />
                    <TaskList tasks={tasks}/>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </div>
    );
  }
}

export default App;

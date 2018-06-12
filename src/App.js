import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import Admin from './components/Admin/Admin.js';
import Doctor from './components/Doctor/Doctor.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: false,
      adminDashboard: false,
      doctorDashboard: false,
    };
    this.handleRole = this.handleRole.bind(this);
  }

  componentDidMount() {
    this.setState({
      loginView: true
    });
  }

  handleRole(role) {
    console.log('I am an ' + role);
    if (role === 'admin') {
      console.log('change dashboard');
      this.setState({
        loginView: false,
        adminDashboard: true
      });
    } else if (role === 'doctor') {
        console.log('change dashboard');
        this.setState({
          loginView: false,
          doctorDashboard: true
        });
      }
  }

  render() {
    let content = (
      <Login
        handleRole={this.handleRole}
        loginView={this.state.loginView}
      />
    );

    if (this.state.adminDashboard) {
      content = (
        <Admin
          adminDashboard={this.state.adminDashboard}
        />
      );
    }

    if (this.state.doctorDashboard) {
      content = (
        <Doctor
          doctorDashboard={this.state.doctorDashboard}
        />
      );
    }
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;

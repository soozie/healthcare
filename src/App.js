import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import Admin from './components/Admin/Admin.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginView: false,
      adminDashboard: false
    };
    this.handleRole = this.handleRole.bind(this);
  }

  componentDidMount() {
    this.setState({
      loginView: true
    });
  }

  handleRole(role) {
    console.log('sono un ' + role);
    if (role === 'admin') {
      console.log('cambia stato');
      this.setState({
        loginView: false,
        adminDashboard: true
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
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;

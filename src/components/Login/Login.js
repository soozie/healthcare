import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.login = this.login.bind(this);
  }

  handleUsernameInput(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.login();
    }
  }

  login() {
    fetch('http://localhost:3700/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      this.props.handleRole(jsonResponse.role);
    });
  }

  render() {
    return(
      <div className="login">
        <div className="login__container">
          <div className="login__containerControls">
            <input
              className="login__usernameInput"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameInput}
            />
            <input
              className="login__pwdInput"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordInput}
            />
            <button
              className="login__loginButton"
              type="button"
              name="button"
              onClick={this.handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

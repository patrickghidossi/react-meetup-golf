import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Auth extends Component {
  constructor(props) {
    super(props);

    var userinfo = {
      email: '',
      password: ''
    };

    this.state = { userinfo };
  }

  onInputChange(userinfo) {
    this.setState({userinfo});
    console.log(userinfo);
    // Communicate with server here?
  }

  onFormSubmit(event) {
    event.preventDefault();

    //this.props.fetchWeather(this.state.term);
    //this.setState({ term: ''});
  }

  render() {
    return (
        <div>
          <div className="signup col-md-6">
            <form onSubmit={this.onFormSubmit} className="input-group">
              <h3>Join the club!</h3>
              <input
                id="signup-email"
                placeholder="Email Address"
                name="signup-email"
                value={this.state.email}
                onChange={event => this.onInputChange(event.target.value)}
              />
              <input
                id="signup-password"
                placeholder="Password"
                name="signup-password"
                value={this.state.password}
                onChange={event => this.onInputChange(event.target.value)}
              />
           </form>
          </div>
          <div className="login col-md-6">
            <h3>Welcome back!</h3>
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                id="login-email"
                placeholder="Email Address"
                name="login-email"
                value={this.state.email}
                onChange={event => this.onInputChange(event.target.value)}
              />
              <input
                id="login-password"
                placeholder="Password"
                name="login-password"
                value={this.state.password}
                onChange={event => this.onInputChange(event.target.value)}
              />
            </form>
          </div>
       </div>
    )
  }
}

export default Auth;

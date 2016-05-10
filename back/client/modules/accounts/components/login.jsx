import React, { PropTypes } from 'react';
import { Textfield, Button } from 'react-mdl';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password);
  }

  handleChange(event) {
    const input = event.target;
    return this.setState({ [input.name]: input.value });
  }

  renderErrorMessages() {
    const { error } = this.props;
    if (!error) {
      return null;
    }

    return (
      <p>{error}</p>
    );
  }

  render() {
    return (
      <form id="loginForm" onSubmit={this.handleSubmit.bind(this)}>
        {this.renderErrorMessages()}
        <div>
          <Textfield
            type="email"
            name="email"
            label="Email"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <Textfield
            type="password"
            name="password"
            label="password"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <Button type="submit" raised colored>Login</Button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func,
};

export default Login;

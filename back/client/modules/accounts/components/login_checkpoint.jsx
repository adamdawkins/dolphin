import React from 'react';

class LoginCheckpoint extends React.Component {
  body() {
    const { authInProcess, loginRequired, user, children, login } = this.props;
    let body;

    if (authInProcess) {
      body = (<div>Please wait...</div>);
    } else if (!loginRequired || user) {
      body = (children);
    } else {
      body = (login);
    }

    return body;
  }
  render() {
    return (
      <div>
        {this.body()}
      </div>
    );
  }
}

export default LoginCheckpoint;

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {spy, stub} from 'sinon';
import Login from './login';

describe('accounts.components.login', () => {
  it('displays any errors provided', () => {
    const error = 'TheError';
    const component = shallow(<Login error={error} />);
    expect(component.html()).to.match(/TheError/);
  });

  it('has an "email" form field', () => {
    const component = shallow(<Login />);
    expect(component.find('[name="email"]').length).to.be.equal(1);
  });


  it('has a password form field', () => {
    const component = shallow(<Login />);
    expect(component.find('[name="password"]').length).to.be.equal(1);
  });

  it('has a submit button', () => {
    const component = shallow(<Login />);
    expect(component.find('[type="submit"]').length).to.be.equal(1);
  });

  it('passes email and password to the login function when submitted', done => {
    const submittedEmail = 'adamdawkins';
    const submittedPassword = 'password';

    const onLogin = (email, password) => {
      expect(email).to.be.equal(submittedEmail);
      expect(password).to.be.equal(submittedPassword);
      done();
    };

    const component = shallow(<Login login={onLogin} />);

    component.setState({
      email: submittedEmail,
      password: submittedPassword
    });

    component.find('form').simulate('submit', { preventDefault: () => {} });
  });

  it('updates the email state on change of the email field', function () {
    // setup
    const newEmailValue = 'adam@';
    const component = shallow(<Login/>); 
    const event = {
      stopPropogation: () => {},
      target: {
        name: 'email',
        value: newEmailValue,
      },
    };
    component.find('[name="email"]').simulate('change', event);
    expect(component.state('email')).to.be.equal(newEmailValue);
  });

  it('updates the password state on change of the password field', function () {
    // setup
    const newPasswordValue = 'hoa?rlef**';
    const component = shallow(<Login/>); 
    const event = {
      stopPropogation: () => {},
      target: {
        name: 'password',
        value: newPasswordValue,
      },
    };
    component.find('[name="password"]').simulate('change', event);
    expect(component.state('password')).to.be.equal(newPasswordValue);
  });

});

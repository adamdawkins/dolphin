import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import LoginCheckpoint from './login_checkpoint';

describe('accounts.components.login_checkpoint', function () { 
  describe('when loginRequired is false', function () {
   it('renders the children property', function () {
     const Child = () => (<div><h1>Child</h1></div>);
     const component = shallow(
       <LoginCheckpoint loginRequired={false}>
         <Child/>
       </LoginCheckpoint>
     );

      expect(component.contains(<Child/>)).to.be.equal(true);
   });
  });
  describe('when loginRequired is true', function () {
    describe('and user is null', function () {
      it('does not render the children property', function () {
        const Child = () => (<div><h1>Child</h1></div>);
        const component = shallow(
          <LoginCheckpoint loginRequired={true} user={null}>
            <Child/>
          </LoginCheckpoint>
        );

      expect(component.contains(<Child/>)).to.be.equal(false);

      });
      it('renders the login property', function () {
        const Child = () => (<div><h1>Child</h1></div>);
        const Login = () => (<div id="login"></div>);
        const component = shallow(
          <LoginCheckpoint loginRequired={true} user={null} login={<Login/>}>
            <Child/>
          </LoginCheckpoint>
        );
        expect(component.render().find('#login')).to.have.length(1);
      });
    });
    describe('and user exists', function() {
      const user = {_id: '1234567890'}; 
      const Login = () => (<div id="login"></div>);
      const Child = () => (<div><h1>Child</h1></div>);
      const component = shallow(
        <LoginCheckpoint loginRequired={true} user={user} login={<Login/>}>
          <Child/>
        </LoginCheckpoint>
      );

      it('renders the children property', function () {
        expect(component.contains(<Child/>)).to.be.equal(true);
      });
      it('does not render the login property', function() {
        expect(component.render().find('#login')).to.have.length(0);
      });
    });
  });
 });

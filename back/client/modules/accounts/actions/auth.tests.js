import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy, stub } from 'sinon';
import actions from './auth';

describe('accounts.actions.auth', function () {
  describe('login', function () {
    it('sets a LocalState error if email is not present', function () {
      // setup
      const LocalState = {set: spy()};

      //execute
      actions.login({LocalState}, null, 'password');

      // verify
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('ACCOUNTS.AUTH.LOGIN.ERROR');
      expect(args[1]).to.match(/required/);

    });

    it('sets a LocalState error if password is not present', function () {
      // setup
      const LocalState = {set: spy()};

      //execute
      actions.login({LocalState}, 'email@example.com', null);

      // verify
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('ACCOUNTS.AUTH.LOGIN.ERROR');
      expect(args[1]).to.match(/required/);

    });

    it('passes the credentials to Meteor.loginWithPassword', function () {
      const Meteor = {loginWithPassword: spy()};
      const LocalState = {set: spy()};

      actions.login({Meteor, LocalState}, 'username', 'password');

      const methodArgs = Meteor.loginWithPassword.args[0];
      expect(Meteor.loginWithPassword.calledOnce).to.equal(true);
      expect(methodArgs.slice(0,2)).to.deep.equal(
        [ 'username', 'password' ]
      );
      expect(methodArgs[2]).to.be.a('function');
    });

    //execute

    describe('after Meteor.loginWithPassword', function () {
      describe('if there is an error', function () {
        it('sets a LocalState error with the reason', function () {
          const Meteor = {loginWithPassword: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const error = {reason: 'Shit happens'};

          Meteor.loginWithPassword.callsArgWith(2, error);

          actions.login({Meteor, LocalState, FlowRouter}, 'username', 'password');

          expect(LocalState.set.args[0]).to.deep.equal([ 'ACCOUNTS.AUTH.LOGIN.ERROR', error.reason ]);

        });
      });
      describe('if there is not an error', function () {
        it('returns the user to /', function () {
          const Meteor = {loginWithPassword: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};

          Meteor.loginWithPassword.callsArg(2);

          actions.login({Meteor, LocalState, FlowRouter}, 'ferrah@example.com', 'password');

          expect(FlowRouter.go.args[0][0]).to.be.equal('/');
        });
      });
    });
  });
  describe('logout', function () {
    const Meteor = { logout: spy() };
    const FlowRouter = {go: spy()};
    actions.logout({Meteor, FlowRouter});

    it('calls Meteor.logout', function () {
      expect(Meteor.logout.calledOnce).to.equal(true);
    });
    it('returns the user to /', function () {
      expect(FlowRouter.go.args[0][0]).to.be.equal('/');
    });
  });
});

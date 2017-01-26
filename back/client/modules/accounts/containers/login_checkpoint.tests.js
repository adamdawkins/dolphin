const { describe, it } = global;
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { composer } from './login_checkpoint';

describe('accounts.containers.login_checkpoint', function () {
  describe('composer', function () {
    it('passes a login object to onData', function () {
      const onData = spy();
      const Meteor = {
        user: stub(),
        loggingIn: spy(),
      };
      const context = () => ({ Meteor });
      composer({ context }, onData);

      const args = onData.args[0];
      
      expect(args[1].login).to.be.an('object');
    });
    it('passes Meteor.user() to onData as user', function () {
      const onData = spy();
      const Meteor = {
        user: () => ({_id: '123456790'}),
        loggingIn: spy(),
      };
      const context = () => ({ Meteor });
      composer({ context }, onData);

      const args = onData.args[0];
      
      expect(args[1].user._id).to.be.equal(Meteor.user()._id);
    });
   });
 });

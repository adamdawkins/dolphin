import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { composer, depsMapper } from './login';

describe('accounts.containers.login', function () {
  describe('composer', function () {
    it('gets ACCOUNTS.AUTH.LOGIN.ERROR from LocalState', function () {
      const LocalState = { get: spy() };
      const context = () => ({ LocalState });
      const onData = spy();

      composer({ context }, onData);

      const args = LocalState.get.args[0];

      expect(args).to.have.length(1);
      expect(args[0]).to.be.equal('ACCOUNTS.AUTH.LOGIN.ERROR');

    });
    it('passes an error object to onData', function () {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();

      composer({context}, onData);

      const args = onData.args[0];

      expect(args[1]).to.deep.equal({error: 'error'});
    });

  });
  describe('depsMapper', function () {
    describe('actions', function () {
      it('maps login to accounts.actions.auth.login', function () {
        const actions = {auth: {login: spy()}};
        const deps = depsMapper({}, actions);

        expect(deps.login).to.be.equal(actions.auth.login);

      });
    });
    describe('context', function ()  {
      it('maps the whole context as a function', function () {
        const actions = {auth: {login: spy()}};
        const context = spy();

        const deps = depsMapper(context, actions);

        expect (deps.context()).to.be.equal(context);
      });
    });
  });
});

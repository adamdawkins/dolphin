import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({ context }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('ACCOUNTS.AUTH.LOGIN.ERROR');
  onData(null, { error });
};

export const depsMapper = (context, actions) => ({
  login: actions.auth.login,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);

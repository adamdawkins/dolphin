import React from 'react';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

import Login from './login';
import LoginCheckpoint from '../components/login_checkpoint.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const login = (<Login />);
  if (Meteor.user()) {
    onData(null, {
      authInProcess: Meteor.loggingIn(),
      user: Meteor.user(),
      login,
    });
  } else {
    onData(null, {
      authInProcess: Meteor.loggingIn(),
      login,
    });
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LoginCheckpoint);

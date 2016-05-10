import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Proposals from '../components/proposals.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('proposals').ready()) {
    const proposals = Collections.Proposals.find().fetch();
    onData(null, {proposals});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Proposals);

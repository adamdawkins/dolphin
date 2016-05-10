import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewProposal from '../components/new_proposal.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  createProposal: actions.proposals.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewProposal);

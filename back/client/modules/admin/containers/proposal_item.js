import { useDeps, composeAll, composeWithTracker } from 'mantra-core';

import ProposalItem from '../components/proposal_item.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  deleteProposal: actions.proposals.delete,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProposalItem);

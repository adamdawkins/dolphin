import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Proposal from '../components/proposal.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const _id = FlowRouter.getParam('_id');
  if (Meteor.subscribe('proposals', _id).ready()) {
    const proposal = Collections.Proposals.findOne(_id);
    onData(null, { proposal });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Proposal);

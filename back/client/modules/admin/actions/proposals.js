export default {
  create( { Collections, FlowRouter }, proposal) {
    Collections.Proposals.insert(proposal);
    FlowRouter.go('/');
  },
};

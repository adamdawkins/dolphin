import { Random } from 'meteor/random';

export default {
  create( { Meteor, FlowRouter }, options) {
    const _id = Random.id(5);
    const proposal = Object.assign({ _id }, options);
    Meteor.call('proposals.create', proposal, (error) => {
      if (error) {
        console.error(error);
      } else {
        FlowRouter.go(`/preview/${_id}`);
      }
    });
  },
  delete( {Meteor, FlowRouter }, _id) {
    Meteor.call('proposals.destroy', _id, (error) => {
      if (error) {
        console.error(error);
      } else {
        FlowRouter.go('/');
      }
    });
  },
};

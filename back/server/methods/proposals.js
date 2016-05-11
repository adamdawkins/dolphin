import {Proposals} from '/lib/collections';
import {check} from 'meteor/check';
import slug from 'slug';

export default function () {
  Meteor.methods({
    'proposals.create'(proposal) {
      check(proposal, Object);
      
      Proposals.insert({
        ...proposal,
        slug: slug(`${proposal.client} ${proposal.title}`),
        createdAt: new Date(),
        createdBy: this.userId,
        updatedAt: new Date(),
        updatedBy: this.userId,
      });
    }
  });
}

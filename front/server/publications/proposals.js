import {Proposals} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('proposals', function (proposalsId) {
    return Proposals.find(proposalsId);
  });
}

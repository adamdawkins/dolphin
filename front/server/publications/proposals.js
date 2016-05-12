import {Proposals} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('proposals', function (proposalsId) {
    Meteor._sleepForMs(2000);
    return Proposals.find(proposalsId);
  });
}

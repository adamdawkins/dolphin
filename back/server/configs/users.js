import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
export default function () {
  if (!Meteor.users.findOne()) {
    Accounts.createUser({ email: 'jonathan@dragondrop.uk', password: 'legal-fern-devoid' });
    Accounts.createUser({ email: 'adam@dragondrop.uk', password: 'legate-latter-clapper' });
    Accounts.createUser({ email: 'john@dragondrop.uk', password: 'african-grizzled-pool' });
  }
}

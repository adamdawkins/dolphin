export default {
  login({ Meteor, LocalState, FlowRouter }, email, password) {
    let result;
    if (!(email && password)) {
      result = LocalState.set('ACCOUNTS.AUTH.LOGIN.ERROR', 'Email is required');
    } else {
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          result = LocalState.set('ACCOUNTS.AUTH.LOGIN.ERROR', error.reason);
        } else {
          result = FlowRouter.go('/');
        }
      });
    }

    return result;
  },
  logout({ Meteor, FlowRouter }) {
    Meteor.logout();
    return FlowRouter.go('/');
  },
};

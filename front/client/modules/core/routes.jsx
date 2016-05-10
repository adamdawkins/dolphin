import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Proposal from './containers/proposal';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
  FlowRouter.route('/proposals/:_id', {
    name: 'proposal.show',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Proposal />)
      });
    }
  });
  
}

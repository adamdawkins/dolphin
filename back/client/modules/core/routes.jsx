import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Proposal from './containers/proposal';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/preview/:_id', {
    name: 'proposal.show',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Proposal />)
      });
    }
  });
  
}

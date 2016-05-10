import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import NewProposal from './containers/new_proposal';
import Proposals from './containers/proposals';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/proposals/new', {
    name: 'proposals.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewProposal />)
      });
    }
  });
  FlowRouter.route('/', {
    name: 'proposals',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Proposals />)
      });
    }
  });
}

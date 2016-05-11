import React from 'react';
import { Button, List } from 'react-mdl';
import ProposalItem from '../containers/proposal_item';

const Proposals = ({proposals}) => (
  <div>
    <Button href="/proposals/new" colored raised>New Proposal</Button>
    <List>
      {proposals.map((proposal) => (
        <ProposalItem key={proposal._id} proposal={proposal}/>
      ))}
    </List>
  </div>
);

export default Proposals;

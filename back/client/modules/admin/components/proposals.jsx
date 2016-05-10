import React from 'react';
import { Button, List, ListItem, ListItemContent } from 'react-mdl';

const Proposals = ({proposals}) => (
  <div>
    <Button href="/proposals/new" colored raised>New Proposal</Button>
    <List>
      {proposals.map((proposal) => (
        <ListItem
          key={proposal._id}
          onClick={() => (window.location = `/preview/${proposal._id}`)}
          style={{cursor: 'pointer'}}
        >
          <ListItemContent>
            {proposal.title} {proposal.client}
          </ListItemContent>
        </ListItem>
      ))}
    </List>
  </div>
);

export default Proposals;

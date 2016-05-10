import React from 'react';
import {FABButton, Icon, Tooltip } from 'react-mdl';

const Proposal = ({proposal, liveUrl}) => (
  <div>
    <Tooltip
      label="View on Live"
      position="left"
    >
      <FABButton
        colored
        href={`${liveUrl}/proposals/${proposal._id}`}
        style={{
          position: 'absolute',
          top: 100,
          right: 50,
        }}
        >
          <Icon name="publish"/>
      </FABButton>
    </Tooltip>
    <div dangerouslySetInnerHTML={{__html: proposal.body}} />
  </div>
);

export default Proposal;

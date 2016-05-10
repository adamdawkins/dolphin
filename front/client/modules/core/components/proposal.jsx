import React from 'react';

const Proposal = ({proposal}) => (
  <div dangerouslySetInnerHTML={{__html: proposal.body}} />
);

export default Proposal;

import React from 'react';
import Cover from './cover';
const Proposal = ({proposal}) => (
  <div>
    <Cover {...proposal} />
  <div dangerouslySetInnerHTML={{__html: proposal.body}} />
</div>
);

export default Proposal;

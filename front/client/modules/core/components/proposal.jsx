import React from 'react';
import Cover from './cover';
const Proposal = ({proposal}) => (
  <div>
    <Cover/ >
  <div dangerouslySetInnerHTML={{__html: proposal.body}} />
</div>
);

export default Proposal;

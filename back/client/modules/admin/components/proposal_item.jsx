import React from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

class ProposalItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleActionClick = this.handleActionClick.bind(this);
  }
  handleActionClick(event) {
    const { deleteProposal, proposal } = this.props;

    deleteProposal(proposal._id);
  }
  render() {
    const { proposal } = this.props;
    return (
      <ListItem
        key={proposal._id}
        style={{cursor: 'pointer'}}
        >
        <ListItemContent
          onClick={() => (window.location = `/preview/${proposal._id}`)}
          >
          {proposal.title} {proposal.client}
        </ListItemContent>
        <ListItemAction onClick={this.handleActionClick}>
          <Icon name="delete" style={{color: 'red'}} />
        </ListItemAction>
      </ListItem>
    );
  }
}

export default ProposalItem;

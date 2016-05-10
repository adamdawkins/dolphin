import React from 'react';
import { Grid, Cell, Textfield, Button } from 'react-mdl';

class NewProposal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      title: '',
      client: '',
      body: '',
      version: '1.0.0',
    };
  }
  handleFieldChange(event) {
    const {name, value } = event.target;
    this.setState({[name]: value});
    if (name === 'forCompanyName') {
      this.setState({client: value});
    }
  }
  handleSubmit(event) {
    const { createProposal } = this.props;
    event.preventDefault();
    const { title, client, body, version, forName, forRole, forCompanyName } = this.state;
    createProposal({ title, client, body, version, forName, forRole, forCompanyName });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          <Cell col={6} shadow={1} style={{paddingLeft: 20, paddingRight: 20}}>
            <Textfield label="For: Person"
              name="forName"
              onChange={this.handleFieldChange}
              value={this.state.forName}
              floatingLabel
              required
            />
            <Textfield label="For: Role"
              name="forRole"
              onChange={this.handleFieldChange}
              value={this.state.forRole}
              floatingLabel
            />
            <Textfield label="For: Company Name"
              name="forCompanyName"
              onChange={this.handleFieldChange}
              value={this.state.forCompanyName}
              floatingLabel
              required
            />
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12} shadow={1} style={{paddingLeft: 20, paddingRight: 20}}>
            <Textfield type="text" label="Title" name="title"
              onChange={this.handleFieldChange}
              value={this.state.title}
              floatingLabel
              required
            />
            <div>
              <Textfield type="text" label="Client" name="client"
                value={this.state.client}
                onChange={this.handleFieldChange}
                floatingLabel
                required
              />
            </div>
            <div>
              <Textfield type="text" label="Version" name="version"
                value={this.state.version}
                onChange={this.handleFieldChange}
                floatingLabel
                required
              />
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12} shadow={1} style={{paddingLeft: 20, paddingRight: 20}}>
            <div>
              <Textfield label="Proposal contents" name="body"
                value={this.state.body}
                onChange={this.handleFieldChange}
                rows={10}
                style={{width: '100%'}}
                required
                floatingLabel
              />

            </div>
          </Cell>
        </Grid>
        <Grid>
          <div style={{float: 'right', marginRight: 20}}>
            <Button primary raised>Add Proposal</Button>
          </div>
        </Grid>
      </form>
    );
  }
}

export default NewProposal;

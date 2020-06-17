import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGroups } from '../actions/GroupsActions'
import Group from '../components/Group';

class GroupsContainer extends Component {

  componentDidMount = () => {
    this.props.fetchGroups()
  }

  render() {
    const groups = this.props.groups.map(g => (
      <Group key={g.id} name={g.name} description={g.description} />)
    );

    return (
      <div>
      <h1> Groups </h1>
      {groups}
      </div>
    );
  }
}

const mapStateToProps = ({ groups }) => {
  return { groups }
}

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

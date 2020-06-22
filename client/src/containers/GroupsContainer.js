import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchGroups, createNewGroup } from '../actions/GroupsActions';
import Group from '../components/Group';
import GroupRoutes from '../components/GroupRoutes';


class GroupsContainer extends Component {

  componentDidMount = () => {
    this.props.fetchGroups()
  }

  handleSubmitNewGroup = (e, group) => {
    e.preventDefault();
    this.props.createNewGroup(group);
  }

  render() {
    return (
      <div>
        <GroupRoutes
          groupArr={this.props.groups}
          onSubmit={this.handleSubmitNewGroup}
          error={this.props.error}
          errorMessage={this.props.errorMessage}/>
      </div>
    );
  }
}

const mapStateToProps = ({ groups: { groups, error, errorMessage } }) => {
  return { groups, error, errorMessage}
}

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createNewGroup: group => dispatch(createNewGroup(group))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchGroups,
  createNewGroup,
  deleteGroup
} from '../actions/GroupsActions';
import GroupRoutes from '../components/GroupRoutes';
import History from '../history'


class GroupsContainer extends Component {

  componentDidMount = () => {
    this.props.fetchGroups()
  }

  handleSubmitNewGroup = async (e, group) => {
    e.preventDefault();
    const result = await this.props.createNewGroup(group);
    if (result) History.push('/groups');
  }

  render() {
    return (
      <div>
        <GroupRoutes
          groupArr={this.props.groups}
          onSubmit={this.handleSubmitNewGroup}
          errorMessage={this.props.errorMessage}
          onDelete={this.props.onDelete}/>
      </div>
    );
  }
}

const mapStateToProps = ({ groups: { groups, errorMessage } }) => {
  return { groups, errorMessage}
}

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createNewGroup: group => dispatch(createNewGroup(group)),
  onDelete: groupId => dispatch(deleteGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

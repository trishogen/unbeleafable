import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  fetchGroups,
  createNewGroup,
  deleteGroup
} from '../actions/GroupsActions';
import Groups from '../components/Groups';
import GroupInput from '../components/GroupInput';
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
        <Route exact path={`${this.props.match.path}/`} render={(props) => (
            <Groups {...props} groupArr={this.props.groups}
              onDelete={this.props.onDelete}/>
          )} />
        <Route path={`${this.props.match.path}/new`} render={(props) => (
            <GroupInput {...props} onSubmit={this.handleSubmitNewGroup}
              errorMessage={this.props.errorMessage}/>
          )} />
      </div>
    )
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

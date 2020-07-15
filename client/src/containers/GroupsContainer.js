import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  fetchGroups,
  fetchGroup,
  createNewGroup,
  editGroup,
  deleteGroup
} from '../actions/GroupsActions';
import Groups from '../components/Groups';
import GroupInput from '../components/GroupInput';
import GroupEdit from '../components/GroupEdit';
import GroupShow from '../components/GroupShow';


class GroupsContainer extends Component {

  componentDidMount = () => {
    this.props.fetchGroups()
  }

  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.path}`} render={(props) => (
            <Groups {...props}
              groupArr={this.props.groups}
              onEdit={this.props.handleEditGroup}
              onDelete={this.props.onDelete}
              errorMessage={this.props.errorMessage}/>
          )} />
        <Route path={`${this.props.match.path}/new`} render={(props) => (
            <GroupInput {...props}
              onSubmit={this.props.createNewGroup} />
          )} />
        <Route exact path={`${this.props.match.path}/:id`} render={(props) => (
            <GroupShow {...props}
              fetchGroup={this.props.fetchGroup}/>
          )} />
        <Route path={`${this.props.match.path}/:id/edit`} render={(props) => (
            <GroupEdit {...props}
              fetchGroup={this.props.fetchGroup}
              onEdit={this.props.onEdit}/>
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
  fetchGroup: groupId => dispatch(fetchGroup(groupId)),
  createNewGroup: group => dispatch(createNewGroup(group)),
  onEdit: group => dispatch(editGroup(group)),
  onDelete: groupId => dispatch(deleteGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {
  fetchGroups,
  fetchGroup,
  createNewGroup,
  editGroup,
  deleteGroup
} from '../actions/GroupsActions';
import CommentInput from '../components/CommentInput';
import Groups from '../components/Groups';
import GroupEdit from '../components/GroupEdit';
import GroupInput from '../components/GroupInput';
import GroupShow from '../components/GroupShow';


class GroupsContainer extends Component {

  componentDidMount = () => {
    this.props.fetchGroups()
  }

  render() {
    return (
      <div>
        <div>
          <h1>Groups</h1>
        </div>

        <Switch>
          <Route exact path={`/groups/new`} render={() => (
            <GroupInput onSubmit={this.props.createNewGroup} />
            )}
          />
        <Route exact path={`/groups/:id`} render={() => (
            <GroupShow fetchGroup={this.props.fetchGroup}/>
            )}
          />
        <Route exact path={`/groups/:id/edit`} render={() => (
            <GroupEdit
              fetchGroup={this.props.fetchGroup}
              onEdit={this.props.onEdit}/>
            )}
          />
        <Route exact path={`/groups/:id/comments/new`} render={() => (
            <CommentInput />
            )}
          />
        <Route path={`/groups`} render={() => (
            <Groups
              groupArr={this.props.groups}
              onDelete={this.props.onDelete}
            />
            )}
          />
        </Switch>
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

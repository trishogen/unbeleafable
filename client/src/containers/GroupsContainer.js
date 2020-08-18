import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchComments, createNewComment } from '../actions/CommentsActions';
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
    this.props.fetchGroups();
    this.props.fetchComments();
  }

  render() {
    return (
      <div>
        <div>
          <h1><Link className="link" to={'/groups'}>Groups</Link></h1>
        </div>

        <Switch>
          <Route exact path={`/groups/new`} render={() => (
            <GroupInput onSubmit={this.props.createNewGroup} />
            )}
          />
        <Route exact path={`/groups/:id`} render={() => (
            <GroupShow
              fetchGroup={this.props.fetchGroup}
              onDelete={this.props.onDelete}
              commentArr={this.props.comments}
              requestingGroups={this.props.requestingGroups}
              requestingComments={this.props.requestingComments}
              />
            )}
          />
        <Route exact path={`/groups/:id/edit`} render={() => (
            <GroupEdit
              fetchGroup={this.props.fetchGroup}
              onEdit={this.props.onEdit}
              requestingGroups={this.props.requestingGroups} />
            )}
          />
        <Route exact path={`/groups/:id/comments/new`} render={() => (
            <CommentInput onSubmit={this.props.createNewComment} />
            )}
          />
        <Route path={`/groups`} render={() => (
            <Groups
              groupArr={this.props.groups}
              requestingGroups={this.props.requestingGroups} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({
  groups: { groups, requestingGroups }, comments: { comments, requestingComments }
}) => {
  return { groups, comments, requestingGroups, requestingComments }
}

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchGroup: groupId => dispatch(fetchGroup(groupId)),
  fetchComments: () => dispatch(fetchComments()),
  createNewGroup: group => dispatch(createNewGroup(group)),
  createNewComment: (id, comment) => dispatch(createNewComment(id, comment)),
  onEdit: group => dispatch(editGroup(group)),
  onDelete: groupId => dispatch(deleteGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

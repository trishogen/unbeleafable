import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchGroups,
  createNewGroup,
  deleteGroup
} from '../actions/GroupsActions';
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
          errorMessage={this.props.errorMessage}
          onDelete={this.props.onDelete}/>
      </div>
    );
  }
}

const mapStateToProps = ({ groups: { groups, error, errorMessage } }) => {
  return { groups, error, errorMessage}
}

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createNewGroup: group => dispatch(createNewGroup(group)),
  onDelete: groupId => dispatch(deleteGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

import React, { Component } from 'react';
import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { connect } from 'react-redux'
import { login } from '../actions/AuthActions'
import Login from '../components/Login';


class LoginContainer extends Component {

  // history = useHistory();
  // location = useLocation();
  //
  // { from } = location.state || { from: { pathname: "/" } };

  handleSubmit = (e, user) => {
    e.preventDefault();
    this.props.authenticate(user);
    // TODO: fix history replace
    // history.replace(from);
  }

  render() {
    return (
      <div>
        <Login handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = ({jwt}) => {
  return {jwt}
}

const mapDispatchToProps = dispatch => ({
  authenticate: user => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(LoginContainer)

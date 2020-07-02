import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/AuthActions'
import Login from '../components/Login';


class LoginContainer extends Component {

  render() {
    return (
      <div>
        <Login handleSubmit={this.props.authenticate}/>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  authenticate: user => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(LoginContainer)

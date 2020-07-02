import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions/AuthActions'
import Signup from '../components/Signup';


class SignupContainer extends Component {

  render() {
    return (
      <div>
        <Signup handleSubmit={this.props.signup}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(null, mapDispatchToProps)(SignupContainer)

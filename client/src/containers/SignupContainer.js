import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signup } from '../actions/AuthActions'
import Signup from '../components/Signup';
import History from '../history'


class SignupContainer extends Component {

  handleSubmit = async (e, user) => {
    e.preventDefault();
    const result = await this.props.signup(user);
    if (result) History.push('/');
  }

  render() {
    return (
      <div>
        <Signup
          handleSubmit={this.handleSubmit}
          errorMessage={this.props.errorMessage}/>
      </div>
    );
  }
}

const mapStateToProps = ({auth: {redirect, errorMessage}}) => {
  return {redirect, errorMessage}
}

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)

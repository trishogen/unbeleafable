import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signup } from '../actions/AuthActions'
import Signup from '../components/Signup';

class SignupContainer extends Component {

  handleSubmit = (e, user) => {
    e.preventDefault();
    this.props.signup(user);
  }

  renderRedirect = () => {
    if (this.props.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Signup
          handleSubmit={this.handleSubmit}
          error={this.props.error}
          errorMessage={this.props.errorMessage}/>
      </div>
    );
  }
}

const mapStateToProps = ({auth: {redirect, error, errorMessage}}) => {
  return {redirect, error, errorMessage}
}

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)

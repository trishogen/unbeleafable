import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../actions/AuthActions'
import Login from '../components/Login';

class LoginContainer extends Component {

  handleSubmit = (e, user) => {
    e.preventDefault();
    this.props.authenticate(user);
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
        <Login handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = ({redirect}) => {
  return {redirect}
}

const mapDispatchToProps = dispatch => ({
  authenticate: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

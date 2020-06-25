import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/AuthActions'
import Login from '../components/Login';
import History from '../history'


class LoginContainer extends Component {

  handleSubmit = async (e, user) => {
    e.preventDefault();
    const result = await this.props.authenticate(user);
    if (result) History.push('/');
  }

  render() {
    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          errorMessage={this.props.errorMessage}/>
      </div>
    );
  }
}

const mapStateToProps = ({auth: { errorMessage }}) => {
  return {errorMessage}
}

const mapDispatchToProps = dispatch => ({
  authenticate: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

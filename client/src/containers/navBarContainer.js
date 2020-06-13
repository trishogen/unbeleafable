import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/AuthActions'
import NavBar from '../components/navBar';

class NavBarContainer extends Component {

  render() {
    return (
      <div>
        <NavBar loggedIn={this.props.loggedIn} logout={this.props.logout}/>
      </div>
    );
  }
}

const mapStateToProps = ({ loggedIn }) => {
  return { loggedIn }
}

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
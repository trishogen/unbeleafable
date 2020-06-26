import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/AuthActions'
import NavBar from '../components/NavBar';
import History from '../history'



class NavBarContainer extends Component {

  handleLogout = () => {
    this.props.logout();
    History.push('/');
  }

  render() {
    return (
      <div>
        <NavBar loggedIn={this.props.loggedIn} logout={this.handleLogout}/>
      </div>
    );
  }
}

const mapStateToProps = ({auth: { loggedIn }}) => {
  return { loggedIn }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)

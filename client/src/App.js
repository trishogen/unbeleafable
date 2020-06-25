import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import { setLoggedIn } from './actions/AuthActions';
import GroupsContainer from './containers/GroupsContainer';
import LoginContainer from './containers/LoginContainer';
import NavBarContainer from './containers/NavBarContainer';
import SignupContainer from './containers/SignupContainer';


class App extends Component {

  componentDidMount = () => {
    this.props.setLoggedIn()
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
          </header>
          <NavBarContainer />
          <Switch>
            <Route exact path="/">Home</Route>
            <Route path="/login"><LoginContainer /></Route>
            <Route path="/signup"><SignupContainer /></Route>
            <Route path="/groups"><GroupsContainer /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLoggedIn: () => dispatch(setLoggedIn())
})

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  Router, // BrowserRouter ignores history prop
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import { setLoggedIn } from './actions/AuthActions';
import GroupsContainer from './containers/GroupsContainer';
import Home from './components/Home';
import LoginContainer from './containers/LoginContainer';
import NavBarContainer from './containers/NavBarContainer';
import SignupContainer from './containers/SignupContainer';
import ProtectedRoute from './ProtectedRoute';


class App extends Component {

  componentDidMount = () => {
    this.props.setLoggedIn()
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBarContainer />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/signup">
              <SignupContainer />
            </Route>
            <ProtectedRoute path="/groups">
              <GroupsContainer />
            </ProtectedRoute>
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

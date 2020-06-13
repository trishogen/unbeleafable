import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setLoggedIn } from './actions/AuthActions';
import LoginContainer from './containers/LoginContainer';
import NavBarContainer from './containers/NavBarContainer';


class App extends Component {

  componentDidMount = () => {
    this.props.setLoggedIn()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <NavBarContainer />
          <Switch>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route exact path="/" render={() => <div>Home</div>} />
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

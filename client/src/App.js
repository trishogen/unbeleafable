import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarContainer from './containers/navBarContainer';


function App() {
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

export default App;

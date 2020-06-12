import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        // move these to a navbar
        <Link to="/login">Login</Link>

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

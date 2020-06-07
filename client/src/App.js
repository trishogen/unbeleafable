import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch,
  useHistory,
  useLocation
} from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>

        <Link to="/login">Login</Link>

        <switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/" render={() => <div>Home</div>} />
        </switch>
      </div>
    </Router>
  );
}

export default App;

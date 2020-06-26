import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Groups from '../components/Groups';
import GroupInput from './GroupInput';


const GroupRoutes = ({ groupArr, onSubmit, onDelete, errorMessage }) => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Link to={`/groups/new`}>
            <Button variant="outline-secondary" size="sm"> Create new </Button>
          </Link>
          <Groups
            groupArr={groupArr}
            onDelete={onDelete}/>
        </Route>
        <Route path={`${path}/:new`}>
          <GroupInput onSubmit={onSubmit} errorMessage={errorMessage}/>
        </Route>
      </Switch>
    </div>
  );
}

export default GroupRoutes;

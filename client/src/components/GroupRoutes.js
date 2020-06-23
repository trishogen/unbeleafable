import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Group from './Group';
import GroupInput from './GroupInput';


const GroupRoutes = ({ groupArr, onSubmit, error, errorMessage, onDelete}) => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path } = useRouteMatch();

  const groups = groupArr.map(g => (
    <Group
      key={g.id}
      id={g.id}
      name={g.name}
      description={g.description}
      onDelete={onDelete}></Group>
    )
  );

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h1> Groups </h1>
            <Link to="/groups/new">
              <Button variant="outline-secondary" size="sm"> Create new </Button>
            </Link>
          <div>{groups}</div>
        </Route>
        <Route path={`${path}/:new`}>
          <GroupInput onSubmit={onSubmit} error={error} errorMessage={errorMessage}/>
        </Route>
      </Switch>
    </div>
  );
}

export default GroupRoutes;

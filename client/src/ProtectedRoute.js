import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const ProtectedRoute = ({ component: Component, ...rest }) => {

    const isAuthenticated = localStorage.getItem('token');

    return ( isAuthenticated ? (
          <Route {...rest} render={
            props => <Component {...rest} {...props} />
          } />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        )
    )
}


export default ProtectedRoute;

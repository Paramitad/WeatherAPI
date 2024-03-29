import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth';

const ProtectedRoute = ({ Component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (Auth.isAuthenticated()) {
                    return <Component {...props} />;
                }

                else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}

export default ProtectedRoute;
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthenticationProvider";

export default function PrivateRoute({ children }, ...rest) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={() => {
                return currentUser ? children : <Redirect to="/login" />;
            }}></Route>
    );
}

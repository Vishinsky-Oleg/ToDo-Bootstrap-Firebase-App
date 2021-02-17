import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthenticationProvider";

export default function PrivateRoute({ children, path }, ...rest) {
    const { currentUser } = useAuth();
    if (path === "/login") {
        return (
            <Route
                {...rest}
                render={() => {
                    return currentUser ? <Redirect to="/" /> : children;
                }}></Route>
        );
    } else {
        return (
            <Route
                {...rest}
                render={() => {
                    return currentUser ? children : <Redirect to="/login" />;
                }}></Route>
        );
    }
}

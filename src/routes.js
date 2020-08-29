import React from "react";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import SignUp from "./pages/SignUp";
import { Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
}
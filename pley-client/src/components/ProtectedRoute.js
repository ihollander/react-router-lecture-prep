import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  if (props.isSignedIn) {
    return <Route path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/" />;
  }
}
// more advanced version: https://reacttraining.com/react-router/web/example/auth-workflow

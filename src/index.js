import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/pages/index/IndexPage.js";
import LoginPage from "views/pages/login/LoginPage.js";
import RecoveryPasswordPage from "views/pages/recovery-password/RecoveryPasswordPage.js"
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/index"
        render={props => <Index {...props} />}
      />
      {!window.sessionStorage.getItem("username") ?
        <Route
          path="/login"
          render={props => <LoginPage {...props} />}
        />
        :
        <Redirect to="/index" />
      }
      <Route
        path="/recoverypassword"
        render={props => <RecoveryPasswordPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

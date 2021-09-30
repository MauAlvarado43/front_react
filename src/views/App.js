import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Examples from "seed/examples/components/Examples";
import Dashboard from "components/Dashboard";
import css from "resources/css/App.module.css";

const App = () =>
  <div class={css.module}>
    <BrowserRouter>
      <Switch>
        <Route path="/examples" component={Examples} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/examples" />
      </Switch>
    </BrowserRouter>
  </div>;

App.propTypes = {};

export default App;
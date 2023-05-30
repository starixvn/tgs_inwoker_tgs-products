import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import Landing from "../pages/landing";
import { createBrowserHistory } from "history";

import i18n from "./i18n";
import Demo from "../pages/demo";
import AboutPage from "../pages/about";
import Contact from "../pages/contact";
import PathWrapper from "../component/pathwrapper";

export const AppHistory = createBrowserHistory();

const AppRouter = () => {
  const paths = [
    { route: "/demo", component: Demo },
    { route: "/contact", component: Contact },
    { route: "/", component: AboutPage },
    { route: "/products", component: Landing },
    { route: "/products/:game", component: Landing },
  ];
  return (
    <>
      <Router history={AppHistory}>
        <Switch>
          {paths.map((data, index) => {
            return <Route exact path={data.route} component={data.component} />;
          })}
          <Redirect to={`/`} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;

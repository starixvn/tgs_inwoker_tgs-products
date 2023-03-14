import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import Landing from "../pages/landing";
import { createBrowserHistory } from "history";

import i18n from "./i18n";
import Demo from "../pages/demo";
import AboutPage from "../pages/about";
import Contact from "../pages/contact";

export const AppHistory = createBrowserHistory();

const AppRouter = () => {
  const baseRouteUrl = `/:locale(en-US|zh-CN|zh-TW)`;
  const paths = [
    { route: "/demo", component: Demo },
    { route: "/contact", component: Contact },
    { route: "/about", component: AboutPage },
    { route: "/", component: Landing },
  ];
  return (
    <>
      <Router history={AppHistory}>
        <Switch>
          {paths.map((data, index) => {
            return (
              <Route
                exact
                path={baseRouteUrl + data.route}
                component={data.component}
              />
            );
          })}
          <Redirect to={`/${i18n.language}`} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;

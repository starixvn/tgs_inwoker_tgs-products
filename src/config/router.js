import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import Landing from "../pages/landing";
import { createBrowserHistory } from "history";
import Products from "../pages/products";
import Demo from "../pages/demo";
import Contact from "../pages/contact";
import About from "../pages/about";
import i18n from "./i18n";

export const AppHistory = createBrowserHistory();

const AppRouter = () => {
  const baseRouteUrl = `/:locale(en-US|zh-CN)`;
  const paths = [
    { route: "/products", component: Products },
    { route: "/demo", component: Demo },
    { route: "/contact", component: Contact },
    { route: "/about", component: About },
    { route: "/", component: Landing },
  ];
  return (
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
  );
};

export default AppRouter;

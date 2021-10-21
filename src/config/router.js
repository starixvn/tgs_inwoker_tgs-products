import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import Landing from "../pages/landing";
import { createBrowserHistory } from "history";
import Products from "../pages/products";
import Demo from "../pages/demo";
import Contact from "../pages/contact";
import About from "../pages/about";
import Partners from "../pages/partners";

export const AppHistory = createBrowserHistory();

const AppRouter = () => {
  const baseRouteUrl = `/:locale(en-US|zh-CN|zh-TW|th-TH|id-ID|vi-VN)`;
  return (
    <Router history={AppHistory}>
      <Switch>
        <Route exact path={baseRouteUrl + "/products"} component={Products} />
        <Route exact path={baseRouteUrl + "/demo"} component={Demo} />
        <Route exact path={baseRouteUrl + "/contact"} component={Contact} />
        <Route exact path={baseRouteUrl + "/about"} component={About} />
        <Route exact path={baseRouteUrl + "/"} component={Landing} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react/cjs/react.development";
import config from "./config/config";
import i18n from "./config/i18n";
import AppRouter, { AppHistory } from "./config/router";
import "./index.css";
import Pages from "./pages";

const Wrapper = () => {
  //run this when the app is initialize.
  var path = window.location.pathname.split("/");

  useEffect(() => {
    if (path[2] === "") {
      AppHistory.push("/" + i18n.language);
    } else {
    }
    document.title = config.brand;
    document.querySelector("link[rel*='icon']").href =
      process.env.PUBLIC_URL + `/assets/favicon/${config.brand}.ico`;
  }, []);
  return <Pages />;
};

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

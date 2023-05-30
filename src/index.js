import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import config from "./config/config";
import { GlobalStyles } from "./config/style";
import "./index.css";
import Pages from "./pages";
import { languages } from "./component/languageChanger";

const Wrapper = () => {
  useEffect(() => {
    document.title = config.brand + " - Product Showcase";
    document.querySelector("link[rel*='icon']").href =
      process.env.PUBLIC_URL + `/assets/favicon/${config.brand}.ico`;
  }, []);
  return <Pages />;
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Wrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

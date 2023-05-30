import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import config from "./config/config";
import { GlobalStyles } from "./config/style";
import "./index.css";
import Pages from "./pages";
import { languages } from "./component/languageChanger";

const Wrapper = () => {
  var fallbackLng = localStorage.getItem("fallbackLng");
  useEffect(() => {
    if (localStorage.getItem("i18nextLng") === null) {
      localStorage.setItem("i18nextLng", languages[0].language);
    } else {
      let found = false;
      for (let i = 0; i < languages.length; i++) {
        if (languages[i].language === localStorage.getItem("i18nextLng")) {
          found = true;
          break;
        }
      }
      if (!found) {
        localStorage.setItem(
          "i18nextLng",
          fallbackLng || languages[0].language
        );
      }
    }
  });

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

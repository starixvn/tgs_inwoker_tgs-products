import React from "react";
import { useState, useEffect } from "react";

import AppBar from "../component/appbar";
import Page from "../component/page";
import AppRouter from "../config/router";

const Pages = () => {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = (e) => {
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div>
      <AppBar scrolled={y >= 300} />
      <Page>
        <AppRouter />
      </Page>
    </div>
  );
};

export default Pages;

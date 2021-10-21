import React from "react";
import AppBar from "../component/appbar";
import Footer from "../component/footer";
import Page from "../component/page";
import AppRouter from "../config/router";

const Pages = () => {
  return (
    <div>
      <AppBar />
      <Page>
        <AppRouter />
      </Page>
      <Footer />
    </div>
  );
};

export default Pages;

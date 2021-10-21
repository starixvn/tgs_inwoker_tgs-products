import React from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";

const Content = styled.div``;
const About = () => {
  return (
    <Page>
      <Content>
        <Banner
          background="banner/about.jpg"
          gradient="rgb(255,255,255,0.1), rgb(255,255,255,0.1)"
        ></Banner>
        <div>123123</div>
      </Content>
    </Page>
  );
};

export default About;

import React from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";

const Content = styled.div``;
const BannerTitle = styled.div`
  font-size: 30px;
  color: white;
`;

const Demo = () => {
  const wapProjects = [
    { image: "demo/web/t1", title: "", link: "" },
    { image: "demo/web/t2", title: "", link: "" },
    { image: "demo/web/t3", title: "", link: "" },
    { image: "demo/web/t4", title: "", link: "" },
    { image: "demo/web/t5", title: "", link: "" },
  ];

  const webProject = [
    { image: "demo/wap/t1", title: "", link: "" },
    { image: "demo/wap/t2", title: "", link: "" },
    { image: "demo/wap/t3", title: "", link: "" },
    { image: "demo/wap/t4", title: "", link: "" },
    { image: "demo/wap/t5", title: "", link: "" },
  ];
  return (
    <Page>
      <Content>
        <Banner
          background="banner/demo-web.jpg"
          gradient="rgb(255,255,255,0.1), rgb(255,255,255,0.1)"
        >
          <BannerTitle>最全面的包网方案</BannerTitle>
        </Banner>
        <div>123123</div>
      </Content>
    </Page>
  );
};

export default Demo;

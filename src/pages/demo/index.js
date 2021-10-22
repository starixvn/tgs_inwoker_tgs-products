import React, { useState } from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Section from "../../component/section";
import Image from "../../component/image";
import { useEffect } from "react/cjs/react.development";
import { useParams } from "react-router";
import i18n from "../../config/i18n";

const Content = styled.div``;
const BannerTitle = styled.div`
  font-size: 30px;
  color: white;
`;

const CustomButton = styled.div`
  color: white;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 0px 10px;
  cursor: pointer;
  ${({ selected }) => {
    return selected
      ? `
    background: #2092FF;
    `
      : `
    background: #D5D5D5;
    
    `;
  }}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;

const DemoProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 1280px;
  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 100%;
  }
`;

const DemoWapProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 1280px;
  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 100%;
  }
`;

const DemoProjectButton = styled.div`
  padding: 10px 5px;
  text-align: center;

  border-radius: 0px 0px 15px 15px;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
  display: none;
`;

const DemoProject = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    ${DemoProjectButton} {
      background: #2092ff;
      color: white;
    }
    ${ImageOverlay} {
      display: block;
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const TheImage = styled.img`
  @media (max-width: 600px) {
    max-width: calc(100vw - 40px);
  }
`;

const Demo = () => {
  const webProject = [
    { image: "/demo/web/t1.jpg", title: "T1", link: "" },
    { image: "/demo/web/t2.jpg", title: "T2", link: "" },
    { image: "/demo/web/t3.jpg", title: "T3", link: "" },
    { image: "/demo/web/t4.jpg", title: "T4", link: "" },
    { image: "/demo/web/t5.jpg", title: "T5", link: "" },
  ];

  const wapProject = [
    { image: "/demo/wap/t1.jpg", title: "T1", link: "" },
    { image: "/demo/wap/t2.jpg", title: "T2", link: "" },
    { image: "/demo/wap/t3.jpg", title: "T3", link: "" },
    { image: "/demo/wap/t4.jpg", title: "T4", link: "" },
    { image: "/demo/wap/t5.jpg", title: "T5", link: "" },
    { image: "/demo/wap/t6.jpg", title: "T6", link: "" },
  ];

  const [project, setProject] = useState("web");
  const { type } = useParams();
  var path = process.env.PUBLIC_URL + "/assets/images";

  return (
    <Page>
      <Content>
        <Banner
          background={`banner/demo-${project}.jpg`}
          gradient="rgb(255,255,255,0.1), rgb(255,255,255,0.1)"
        >
          <BannerTitle>{i18n.t("demo.title")}</BannerTitle>
        </Banner>
        <Section>
          <ButtonWrapper>
            <CustomButton
              selected={project === "web"}
              onClick={() => {
                setProject("web");
              }}
            >
              {i18n.t("demo.version.web")}
            </CustomButton>
            <CustomButton
              selected={project === "wap"}
              onClick={() => {
                setProject("wap");
              }}
            >
              {i18n.t("demo.version.wap")}
            </CustomButton>
          </ButtonWrapper>
          {project === "web" ? (
            <DemoProjectWrapper>
              {webProject.map((data, index) => {
                return (
                  <DemoProject>
                    <ImageContainer>
                      <ImageOverlay src={path + "/demo/web/hover.png"} />
                      <TheImage src={path + data.image} />
                    </ImageContainer>
                    <DemoProjectButton>{data.title}</DemoProjectButton>
                  </DemoProject>
                );
              })}
            </DemoProjectWrapper>
          ) : (
            <DemoWapProjectWrapper>
              {wapProject.map((data, index) => {
                return (
                  <DemoProject>
                    <ImageContainer>
                      <ImageOverlay src={path + "/demo/wap/hover.png"} />
                      <img src={path + data.image} />
                    </ImageContainer>
                    <DemoProjectButton>{data.title}</DemoProjectButton>
                  </DemoProject>
                );
              })}
            </DemoWapProjectWrapper>
          )}
        </Section>
      </Content>
    </Page>
  );
};

export default Demo;

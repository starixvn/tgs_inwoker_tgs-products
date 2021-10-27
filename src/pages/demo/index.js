import React, { useState } from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Section from "../../component/section";
import i18n from "../../config/i18n";
import breakpoint from "../../config/breakpoints";

const Content = styled.div``;

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
  @media (${breakpoint.mobile}) {
    width: 100%;
    grid-template-columns: 100%;
  }
`;

const DemoWapProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 1280px;
  @media (${breakpoint.mobile}) {
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
  background: rgba(3, 137, 255, 0.75);
  background-size: cover;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0;
  transition: opacity 0.5s;
`;

const OverlayBox = styled.div`
  padding: 30px;
  min-height: 100px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 6px white;
  font-size: 30px;
  font-weight: bold;
  transition: opacity 2s;
  opacity: 0;
`;

const DemoProject = styled.div`
  cursor: pointer;
  :hover {
    ${DemoProjectButton} {
      background: #2092ff;
      color: white;
    }
    ${ImageOverlay} {
      opacity: 1;
    }

    ${OverlayBox} {
      opacity: 1;
    }
  }

  @media (${breakpoint.mobile}) {
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const TheImage = styled.img`
  @media (${breakpoint.mobile}) {
    max-width: calc(100vw - 40px);
  }
`;

const Demo = () => {
  const webProject = [
    { image: "/demo/web/t1.jpg", title: "T1", link: "https://t1.srvptt.com/" },
    { image: "/demo/web/t2.jpg", title: "T2", link: "https://t2.srvptt.com/" },
    { image: "/demo/web/t3.jpg", title: "T3", link: "https://t3.srvptt.com/" },
    { image: "/demo/web/t4.jpg", title: "T4", link: "https://t4.srvptt.com/" },
    { image: "/demo/web/t5.jpg", title: "T5", link: "https://t5.srvptt.com/" },
  ];

  const wapProject = [
    { image: "/demo/wap/t1.jpg", title: "T1", link: "https://t1.srvptt.com/" },
    { image: "/demo/wap/t2.jpg", title: "T2", link: "https://t2.srvptt.com/" },
    { image: "/demo/wap/t3.jpg", title: "T3", link: "https://t3.srvptt.com/" },
    { image: "/demo/wap/t4.jpg", title: "T4", link: "https://t4.srvptt.com/" },
    { image: "/demo/wap/t5.jpg", title: "T5", link: "https://t5.srvptt.com/" },
  ];

  function gotoPage(link) {
    window.open(link);
  }

  const [project, setProject] = useState("web");
  var path = process.env.PUBLIC_URL + "/assets/images";

  return (
    <Page>
      <Content>
        <Banner
          background={`banner/demo-${project}.jpg`}
          gradient="rgb(255,255,255,0.1), rgb(255,255,255,0.1)"
          title={i18n.t("demo.title")}
        ></Banner>
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
                      <ImageOverlay
                        src={path + "/demo/web/hover.png"}
                        onClick={() => {
                          gotoPage(data.link);
                        }}
                      >
                        <OverlayBox>{data.title}</OverlayBox>
                      </ImageOverlay>

                      <TheImage src={path + data.image} />
                    </ImageContainer>
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
                      <ImageOverlay
                        src={path + "/demo/web/hover.png"}
                        onClick={() => {
                          gotoPage(data.link);
                        }}
                      >
                        <OverlayBox>{data.title}</OverlayBox>
                      </ImageOverlay>
                      <img src={path + data.image} alt={path + data.image} />
                    </ImageContainer>
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

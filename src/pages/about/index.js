import React from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import i18n from "../../config/i18n";
import breakpoint from "../../config/breakpoints";

const ContentTextTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  width: 100%;
`;

const ContentTitlePoints = styled.div`
  width: 100%;
`;

const MoveLeftImage = styled.img`
  height: 500px;
  transition: margin 1s;
  :hover {
  }
`;

const MoveRightImage = styled.img`
  height: 500px;
  transition: margin 1s;
  :hover {
  }
`;

const RightImage = styled.div`
  height: 500px;
  transition: margin 1s;
  width: 1000px;
  background: url(${({ src }) => src}) center no-repeat;
`;

const Container = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  position: relative;
`;

const FloatOnTop = styled.div`
  color: white;
  position: absolute;
  margin-left: 20%;
  opacity: 0;
`;

const FloatOnTopThree = styled.div`
  position: absolute;
  right: 20%;
  color: white;
  opacity: 0;
`;

const LeftImage = styled.div`
  height: 500px;
  transition: margin 1s;
  width: 1000px;
  background: url(${({ src }) => src}) center no-repeat;
`;

const FloatOnTopTwo = styled.div`
  color: black;
  margin-right: 20%;
  opacity: 0;
`;

const LeftContainer = styled(Container)`
  :hover {
    ${LeftImage} {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url(${({ src }) => src}) center no-repeat;
    }

    ${MoveLeftImage} {
      margin-left: -100px;
    }
    ${FloatOnTop} {
      opacity: 1;
      transition: opacity 1s;
    }
    ${FloatOnTopTwo} {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;

const FloatOnLeft = styled.div`
  margin-left: 20%;
  opacity: 0;
`;

const RightContainer = styled(Container)`
  :hover {
    ${LeftImage} {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url(${({ src }) => src}) center no-repeat;
    }

    ${MoveRightImage} {
      margin-right: -100px;
    }

    ${FloatOnLeft} {
      opacity: 1;
      transition: opacity 3s;
    }
  }
`;

const AnotherRightContainer = styled(RightContainer)`
  justify-content: flex-end;
  :hover {
    ${RightImage} {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url(${({ src }) => src}) center no-repeat;
    }
    ${FloatOnTopThree} {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;

var path = process.env.PUBLIC_URL + "/assets/images";

const Wrapper = styled.div`
  margin-top: 50px;
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const Content = styled.div``;

const AnotherWrapper = styled.div`
  display: none;
  @media (${breakpoint.mobile}) {
    display: block;
  }
`;

const EachBloodyPart = styled.div`
  padding: 20px;
`;
const About = () => {
  return (
    <Page>
      <Content>
        <Banner
          background="banner/about.jpg"
          gradient="rgb(0,0,0,0.5), rgb(0,0,0,0.5)"
          title={i18n.t("about.title")}
          description={i18n.t("about.description")}
        ></Banner>
        <Wrapper>
          <LeftContainer src={path + "/about/1.png"}>
            <LeftImage src={path + "/about/1.png"} />
            <FloatOnTop>
              <ContentTextTitle>{i18n.t("about.1.title")}</ContentTextTitle>
              <ContentTitlePoints>
                ◼ {i18n.t("about.1.point1")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.1.point2")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.1.point3")}
              </ContentTitlePoints>
            </FloatOnTop>
          </LeftContainer>
          <RightContainer>
            <FloatOnLeft>
              <ContentTextTitle>{i18n.t("about.2.title")}</ContentTextTitle>
              <ContentTitlePoints>
                ◼ {i18n.t("about.2.point1")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.2.point2")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.2.point3")}
              </ContentTitlePoints>
            </FloatOnLeft>
            <MoveRightImage src={path + "/about/2.png"} />
          </RightContainer>
          <LeftContainer>
            <MoveLeftImage src={path + "/about/3.png"} />
            <FloatOnTopTwo>
              <ContentTextTitle>{i18n.t("about.3.title")}</ContentTextTitle>
              <ContentTitlePoints>
                ◼ {i18n.t("about.3.point1")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.3.point2")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.3.point3")}
              </ContentTitlePoints>
            </FloatOnTopTwo>
          </LeftContainer>
          <AnotherRightContainer src={path + "/about/4.png"}>
            <FloatOnTopThree>
              <ContentTextTitle>{i18n.t("about.4.title")}</ContentTextTitle>
              <ContentTitlePoints>
                ◼ {i18n.t("about.4.point1")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.4.point2")}
              </ContentTitlePoints>
              <ContentTitlePoints>
                ◼ {i18n.t("about.4.point3")}
              </ContentTitlePoints>
            </FloatOnTopThree>
            <RightImage src={path + "/about/4.png"} />
          </AnotherRightContainer>
        </Wrapper>
        <AnotherWrapper>
          <EachBloodyPart>
            <ContentTextTitle>{i18n.t("about.1.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("about.1.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.1.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.1.point3")}
            </ContentTitlePoints>
          </EachBloodyPart>
          <EachBloodyPart>
            <ContentTextTitle>{i18n.t("about.2.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("about.2.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.2.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.2.point3")}
            </ContentTitlePoints>
          </EachBloodyPart>
          <EachBloodyPart>
            <ContentTextTitle>{i18n.t("about.3.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("about.3.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.3.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.3.point3")}
            </ContentTitlePoints>
          </EachBloodyPart>
          <EachBloodyPart>
            <ContentTextTitle>{i18n.t("about.4.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("about.4.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.4.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("about.4.point3")}
            </ContentTitlePoints>
          </EachBloodyPart>
        </AnotherWrapper>
      </Content>
    </Page>
  );
};

export default About;

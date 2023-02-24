import React from "react";
import Page from "../../component/page";
import { common } from "../../utils/common";
import styled from "styled-components";
import Arrow from "../../component/arrow";
import i18n from "../../config/i18n";
import ProperSectionOne from "./section1";
import SectionTwo from "./section2";
import SectionThree from "./section3";
import AdvantageAndPartner from "./section4";
import breakpoint from "../../config/breakpoints";

const SectionOne = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  height: calc(100vh - 100px);
  align-items: center;
`;

const SectionOneContentOrientation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
`;

const Description = styled.div`
  padding: 30px 0;
  white-space: pre-line;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const SectionOneContent = styled.div``;

const GapLeaver = styled.div`
  background: #081525;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Content = styled.div`
  width: 1280px;
  color: #fff;
  display: grid;
  grid-template-columns: 40% 60%;

  @media (${breakpoint.mobile}) {
    width: 100%;
  }
`;

const AnotherTitle = styled.div`
  font-size: 5rem;
  font-weight: 700;
`;

const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnotherDescription = styled.div`
  padding: 10px 0;
  white-space: pre-line;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const TripleCircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const random = () => {
  return Math.floor(Math.random() * 20) - 10;
};

const UnderneathCircle = styled.div`
  background: #03396a;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;

  z-index: 0;

  animation: ${({ animate }) => {
      return [animate];
    }}
    5s infinite;
  @keyframes move1 {
    0% {
      transform: translate(${random()}px, ${random()}px);
    }
    50% {
      transform: translate(${random()}px, ${random()}px);
    }
    100% {
      transform: translate(${random()}px, ${random()}px);
    }
  }

  @keyframes move2 {
    0% {
      transform: translate(${random()}px, ${random()}px);
    }
    50% {
      transform: translate(${random()}px, ${random()}px);
    }
    100% {
      transform: translate(${random()}px, ${random()}px);
    }
  }

  @keyframes move3 {
    0% {
      transform: translate(${random()}px, ${random()}px);
    }
    50% {
      transform: translate(${random()}px, ${random()}px);
    }
    100% {
      transform: translate(${random()}px, ${random()}px);
    }
  }
`;

const AboveCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #0389ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  font-size: 2rem;
  white-space: pre-line;
  font-weight: bold;
  letter-spacing: 0.25rem;
`;

const TheCircleWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
`;

const SectionOneCircle = () => {
  const TheCircle = ({ children, animate }) => {
    //randomly assign move1, move2, move3 to animate and wont duplicate the same move
    var moves = ["move1", "move2", "move3"];
    var move = moves[Math.floor(Math.random() * moves.length)];
    moves.splice(moves.indexOf(move), 1);
    animate = move;

    return (
      <TheCircleWrapper>
        <UnderneathCircle animate={animate}></UnderneathCircle>
        <AboveCircle>{children}</AboveCircle>
      </TheCircleWrapper>
    );
  };

  return (
    <GapLeaver>
      <Content>
        <TitleAndDescription>
          <AnotherTitle>迅速开站</AnotherTitle>
          <AnotherDescription>前台、后台、代理一次解决</AnotherDescription>
        </TitleAndDescription>
        <TripleCircleContainer>
          <TheCircle>
            客制 <br></br> 前台
          </TheCircle>
          <TheCircle>
            後台 <br></br> 系統
          </TheCircle>
          <TheCircle>
            代理 <br></br> 系統
          </TheCircle>
        </TripleCircleContainer>
      </Content>
    </GapLeaver>
  );
};

const AboutPage = () => {
  return (
    <>
      <Page
        background={common.imageUrl + "/about/sc1.jpg"}
        style={{ height: "calc(100vh - 200px)" }}
      >
        <SectionOne>
          <SectionOneContent>
            <SectionOneContentOrientation>
              <Title>{i18n.t("new_about.sc1_title")}</Title>
              <Description>{i18n.t("new_about.sc1_description")}</Description>
              <Arrow direction="down" animate={true} size="xlarge" />
            </SectionOneContentOrientation>
          </SectionOneContent>
          <SectionOneContent>
            <div>
              <img
                src={common.imageUrl + "about/sc1-right.png"}
                alt="sc1right"
              />
            </div>
          </SectionOneContent>
        </SectionOne>
      </Page>
      <SectionOneCircle />
      <ProperSectionOne />
      <SectionTwo />
      <SectionThree />
      <AdvantageAndPartner />
    </>
  );
};

export default AboutPage;

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
import Footer from "../../component/footer";

const SectionOne = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  height: calc(100vh - 100px);
  align-items: center;

  @media (${breakpoint.mobile}) {
    display: block;
    padding: 20px;
    transform: scale(0.7);

    grid-template-columns: auto;
  }
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

  @media (${breakpoint.mobile}) {
    background: #081120;
  }
`;

const Content = styled.div`
  width: 1280px;
  color: #fff;
  display: grid;
  grid-template-columns: 40% 60%;

  @media (${breakpoint.mobile}) {
    width: 100%;
    display: block;
    transform: scale(0.7);
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
  @media (${breakpoint.mobile}) {
    transform: scale(0.7);
  }
`;

const ImageSizeAdjuster = styled.img`
  @media (${breakpoint.mobile}) {
    width: 500px;
    margin-left: -70px;
  }
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
      <>
        <Page
          background={common.imageUrl + "/about/sc1.jpg"}
          style={{ height: "calc(100vh - 200px)" }}
        >
          <SectionOne>
            <SectionOneContent>
              <SectionOneContentOrientation>
                <Title>{i18n.t("订制娱乐城")}</Title>
                <Description>
                  {i18n.t(
                    "一站式全渠道品牌包网服务,全渠道游戏完整建站 \n 完全客制化品牌打造综合品牌系统"
                  )}
                </Description>
                <Arrow direction="down" animate={true} size="xlarge" />
              </SectionOneContentOrientation>
            </SectionOneContent>
            <SectionOneContent>
              <ImageSizeAdjuster
                src={common.imageUrl + "about/sc1-right.png"}
                alt="sc1right"
              />
            </SectionOneContent>
          </SectionOne>
        </Page>
        <SectionOneCircle />
        <ProperSectionOne />
        <SectionTwo />
        <SectionThree />
        <AdvantageAndPartner />
      </>
      <Footer />
    </>
  );
};

export default AboutPage;

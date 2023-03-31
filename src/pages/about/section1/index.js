import React from "react";
import styled from "styled-components";
import breakpoint from "../../../config/breakpoints";
import i18n from "../../../config/i18n";
import { common } from "../../../utils/common";

const HugeAssNumber = styled.div`
  font-size: 450px;
  font-style: italic;
  color: #0389ff;
  font-weight: 700;
  font-family: "Arial", sans-serif;
  @media (${breakpoint.mobile}) {
    font-size: 100px;
  }
`;

const GapLeaver = styled.div`
  background: #081525 url(${common.imageUrl + "about/psc1-guy.jpg"}) top
    no-repeat;
  display: grid;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 850px;

  @media (${breakpoint.mobile}) {
    background: #081120;
    margin-top: -1px;
  }

  :hover {
    ${HugeAssNumber} {
      animation: glow 1s ease-in-out alternate;

      @keyframes glow {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0389ff,
            0 0 40px #0389ff, 0 0 50px #0389ff, 0 0 60px #0389ff,
            0 0 70px #0389ff;

          color: #fff;
          opacity: 1;
          transform: scale(1);
          transition: all 0.5s ease-in-out;
          animation: glow 1s ease-in-out infinite alternate;
        }
      }
    }
  }
  @media (${breakpoint.mobile}) {
    height: fit-content;
    padding-bottom: 40px;
    padding: 20px;
  }
`;

const TheContent = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;

  @media (${breakpoint.mobile}) {
    width: 100%;
    align-items: flex-start;
    gap: 0px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;

  @media (${breakpoint.mobile}) {
    padding-left: 20px;
    gap: 0px;
  }
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: bold;
  @media (${breakpoint.mobile}) {
    font-size: 40px;
    padding: 0 0 10px 0;
  }
`;

const Subtitle = styled.span`
  color: #0389ff;
  font-size: 40px;
  @media (${breakpoint.mobile}) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  font-size: 30px;
  color: #c4c4c4;
  line-height: 1.8;
  text-align: justify;

  @media (${breakpoint.mobile}) {
    font-size: 12px;
    padding-right: 20px;
  }
`;

const HideOnMobile = styled.div`
  display: block;
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const ShowOnMobile = styled.div`
  display: none;
  @media (${breakpoint.mobile}) {
    display: block;
  }
`;

const StraightFuckingLine = styled.div`
  width: 2px;
  height: 200px;
  background: #0389ff;
`;

const ContainerWithLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TheImageHolder = styled.img`
  width: 100%;
  margin-right: -20px;
  display: none;

  @media (${breakpoint.mobile}) {
    display: block;
  }
`;

const ProperSectionOne = () => {
  return (
    <GapLeaver>
      <TheContent>
        <ContainerWithLine>
          <HugeAssNumber>1</HugeAssNumber>
          <ShowOnMobile>
            <StraightFuckingLine />
          </ShowOnMobile>
        </ContainerWithLine>

        <RightContent>
          <ShowOnMobile>
            <Subtitle>CUSTOMIZED </Subtitle>
          </ShowOnMobile>
          <Title>
            {i18n.t("about.section.1.title")}
            <HideOnMobile>
              <Subtitle>CUSTOMIZED </Subtitle>
            </HideOnMobile>
          </Title>
          <Description>{i18n.t("about.section.1.description")}</Description>
          <TheImageHolder src={common.imageUrl + "/about/1mb.png"} />
        </RightContent>
      </TheContent>
    </GapLeaver>
  );
};

export default ProperSectionOne;

import React from "react";
import styled from "styled-components";
import breakpoint from "../../../config/breakpoints";
import { common } from "../../../utils/common";

const HugeAssNumber = styled.div`
  font-size: 300px;
  font-style: italic;
  color: #0389ff;
  font-weight: 700;
  line-height: 0.7;
  @media (${breakpoint.mobile}) {
    font-size: 100px;
  }
`;

const GapLeaver = styled.div`
  background: #081525 url(${common.imageUrl + "about/sc2.jpg"}) top no-repeat;
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
  grid-template-columns: 55% 45%;
  align-items: center;

  @media (${breakpoint.mobile}) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 20px;
  align-items: flex-end;
  @media (${breakpoint.mobile}) {
    align-items: flex-start;
    grid-template-columns: 20% 80%;
    gap: 0px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  gap: 20px;
  @media (${breakpoint.mobile}) {
    padding-left: 20px;
    gap: 10px;
  }
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: bold;
  @media (${breakpoint.mobile}) {
    font-size: 50px;
  }
`;

const Subtitle = styled.span`
  color: #0389ff;
  font-size: 30px;
  line-height: 0.05;

  @media (${breakpoint.mobile}) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  font-size: 18px;

  letter-spacing: 3px;
  @media (${breakpoint.mobile}) {
    font-size: 12px;
    letter-spacing: 0px;
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
  margin-top: 30px;
`;

const ContainerWithLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTwo = () => {
  return (
    <GapLeaver>
      <TheContent>
        <div></div>
        <RightContainer>
          <ContainerWithLine>
            <HugeAssNumber>2</HugeAssNumber>
            <ShowOnMobile>
              <StraightFuckingLine />
            </ShowOnMobile>
          </ContainerWithLine>
          <RightContent>
            <Subtitle>WEB VERSION</Subtitle>
            <Title>选择模板</Title>
            <Description>
              根据您的需求, 选择或订制版型。
              <br /> 真人遊本产品不管是桌机用户、 <br />
              平板用户手机用户皆可畅行无阻,若您有需 <br />
              要还可以制作手机客户端。
            </Description>
          </RightContent>
        </RightContainer>
      </TheContent>
    </GapLeaver>
  );
};

export default SectionTwo;

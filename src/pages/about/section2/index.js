import React from "react";
import styled from "styled-components";
import { common } from "../../../utils/common";

const HugeAssNumber = styled.div`
  font-size: 300px;
  font-style: italic;
  color: #0389ff;
  font-weight: 700;
  line-height: 0.7;
`;

const GapLeaver = styled.div`
  background: #081525 url(${common.imageUrl + "about/sc2.jpg"}) top no-repeat;
  display: grid;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 850px;

  :hover {
    ${HugeAssNumber} {
      animation: glow 1s ease-in-out infinite alternate;
      -webkit-animation: glow 1s ease-in-out infinite alternate;

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
`;

const TheContent = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 20px;
  align-items: flex-end;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: bold;
`;

const Subtitle = styled.span`
  color: #0389ff;
  font-size: 30px;
  line-height: 0.05;
`;

const Description = styled.div`
  font-size: 18px;

  letter-spacing: 3px;
`;

const SectionTwo = () => {
  return (
    <GapLeaver>
      <TheContent>
        <div></div>
        <RightContainer>
          <HugeAssNumber>2</HugeAssNumber>
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

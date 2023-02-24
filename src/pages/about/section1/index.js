import React from "react";
import styled from "styled-components";
import { common } from "../../../utils/common";

const HugeAssNumber = styled.div`
  font-size: 450px;
  font-style: italic;
  color: #0389ff;
  font-weight: 700;
`;

const GapLeaver = styled.div`
  background: #081525 url(${common.imageUrl + "about/psc1-guy.jpg"}) top
    no-repeat;
  display: grid;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 850px;

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
`;

const TheContent = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: bold;
`;

const Subtitle = styled.span`
  color: #0389ff;
  font-size: 50px;
`;

const Description = styled.div`
  font-size: 30px;

  letter-spacing: 6px;
`;

const ProperSectionOne = () => {
  return (
    <GapLeaver>
      <TheContent>
        <HugeAssNumber>1</HugeAssNumber>
        <RightContent>
          <Title>
            专人諮詢 <Subtitle>CUSTOMIZED </Subtitle>
          </Title>
          <Description>
            我们将有专人, 给您最适合的服务, 您只要提供 <br />
            几项简单的资讯,我们将为您打造最适合的方案。
          </Description>
        </RightContent>
      </TheContent>
    </GapLeaver>
  );
};

export default ProperSectionOne;

import React from "react";
import styled from "styled-components";
import i18n from "../../../config/i18n";
import { common } from "../../../utils/common";
import { hardcoded } from "../../../utils/hardcode";

const HugeAssNumber = styled.div`
  font-size: 400px;
  font-style: italic;
  color: #0389ff;
  font-weight: 700;
`;

const GapLeaver = styled.div`
  background: #081525 url(${common.imageUrl + "about/sc3.jpg"}) top no-repeat;
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
  display: grid;
  grid-template-columns: 28% 72%;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 76% 24%;
  align-items: center;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

const Subtitle = styled.span`
  color: #0389ff;
  font-size: 30px;
`;

const Description = styled.div`
  font-size: 20px;
  letter-spacing: 6px;
`;

const Icon = styled.div`
  mask: url(${({ icon }) => {
    return common.imageUrl + "homepage/icons/" + icon + ".svg";
  }});
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  width: 30px;
  height: 30px;
  background: white;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #fff;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
`;

const GameType = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 20px;
  letter-spacing: 2px;
`;

const GameTypeLister = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  align-items: center;
  height: 300px;
`;

const SectionThree = () => {
  return (
    <GapLeaver>
      <ContentWrapper>
        <TheContent>
          <HugeAssNumber>3</HugeAssNumber>
          <RightContent>
            <Title>
              选择游戏 <Subtitle>GAMES </Subtitle>
            </Title>
            <Description>
              与各大知名游戏品牌合作,汇集20家以上平台, <br />
              游戏从经典真人百家乐游戏至电竞竞猜,千款游
              <br />
              戏任意畅玩,欢迎您前往试玩。
            </Description>
          </RightContent>
        </TheContent>
        <GameTypeLister>
          {hardcoded.homepage.map((data, index) => {
            return (
              <GameType key={index}>
                <IconWrapper>
                  <Icon icon={data.title} />
                </IconWrapper>

                <div> {i18n.t("gametype." + data.title)}</div>
              </GameType>
            );
          })}
        </GameTypeLister>
      </ContentWrapper>
    </GapLeaver>
  );
};

export default SectionThree;

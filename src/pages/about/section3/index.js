import React from "react";
import styled from "styled-components";
import breakpoint from "../../../config/breakpoints";
import i18n from "../../../config/i18n";
import { common } from "../../../utils/common";
import { hardcoded } from "../../../utils/hardcode";

const HugeAssNumber = styled.div`
  font-size: 400px;
  font-style: italic;
  color: #0389ff;
  font-weight: 700;

  @media (${breakpoint.mobile}) {
    font-size: 100px;
  }
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

  @media (${breakpoint.mobile}) {
    background: #081120;
    margin-top: -1px;
  }

  @media (${breakpoint.mobile}) {
    height: fit-content;
    padding: 20px;
    padding-bottom: 40px;
  }
`;

const TheContent = styled.div`
  display: grid;
  grid-template-columns: 28% 72%;
  align-items: center;

  @media (${breakpoint.mobile}) {
    align-items: flex-start;
    grid-template-columns: 20% 80%;
    gap: 0px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 67% 33%;
  align-items: center;
  @media (${breakpoint.mobile}) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  gap: 10px;

  @media (${breakpoint.mobile}) {
    padding-left: 20px;
    gap: 5px;
  }
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: bold;

  @media (${breakpoint.mobile}) {
    font-size: 40px;
  }
`;

const Subtitle = styled.span`
  color: #0389ff;
  font-size: 30px;

  @media (${breakpoint.mobile}) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  letter-spacing: 6px;
  white-space: pre-line;
  @media (${breakpoint.mobile}) {
    font-size: 12px;
    letter-spacing: 0px;
  }
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

  @media (${breakpoint.mobile}) {
    font-size: 15px;
    letter-spacing: 0px;
  }
`;

const GameTypeLister = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  height: 300px;

  @media (${breakpoint.mobile}) {
    gap: 0px;
    padding: 20px;
    justify-content: center;
  }
`;

const ShowOnMobile = styled.div`
  display: none;
  @media (${breakpoint.mobile}) {
    display: block;
  }
`;

const HideOnMobile = styled.div`
  display: block;
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const SectionThree = () => {
  return (
    <GapLeaver>
      <ContentWrapper>
        <TheContent>
          <HugeAssNumber>3</HugeAssNumber>
          <RightContent>
            <ShowOnMobile>
              <Subtitle>GAMES </Subtitle>
            </ShowOnMobile>
            <Title>
              {i18n.t("about.section.3.title")}
              <HideOnMobile>
                <Subtitle>GAMES </Subtitle>
              </HideOnMobile>
            </Title>
            <Description>{i18n.t("about.section.3.description")}</Description>
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

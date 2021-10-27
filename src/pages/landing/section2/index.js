import React from "react";
import styled from "styled-components";
import FadeInSection from "../../../component/fadeIn";
import Image from "../../../component/image";
import breakpoint from "../../../config/breakpoints";
import i18n from "../../../config/i18n";

const SectionTwoWrapper = styled.div``;

const TheWrapperForCard = styled.div`
  margin-top: -100px;
  display: flex;
  justify-content: center;

  @media (${breakpoint.mobile}) {
    margin-top: 0px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 1280px;
  @media (${breakpoint.mobile}) {
    width: 100%;
    grid-template-columns: 50% 50%;
  }
`;

const CardWrapper = styled.div`
  padding: 20px;
`;

const TheCard = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 16px -2px rgb(255 255 255), 0 5px 11px -3px rgb(0 0 0 / 30%);

  :hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition: box-shadow 1s;
    cursor: pointer;
  }
`;

const TheContent = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

const TheWrapper = styled.div`
  position: relative;
  display: flex;
  color: white;
  z-index: -1;

  @media (${breakpoint.mobile}) {
    height: 300px;
  }
`;

const TheTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (${breakpoint.mobile}) {
    padding: 20px;
    width: calc(100% - 40px);
  }
`;

const Title = styled.div`
  font-size: 30px;
  padding: 10px 0px;
  font-weight: bold;
`;

const Description = styled.div`
  width: 690px;
  padding: 10px 0px;

  @media (${breakpoint.mobile}) {
    width: 100%;
  }
`;

const CardType = styled.div`
  padding: 0px 20px;
  color: #4f80e9;
  font-size: 12px;
`;
const CardTitle = styled.div`
  padding: 5px 20px;
  font-size: 20px;
`;
const CardDescription = styled.div`
  padding: 0px 20px;
  opacity: 0.6;
`;

const SectionTwo = () => {
  const cards = [
    {
      image: "/landing/cards/1.jpg",
      title: i18n.t("landing.sec2.cards.gametype.lottery.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.lottery.description"),
    },
    {
      image: "/landing/cards/2.jpg",
      title: i18n.t("landing.sec2.cards.gametype.chess.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.chess.description"),
    },
    {
      image: "/landing/cards/3.jpg",
      title: i18n.t("landing.sec2.cards.gametype.live.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.live.description"),
    },
    {
      image: "/landing/cards/4.jpg",
      title: i18n.t("landing.sec2.cards.gametype.sport.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.sport.description"),
    },
    {
      image: "/landing/cards/5.jpg",
      title: i18n.t("landing.sec2.cards.gametype.slot.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.slot.description"),
    },
    {
      image: "/landing/cards/6.jpg",
      title: i18n.t("landing.sec2.cards.gametype.electron.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.electron.description"),
    },
    {
      image: "/landing/cards/7.jpg",
      title: i18n.t("landing.sec2.cards.gametype.fish.title"),
      type: i18n.t("landing.sec2.cards.category.product"),
      description: i18n.t("landing.sec2.cards.gametype.fish.description"),
    },
  ];
  return (
    <SectionTwoWrapper>
      <TheWrapper>
        <Image src="/landing/cards/sector.jpg" />
        <TheTextContainer>
          <Title>{i18n.t("landing.sec2.title")}</Title>{" "}
          <Description>{i18n.t("landing.sec2.description")}</Description>
        </TheTextContainer>
      </TheWrapper>
      <TheWrapperForCard>
        <CardContainer>
          {cards.map((data, index) => {
            return (
              <FadeInSection>
                <CardWrapper>
                  <TheCard>
                    <Image src={data.image} />

                    <TheContent>
                      <CardType>{data.type}</CardType>
                      <CardTitle>{data.title}</CardTitle>
                      <CardDescription>{data.description}</CardDescription>
                    </TheContent>
                  </TheCard>
                </CardWrapper>
              </FadeInSection>
            );
          })}
        </CardContainer>
      </TheWrapperForCard>
    </SectionTwoWrapper>
  );
};

export default SectionTwo;

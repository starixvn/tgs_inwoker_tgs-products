import React from "react";
import styled from "styled-components";
import Image from "../../../component/image";

const SectionTwoWrapper = styled.div``;

const TheWrapperForCard = styled.div`
  margin-top: -100px;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 1280px;
`;

const CardWrapper = styled.div`
  padding: 20px;
`;

const TheCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 16px -2px rgb(255 255 255), 0 5px 11px -3px rgb(0 0 0 / 30%);
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
`;

const TheTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  padding: 10px 0px;
`;

const Description = styled.div`
  width: 690px;
  padding: 10px 0px;
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
      title: "彩票游戏",
      type: "游戏产品",
      description:
        "通过区块链的核心技术算法，确保公平、公正、以及最安全可靠数据的开奖结果。",
    },
    {
      image: "/landing/cards/2.jpg",
      title: "棋牌游戏",
      type: "游戏产品",
      description:
        "随着棋牌游戏的火速崛起，从休闲切换为真金白银的游戏模式，己经是市场不能缺的一部分。",
    },
    {
      image: "/landing/cards/3.jpg",
      title: "真人视讯",
      type: "游戏产品",
      description:
        "真人视讯给玩家带来前所未有的娱乐体验，是您提升业务的必备产品。",
    },
    {
      image: "/landing/cards/4.jpg",
      title: "体育赛事",
      type: "游戏产品",
      description:
        "提供接入多款体育竟技平台， 每周至少有上千场的体育联合赛事供您的体彩迷投注，是您体育迷的最佳选择平台。",
    },
    {
      image: "/landing/cards/5.jpg",
      title: "老虎机",
      type: "游戏产品",
      description:
        "在线老虎机游戏仍然是网上博彩最流行的方式。无数的赌博者热爱老虎机游戏，上百种老虎机游戏供君挑选。",
    },
    {
      image: "/landing/cards/6.jpg",
      title: "电子游戏",
      type: "游戏产品",
      description:
        "通过区块链的核心技术算法，确保公平 公正、以及最安全可靠数据的开奖结果。",
    },
    {
      image: "/landing/cards/7.jpg",
      title: "捕鱼游戏",
      type: "游戏产品",
      description:
        "这款游戏不仅可以放松心情而且可以感受到鱼儿在水中欢快的游荡！",
    },
  ];
  return (
    <SectionTwoWrapper>
      <TheWrapper>
        <Image src="/landing/cards/sector.jpg" />
        <TheTextContainer>
          <Title>热门流行玩法 上百款游戏自由搭配</Title>{" "}
          <Description>
            PG拥有当前最热门流行的游戏，包含真人、体育、棋牌、老虎机、捕鱼、彩票，多达上千款游戏任君挑选；搭配最刺激精彩的玩法，保证满足每一位玩家的极致娱乐体验！更可以根据客户所在的国家和区域匹配游戏币别和语言，快速响应客户客制化需求。
          </Description>
        </TheTextContainer>
      </TheWrapper>
      <TheWrapperForCard>
        <CardContainer>
          {cards.map((data, index) => {
            return (
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
            );
          })}
        </CardContainer>
      </TheWrapperForCard>
    </SectionTwoWrapper>
  );
};

export default SectionTwo;

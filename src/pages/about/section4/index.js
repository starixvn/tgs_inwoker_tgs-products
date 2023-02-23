import React from "react";
import styled from "styled-components";
import Page from "../../../component/page";
import { common } from "../../../utils/common";
import { hardcoded } from "../../../utils/hardcode";

const Contents = styled.div`
  min-height: 2000px;
  display: grid;
  grid-template-columns: 1;
  gap: 200px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  font-size: 20px;
`;

const Logos = styled.img`
  width: 200px;
  height: auto;
`;

const LogoHolder = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const AdvantageHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 30px;
  align-items: stretch;
  justify-content: center;
`;

const BenefitContainer = styled.div`
  background: #001731;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 40px 30px;
  margin-top: 80px;
`;

const HugeIcon = styled.div`
  background: #0389ff;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  mask: url(${(props) =>
    common.imageUrl + "about/benefit/" + props.src + ".svg"});
  mask-size: 80%;
  mask-repeat: no-repeat;
  mask-position: center;
`;

const AdvantageTitle = styled.div`
  font-size: 40px;
`;

const AdvantageDescription = styled.div`
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
  letter-spacing: 1.25px;
`;

const Advantages = () => {
  const benefits = [
    {
      icon: "film",
      title: "一站式解决方案",
      description:
        "业界最丰富的博弈经验,由专业团队满足个性化 定制需求,提供一站式集成整合服务。",
    },
    {
      icon: "card",
      title: "多样化游戏平台",
      description:
        "提供多种游戏多元化,严格把关游戏合作商, 高质量公正公平的游戏厂商集成接入,让您营 运安枕无忧。",
    },
    {
      icon: "file",
      title: "多种代理模式",
      description:
        "多种代理模式:金字塔代理模式,实时结算层 层抽佣,网站营运轻而易举,快速赚进大把钞",
    },
    {
      icon: "wallet",
      title: "快速便利支付",
      description:
        "支持网银、云闪付、微信、支付宝等等第三方支 付,会员存款自动上分,快速便利更有保障。",
    },
    {
      icon: "browser",
      title: "全平台支持",
      description: "支持各种计算机、行动装置,玩游戏无需下载 安装任何手机程序。",
    },
    {
      icon: "brief",
      title: "专业数据分析",
      description:
        "不断更新后台功能,与业界时时接轨,计算各 种资金、游戏数据,图像展示报表,随时动态 掌握,让您可以更轻松且聪明的管理娱乐城。",
    },
  ];

  const Benefits = ({ data }) => {
    return (
      <BenefitContainer>
        <HugeIcon src={data.icon} />
        <AdvantageTitle>{data.title}</AdvantageTitle>
        <AdvantageDescription>{data.description}</AdvantageDescription>
      </BenefitContainer>
    );
  };
  return (
    <div>
      <TitleContainer>
        <Title>产品优势</Title>
        <Subtitle>我们拥有专业的技术团队,为您打造最合适的娱乐城</Subtitle>
      </TitleContainer>
      <AdvantageHolder>
        {benefits.map((data, index) => {
          return <Benefits data={data} key={index} />;
        })}
      </AdvantageHolder>
    </div>
  );
};

const Partners = () => {
  return (
    <div>
      <TitleContainer>
        <Title>合作夥伴</Title>
        <LogoHolder>
          {hardcoded.brands.map((data, index) => {
            return (
              <Logos
                src={common.imageUrl + "/providers/bnw/" + data.name + ".png"}
                alt={data.name}
              ></Logos>
            );
          })}
        </LogoHolder>
      </TitleContainer>
    </div>
  );
};

const AdvantageAndPartner = () => {
  return (
    <Page background={common.imageUrl + "/about/sc4.jpg"}>
      <Contents>
        <Advantages />
        <Partners />
      </Contents>
    </Page>
  );
};

export default AdvantageAndPartner;

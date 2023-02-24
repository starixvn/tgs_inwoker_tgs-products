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
        {hardcoded.benefits.map((data, index) => {
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

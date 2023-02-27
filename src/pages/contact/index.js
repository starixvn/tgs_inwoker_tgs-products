import React from "react";
import Page from "../../component/page";
import { common } from "../../utils/common";
import styled from "styled-components";
import { hardcoded } from "../../utils/hardcode";
import breakpoint from "../../config/breakpoints";

const Content = styled.div`
  min-height: 100vh;
  @media (${breakpoint.mobile}) {
    padding: 20px;
  }
`;

const TitleHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  line-height: 0.85;
  padding-top: 600px;
  padding-bottom: 100px;
  color: #fff;

  @media (${breakpoint.mobile}) {
    padding-top: 100px;
  }
`;

const Title = styled.div`
  font-size: 3.4rem;
`;

const Subtittle = styled.div`
  font-weight: bold;
  color: #00a8ff;
  font-size: 2.5rem;
`;

const SupportsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 100px;

  @media (${breakpoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const SupportBackground = styled.div`
  background: #001731;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-top;
  gap: 20px;
  color: #fff;
  padding: 40px;

  @media (${breakpoint.mobile}) {
    padding: 20px 40px;
  }
`;

const SupportTitle = styled.div``;
const SupportDescription = styled.div``;

const Logos = styled.img`
  width: 200px;
  height: auto;

  @media (${breakpoint.mobile}) {
    width: 100%;
  }
`;

const Supports = ({ data }) => {
  return (
    <SupportBackground>
      <Logos src={common.imageUrl + "contact/icons/" + data.icon + ".png"} />
      <SupportTitle>{data.name}</SupportTitle>
      <SupportDescription>{data.handle}</SupportDescription>
    </SupportBackground>
  );
};
const Contact = () => {
  return (
    <Page background={common.imageUrl + "/contact/bg.jpg"}>
      <Content>
        <TitleHolder>
          <Subtittle>CONSULT</Subtittle>
          <Title>免費咨詢</Title>
        </TitleHolder>
        <SupportsContainer>
          {hardcoded.supports.map((data, index) => {
            return <Supports data={data} />;
          })}
        </SupportsContainer>
      </Content>
    </Page>
  );
};

export default Contact;

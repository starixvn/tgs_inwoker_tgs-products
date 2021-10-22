import AppBar from "../../component/appbar";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Section from "../../component/section";
import SectionTwo from "./section2";
import Partners from "./partners";
import Contact from "./contact";
import i18n from "../../config/i18n";

const BannerText = styled.div`
  color: white;
  padding: 10px 0px;
`;

const Title = styled(BannerText)`
  font-size: 30px;
`;

const Description = styled(BannerText)`
  width: 650px;
  @media (max-width: 600px) {
    width: calc(100% - 40px);
  }
`;

const TheGap = styled.div`
  margin-top: 100px;
  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const Landing = () => {
  return (
    <Page>
      <Banner
        background="banner/landing.jpg"
        gradient="rgb(0,0,0,0.3), rgb(0,0,0,0.3)"
      >
        <Title>{i18n.t("landing.title")}</Title>
        <Description>{i18n.t("landing.description")}</Description>
      </Banner>
      <TheGap>
        <SectionTwo />
      </TheGap>
      <TheGap>
        <Partners />
      </TheGap>
      <TheGap>
        <Contact />
      </TheGap>
    </Page>
  );
};

export default Landing;

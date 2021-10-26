import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import SectionTwo from "./section2";
import Partners from "./partners";
import Contact from "./contact";
import i18n from "../../config/i18n";
import Demos from "./demo";
import breakpoint from "../../config/breakpoints";

const TheGap = styled.div`
  margin-top: 100px;
  position: relative;
  @media (${breakpoint.mobile}) {
    margin-top: 40px;
  }
`;

const TheGapForSlider = styled(TheGap)`
  margin-bottom: -75px;
  padding: 25px 0px;
`;

const Landing = () => {
  return (
    <Page>
      <Banner
        background="banner/landing.jpg"
        gradient="rgb(0,0,0,0.3), rgb(0,0,0,0.3)"
        title={i18n.t("landing.title")}
        description={i18n.t("landing.description")}
      ></Banner>
      <TheGap>
        <SectionTwo />
      </TheGap>
      <TheGap>
        <Partners />
      </TheGap>
      <TheGapForSlider>
        <Demos />
      </TheGapForSlider>
      <TheGap>
        <Contact />
      </TheGap>
    </Page>
  );
};

export default Landing;

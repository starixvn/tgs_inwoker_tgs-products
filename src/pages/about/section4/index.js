import React from "react";
import styled from "styled-components";
import Page from "../../../component/page";
import breakpoint from "../../../config/breakpoints";
import i18n from "../../../config/i18n";
import { common } from "../../../utils/common";
import { hardcoded } from "../../../utils/hardcode";

const Contents = styled.div`
  min-height: 2000px;
  display: grid;
  grid-template-columns: 1;
  gap: 200px;

  @media (${breakpoint.mobile}) {
    gap: 10px;
    max-width: 100vw;
    padding: 20px;
    min-height: fit-content;
  }
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

  @media (${breakpoint.mobile}) {
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  @media (${breakpoint.mobile}) {
    font-size: 15px;
    text-align: center;
    padding-bottom: 20px;
  }
`;

const Logos = styled.img`
  height: auto;
  width: 100%;
  @media (${breakpoint.mobile}) {
    width: 60px;
  }
`;

const LogoHolder = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  align-items: center;
  justify-content: center;
  @media (${breakpoint.mobile}) {
    gap: 10px;
    margin-top: 20px;
  }
`;

const AdvantageHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 30px;
  align-items: stretch;
  justify-content: center;

  @media (${breakpoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const HugeIcon = styled.div`
  background: #0389ff;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  mask: url(${(props) =>
    common.imageUrl + "about/benefit/" + props.src + ".svg"});
  mask-size: 80%;
  mask-repeat: no-repeat;
  mask-position: center;

  @media (${breakpoint.mobile}) {
    width: 80px;
    height: 80px;
  }

  transition: background 0.3s ease-in-out;
`;

const BenefitContainer = styled.div`
  :hover {
    box-shadow: 8px 8px 0 0 #00378a;

    ${HugeIcon} {
      background: #0064fc;
    }
  }
  background: rgb(0, 40, 100);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 40px 30px;
  margin-top: 80px;
  @media (${breakpoint.mobile}) {
    margin-top: 10px;
    padding: 20px 10px;
  }

  transition: box-shadow 0.3s ease-in-out;
`;

const AdvantageTitle = styled.div`
  font-size: 30px;
  text-align: center;
  @media (${breakpoint.mobile}) {
    font-size: 20px;
  }
`;

const AdvantageDescription = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 20px;
  letter-spacing: 1.25px;

  @media (${breakpoint.mobile}) {
    font-size: 12px;
  }
`;

const AnotherSubtitle = styled.div`
  color: rgb(3, 137, 255);
  text-transform: uppercase;
`;

const Advantages = () => {
  const Benefits = ({ data, item }) => {
    return (
      <BenefitContainer>
        <HugeIcon src={data.icon} />
        <AdvantageTitle>
          {i18n.t("about.section.4.advantage." + item + ".title")}
        </AdvantageTitle>
        <AdvantageDescription>
          {i18n.t("about.section.4.advantage." + item + ".description")}
        </AdvantageDescription>
      </BenefitContainer>
    );
  };
  return (
    <div>
      <TitleContainer>
        <AnotherSubtitle>Advantage</AnotherSubtitle>
        <Title> {i18n.t("about.section.4.title")}</Title>
        <Subtitle> {i18n.t("about.section.4.description")}</Subtitle>
      </TitleContainer>
      <AdvantageHolder>
        {hardcoded.benefits.map((data, index) => {
          return <Benefits data={data} key={index} item={index + 1} />;
        })}
      </AdvantageHolder>
    </div>
  );
};

const Partners = () => {
  return (
    <div>
      <TitleContainer>
        <Title> {i18n.t("about.section.4.partner")}</Title>
        <LogoHolder>
          {hardcoded.brands
            .filter((data) => {
              return data.name !== "tcg_sea" && data.name !== "tcg_lotto";
            })

            .map((data, index) => {
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
  const [screenWidth, setScreenWidth] = React.useState(1024);
  React.useEffect(() => {
    //keep listen to window size
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  const device = screenWidth < 600 ? "-mb" : "";

  return (
    <Page background={common.imageUrl + "/about/sc4" + device + ".jpg"}>
      <Contents>
        <Advantages />
        <Partners />
      </Contents>
    </Page>
  );
};

export default AdvantageAndPartner;

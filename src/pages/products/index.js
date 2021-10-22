import AppBar from "../../component/appbar";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Section from "../../component/section";
import Image from "../../component/image";
import i18n from "../../config/i18n";

var path = process.env.PUBLIC_URL + "/assets/images";

const BannerText = styled.div`
  color: white;
  padding: 10px 0px;
`;

const Title = styled(BannerText)`
  font-size: 30px;
  text-align: center;
`;

const Description = styled(BannerText)`
  width: 650px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 50% 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContentTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LeftContent = styled(ContentTextContainer)`
  text-align: left;
  padding-left: 200px;
  @media (max-width: 600px) {
    padding-left: 20px;
  }
`;

const RightContent = styled(ContentTextContainer)`
  text-align: left;
  padding-left: 200px;
  @media (max-width: 600px) {
    padding-left: 20px;
  }
`;

const ContentTextTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  width: 100%;
`;

const ContentTitlePoints = styled.div`
  width: 100%;
`;

const Liner = styled.div`
  width: 100%;
  height: 200px;
  background: url(${path + "/products/liner.jpg"}) center no-repeat, #161616;
  background-size: contain;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  letter-spacing: 5px;
`;
const Products = () => {
  return (
    <Page>
      <Banner
        background="banner/products.jpg"
        gradient="rgb(0,0,0,0.3), rgb(0,0,0,0.3)"
      >
        <Title>{i18n.t("product.title")}</Title>
        <Description>{i18n.t("product.description")}</Description>
      </Banner>
      <Section>
        <Content>
          <Image p="50px" src="/products/1.jpg" wap_p="10px" />
          <LeftContent>
            <ContentTextTitle>{i18n.t("product.1.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("product.1.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.1.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.1.point3")}
            </ContentTitlePoints>
          </LeftContent>
        </Content>
        <Content>
          <RightContent>
            <ContentTextTitle>{i18n.t("product.2.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("product.2.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.2.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.2.point3")}
            </ContentTitlePoints>
          </RightContent>
          <Image p="50px" src="/products/2.jpg" wap_p="10px" />
        </Content>
        <Content>
          <Image p="50px" src="/products/3.jpg" wap_p="10px" />
          <LeftContent>
            <ContentTextTitle>{i18n.t("product.3.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("product.3.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.3.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.3.point3")}
            </ContentTitlePoints>
          </LeftContent>
        </Content>
        <Content>
          <RightContent>
            <ContentTextTitle>{i18n.t("product.4.title")}</ContentTextTitle>
            <ContentTitlePoints>
              ◼ {i18n.t("product.4.point1")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.4.point2")}
            </ContentTitlePoints>
            <ContentTitlePoints>
              ◼ {i18n.t("product.4.point3")}
            </ContentTitlePoints>
          </RightContent>
          <Image p="50px" src="/products/4.jpg" wap_p="10px" />
        </Content>
      </Section>
      <Liner>{i18n.t("product.last")}</Liner>
    </Page>
  );
};

export default Products;

import AppBar from "../../component/appbar";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Section from "../../component/section";
import Image from "../../component/image";

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
`;

const Content = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 50% 50%;
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
`;

const RightContent = styled(ContentTextContainer)`
  text-align: left;
  padding-left: 200px;
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
        <Title>
          五分钟火速开站 <br />
          尊享品牌订制服务
        </Title>
        <Description>
          专属顾问免费在线咨询，即刻打造专属于您的在线娱乐平台！一条龙式的快速建站服务，全面支持PC/移动端全渠道开站、品牌运营、游戏介接、数据管理、营销推广等强大功能，技术团队24小时全年在线支持，为您的事业保驾护航！
        </Description>
      </Banner>
      <Section>
        <Content>
          <Image p="50px" src="/products/1.jpg" wap_p="10px" />
          <LeftContent>
            <ContentTextTitle>海量精美模板</ContentTextTitle>
            <ContentTitlePoints>◼ 多款独家精美模板</ContentTitlePoints>
            <ContentTitlePoints>◼ 专业客制化网页设计</ContentTitlePoints>
            <ContentTitlePoints>◼ 打造专属品牌形象</ContentTitlePoints>
          </LeftContent>
        </Content>
        <Content>
          <RightContent>
            <ContentTextTitle>千款精彩游戏</ContentTextTitle>
            <ContentTitlePoints>◼ 汇集全球知名游戏</ContentTitlePoints>
            <ContentTitlePoints>◼ 多种精彩特色玩法</ContentTitlePoints>
            <ContentTitlePoints>◼ 自由组合随心搭配</ContentTitlePoints>
          </RightContent>
          <Image p="50px" src="/products/2.jpg" wap_p="10px" />
        </Content>
        <Content>
          <Image p="50px" src="/products/3.jpg" wap_p="10px" />
          <LeftContent>
            <ContentTextTitle>智能数据管理</ContentTextTitle>
            <ContentTitlePoints>◼ 单一后台多站管理</ContentTitlePoints>
            <ContentTitlePoints>◼ 大数据报表分析</ContentTitlePoints>
            <ContentTitlePoints>◼ 智能CRM玩家追踪</ContentTitlePoints>
          </LeftContent>
        </Content>
        <Content>
          <RightContent>
            <ContentTextTitle>高效营销推广</ContentTextTitle>
            <ContentTitlePoints>◼ VIP会员分级管理</ContentTitlePoints>
            <ContentTitlePoints>◼ 全民代理无限推广</ContentTitlePoints>
            <ContentTitlePoints>◼ 自定义优惠活动</ContentTitlePoints>
          </RightContent>
          <Image p="50px" src="/products/4.jpg" wap_p="10px" />
        </Content>
      </Section>
      <Liner>开创未来 由您开始</Liner>
    </Page>
  );
};

export default Products;

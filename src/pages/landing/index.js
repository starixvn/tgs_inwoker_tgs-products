import AppBar from "../../component/appbar";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Section from "../../component/section";

const BannerText = styled.div`
  color: white;
  padding: 10px 0px;
`;

const Title = styled(BannerText)`
  font-size: 30px;
`;

const Description = styled(BannerText)`
  width: 650px;
`;

const Landing = () => {
  return (
    <Page>
      <Banner
        background="banner/landing.jpg"
        gradient="rgb(0,0,0,0.3), rgb(0,0,0,0.3)"
      >
        <Title>一站式包网系统 定义全球新未来</Title>
        <Description>
          PG系统是亚洲地区最受欢迎的全方位游戏包网系统，由经验丰富的顶尖研发团队潜心打造，致力于为客户提供最强大、最完善的在线娱乐产品及客制化整合服务；精准掌握市场趋势，用实力创造无限盈利，与您共创事业极致巅峰！
        </Description>
      </Banner>
      <Section>
        <div>123</div>
      </Section>
    </Page>
  );
};

export default Landing;

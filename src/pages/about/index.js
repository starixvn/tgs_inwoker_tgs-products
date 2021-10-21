import React from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";

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

const ContentTextTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  width: 100%;
`;

const ContentTitlePoints = styled.div`
  width: 100%;
`;

const MoveLeftImage = styled.img`
  height: 500px;
  transition: margin 1s;
  :hover {
  }
`;

const MoveRightImage = styled.img`
  height: 500px;
  transition: margin 1s;
  :hover {
    margin-right: -100px;
  }
`;

const RightImage = styled.div`
  height: 500px;
  transition: margin 1s;
  width: 1000px;
  background: url(${({ src }) => src}) center no-repeat;
`;

const LastRightImage = styled.div`
  position: absolute;
  right: 0;
`;

const Container = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  position: relative;
`;

const FloatOnTop = styled.div`
  color: white;
  position: absolute;
  margin-left: 20%;
  opacity: 0;
`;

const FloatOnTopThree = styled.div`
  position: absolute;
  right: 20%;
  color: white;
  opacity: 0;
`;

const LeftImage = styled.div`
  height: 500px;
  transition: margin 1s;
  width: 1000px;
  background: url(${({ src }) => src}) center no-repeat;
`;

const FloatOnTopTwo = styled.div`
  color: black;
  margin-right: 20%;
  opacity: 0;
`;

const LeftContainer = styled(Container)`
  :hover {
    ${LeftImage} {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url(${({ src }) => src}) center no-repeat;
    }

    ${MoveLeftImage} {
      margin-left: -100px;
    }
    ${FloatOnTop} {
      opacity: 1;
      transition: opacity 1s;
    }
    ${FloatOnTopTwo} {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;

const FloatOnLeft = styled.div`
  margin-left: 20%;
  opacity: 0;
`;

const RightContainer = styled(Container)`
  :hover {
    ${LeftImage} {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url(${({ src }) => src}) center no-repeat;
    }
    ${FloatOnLeft} {
      opacity: 1;
      transition: opacity 3s;
    }
  }
`;

const AnotherRightContainer = styled(RightContainer)`
  justify-content: flex-end;
  :hover {
    ${RightImage} {
      background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
        url(${({ src }) => src}) center no-repeat;
    }
    ${FloatOnTopThree} {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;

var path = process.env.PUBLIC_URL + "/assets/images";

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Content = styled.div``;
const About = () => {
  return (
    <Page>
      <Content>
        <Banner
          background="banner/about.jpg"
          gradient="rgb(0,0,0,0.5), rgb(0,0,0,0.5)"
        >
          <Title>
            亚洲最强博娱包网系统 <br />
            引领业界新风暴
          </Title>
          <Description>
            PegaGaming(PG)自成立以来，始终坚持创新与服务，汇聚所有业界顶尖的技术、营销、美术、运维人才，并且积极与全球大型博彩集团建立战略合作伙伴关系，成功开拓亚洲市场，不断创下行业新纪录，致力为客户量身打造出最稳定、最优秀的博娱互联网产品。
          </Description>
        </Banner>
        <Wrapper>
          <LeftContainer src={path + "/about/1.png"}>
            <LeftImage src={path + "/about/1.png"} />
            <FloatOnTop>
              <ContentTextTitle>自主研发系统</ContentTextTitle>
              <ContentTitlePoints>◼ 全球独步开发GMS系统</ContentTitlePoints>
              <ContentTitlePoints>
                ◼ 一站管理资金/客服/玩家/代理/团队
              </ContentTitlePoints>
              <ContentTitlePoints>◼ 实时数据自动生成报表</ContentTitlePoints>
            </FloatOnTop>
          </LeftContainer>
          <RightContainer>
            <FloatOnLeft>
              <ContentTextTitle>高效防御机制</ContentTextTitle>
              <ContentTitlePoints>◼ WAF防护拦截恶意入侵</ContentTitlePoints>
              <ContentTitlePoints>◼ CDN实时信息安全防护</ContentTitlePoints>
              <ContentTitlePoints>
                ◼ 企业级多层次防御架构
              </ContentTitlePoints>{" "}
            </FloatOnLeft>
            <MoveRightImage src={path + "/about/2.png"} />
          </RightContainer>
          <LeftContainer>
            <MoveLeftImage src={path + "/about/3.png"} />
            <FloatOnTopTwo>
              <ContentTextTitle>极速流畅线路</ContentTextTitle>
              <ContentTitlePoints>
                ◼ 配备全球顶尖服务器和云端技术
              </ContentTitlePoints>
              <ContentTitlePoints>◼ 国际线路备援机制</ContentTitlePoints>
              <ContentTitlePoints>◼ SSL传输保密技术</ContentTitlePoints>
            </FloatOnTopTwo>
          </LeftContainer>
          <AnotherRightContainer src={path + "/about/4.png"}>
            <FloatOnTopThree>
              <ContentTextTitle>在线技术支持</ContentTextTitle>
              <ContentTitlePoints>◼ 24x7x365技术在线支持</ContentTitlePoints>
              <ContentTitlePoints>◼ 快速响应客户需求</ContentTitlePoints>
              <ContentTitlePoints>◼ 定期升级优化系统</ContentTitlePoints>
            </FloatOnTopThree>
            <RightImage src={path + "/about/4.png"} />
          </AnotherRightContainer>
        </Wrapper>
      </Content>
    </Page>
  );
};

export default About;

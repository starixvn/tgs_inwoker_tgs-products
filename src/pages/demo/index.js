import React from "react";
import styled from "styled-components";
import Footer from "../../component/footer";
import Page from "../../component/page";
import breakpoint from "../../config/breakpoints";
import i18n from "../../config/i18n";
import { common } from "../../utils/common";
import { hardcoded } from "../../utils/hardcode";

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.totalPerRow}, 1fr);
  gap: 20px;
  padding: 20px;
`;

const CustomButton = styled.div`
  color: white;
  border-radius: 8px;
  padding: 10px 30px;
  margin: 0px 10px;
  cursor: pointer;
  ${({ selected }) => {
    return selected
      ? `
    background: #2092FF;
    `
      : `
    background: #707070;
    
    `;
  }}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TheImage = styled.img`
  width: 100%;
`;

const TheSquare = styled.div`
  color: #fff;
  height: 150px;
  width: 150px;
  border: solid 8px #fff;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
  justify-content: center;

  @media (${breakpoint.mobile}) {
    width: 75px;
    height: 75px;
  }
`;

const Overlay = styled.div`
  background: rgba(3, 137, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s;

 
  :hover {
    opacity: 1;
    ${TheSquare} {
     animation: breathing 0.75s infinite;
     @keyframes breathing {
       0% {
         transform: scale(1);
         box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
       }
       70% {
         transform: scale(1.025);
         box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
       }
       100% {
         transform: scale(1);
         box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
       }
    }
  }

  cursor: pointer;
`;
const TitleHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  line-height: 0.85;
  padding-top: 100px;
  padding-bottom: 50px;

  color: #fff;
`;

const Title = styled.div`
  font-size: 3.4rem;
`;

const Subtittle = styled.div`
  font-weight: bold;
  color: #00a8ff;
  font-size: 30px;
  @media (${breakpoint.mobile}) {
  }
`;

const Description = styled.div`
  text-align: center;
  @media (${breakpoint.mobile}) {
    padding: 0 40px;
    line-height: 1.5;
  }
`;

const Products = ({ data, onClick }) => {
  return (
    <>
      <ProductContainer>
        <Overlay>
          <TheSquare onClick={onClick}>{data.title}</TheSquare>
        </Overlay>
        <TheImage src={common.imageUrl + data.image} alt={data.title} />
      </ProductContainer>
    </>
  );
};

const Demo = () => {
  const [project, setProject] = React.useState("web");

  function gotoPage(link) {
    window.open(link);
  }

  return (
    <>
      <Page background={common.imageUrl + "/demo/web-bg.jpg"}>
        <TitleHolder>
          <Subtittle>FRONT END</Subtittle>
          <Title>平台展示</Title>
          <Description>
            多種模板可以選，并且能依顧客需求客制化，所有版型都符合HTML5
          </Description>
        </TitleHolder>
        <ButtonWrapper>
          <CustomButton
            selected={project === "web"}
            onClick={() => {
              setProject("web");
            }}
          >
            {i18n.t("demo.version.web")}
          </CustomButton>
          <CustomButton
            selected={project === "wap"}
            onClick={() => {
              setProject("wap");
            }}
          >
            {i18n.t("demo.version.wap")}
          </CustomButton>
        </ButtonWrapper>
        {project === "web" && (
          <Contents totalPerRow={2}>
            {hardcoded.demoWeb.map((item) => {
              return <Products data={item} />;
            })}
          </Contents>
        )}
        {project === "wap" && (
          <Contents totalPerRow={3}>
            {hardcoded.demoWap.map((item) => {
              return (
                <Products
                  data={item}
                  onClick={() => {
                    gotoPage(item.link);
                  }}
                />
              );
            })}
          </Contents>
        )}
      </Page>
      <Footer />
    </>
  );
};

export default Demo;

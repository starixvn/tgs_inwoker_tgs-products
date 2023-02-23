import React from "react";
import styled from "styled-components";
import Page from "../../component/page";
import i18n from "../../config/i18n";
import { common } from "../../utils/common";

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.totalPerRow}, 1fr);
  gap: 20px;
`;

const CustomButton = styled.div`
  color: white;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 0px 10px;
  cursor: pointer;
  ${({ selected }) => {
    return selected
      ? `
    background: #2092FF;
    `
      : `
    background: #D5D5D5;
    
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

  const webProject = [
    { image: "/demo/web/t1.jpg", title: "T1", link: "https://t1.srvptt.com/" },
    { image: "/demo/web/t2.jpg", title: "T2", link: "https://t2.srvptt.com/" },
    { image: "/demo/web/t3.jpg", title: "T3", link: "https://t3.srvptt.com/" },
    { image: "/demo/web/t4.jpg", title: "T4", link: "https://t4.srvptt.com/" },
    { image: "/demo/web/t5.jpg", title: "T5", link: "https://t5.srvptt.com/" },
    { image: "/demo/web/t8.jpg", title: "T8", link: "https://t5.srvptt.com/" },
    { image: "/demo/web/t9.jpg", title: "T9", link: "https://t5.srvptt.com/" },
    {
      image: "/demo/web/t11.jpg",
      title: "T11",
      link: "https://t5.srvptt.com/",
    },
    {
      image: "/demo/web/t13.jpg",
      title: "T13",
      link: "https://t5.srvptt.com/",
    },
    {
      image: "/demo/web/bunny.jpg",
      title: "BUNNY",
      link: "https://t5.srvptt.com/",
    },
  ];

  const wapProject = [
    { image: "/demo/wap/t1.jpg", title: "T1", link: "https://t1.srvptt.com/" },
    { image: "/demo/wap/t2.jpg", title: "T2", link: "https://t2.srvptt.com/" },
    {
      image: "/demo/wap/t2-1.jpg",
      title: "T2-1",
      link: "https://t2.srvptt.com/",
    },
    {
      image: "/demo/wap/t2-2.jpg",
      title: "T2=2",
      link: "https://t2.srvptt.com/",
    },
    { image: "/demo/wap/t3.jpg", title: "T3", link: "https://t3.srvptt.com/" },
    { image: "/demo/wap/t4.jpg", title: "T4", link: "https://t4.srvptt.com/" },
    { image: "/demo/wap/t5.jpg", title: "T5", link: "https://t5.srvptt.com/" },
    { image: "/demo/wap/t6.jpg", title: "T6", link: "https://t3.srvptt.com/" },
    { image: "/demo/wap/t7.jpg", title: "T7", link: "https://t4.srvptt.com/" },
    { image: "/demo/wap/t8.jpg", title: "T8", link: "https://t5.srvptt.com/" },
    { image: "/demo/wap/t9.jpg", title: "T9", link: "https://t5.srvptt.com/" },
    {
      image: "/demo/wap/t10.jpg",
      title: "T10",
      link: "https://t5.srvptt.com/",
    },
    {
      image: "/demo/wap/t11.jpg",
      title: "T11",
      link: "https://t5.srvptt.com/",
    },
    {
      image: "/demo/wap/t13.jpg",
      title: "T13",
      link: "https://t5.srvptt.com/",
    },
  ];

  function gotoPage(link) {
    window.open(link);
  }

  return (
    <Page background={common.imageUrl + "/demo/web-bg.jpg"}>
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
          {webProject.map((item) => {
            return <Products data={item} />;
          })}
        </Contents>
      )}
      {project === "wap" && (
        <Contents totalPerRow={3}>
          {wapProject.map((item) => {
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
  );
};

export default Demo;

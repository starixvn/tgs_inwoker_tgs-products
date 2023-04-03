import React from "react";
import styled from "styled-components";
import AppBar from "../../component/appbar";
import Footer from "../../component/footer";
import Page from "../../component/page";
import breakpoint from "../../config/breakpoints";
import i18n from "../../config/i18n";
import { common } from "../../utils/common";
import { hardcoded } from "../../utils/hardcode";
import ImageViewer from "../../component/imageviewer";

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (${breakpoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
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
  padding: 20px 0px;

  @media (${breakpoint.mobile}) {
    padding: 20px 0px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TheImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: top;

  @media (${breakpoint.mobile}) {
    height: 100px;
  }
`;

const TheImageWap = styled.img`
  width: 100%;
`;

const TheSquare = styled.div`
  color: #fff;
  height: 100%;
  width: 100%;
  border: solid 8px #fff;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
  justify-content: center;

  @media (${breakpoint.mobile}) {
    font-size: 1.5rem;
  }
`;

const TitleHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  line-height: 0.85;
  padding-top: 100px;
  padding-bottom: 0px;

  color: #fff;

  @media (${breakpoint.mobile}) {
    padding-top: 0px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Subtittle = styled.div`
  font-weight: bold;
  color: #00a8ff;
  font-size: 20px;
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

const TheTitle = styled.div`
  color: #fff;
  with: 100%;
  text-align: center;
  padding: 20px;

  @media (${breakpoint.mobile}) {
    display: none;
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

  padding: 50px;

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
  }

  cursor: pointer;

  @media (${breakpoint.mobile}) {
    padding: 10px;
  }
`;

const EntireShitWrapper = styled.div`
  :hover {
    ${TheTitle} {
      background: #00a8ff;
      border-radius: 0px 0px 20px 20px;
    }
  }
`;

const Products = ({ data, onClick, variant }) => {
  return (
    <EntireShitWrapper>
      <ProductContainer>
        <Overlay>
          <TheSquare onClick={onClick}>DEMO</TheSquare>
        </Overlay>
        {variant === "web" ? (
          <TheImage src={common.imageUrl + data.image} alt={data.title} />
        ) : (
          <TheImageWap src={common.imageUrl + data.image} alt={data.title} />
        )}
      </ProductContainer>
      <TheTitle>{data.title} </TheTitle>
    </EntireShitWrapper>
  );
};

const Demo = () => {
  const [project, setProject] = React.useState("web");
  const [openViewer, setOpenViewer] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [data, setData] = React.useState([]);

  function openImage(image, data) {
    setOpenViewer(true);
    setImage(image);
    setData(data);
  }

  function closeImage() {
    setOpenViewer(false);
  }

  function nextImage() {
    const index = data.findIndex((item) => item.image === image);
    if (index === data.length - 1) {
      setImage(data[0].image);
    } else {
      setImage(data[index + 1].image);
    }
  }

  function prevImage() {
    const index = data.findIndex((item) => item.image === image);
    if (index === 0) {
      setImage(data[data.length - 1].image);
    } else {
      setImage(data[index - 1].image);
    }
  }

  return (
    <>
      <AppBar />
      <Page
        background={common.imageUrl + "/demo/web-bg.jpg"}
        style={{ paddingBottom: 0 }}
      >
        <TitleHolder>
          <Subtittle>FRONT END</Subtittle>
          <Title>{i18n.t("demo.title")}</Title>
          <Description>{i18n.t("demo.description")}</Description>
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
          <Contents>
            {hardcoded.demoWeb.map((item) => {
              return (
                <Products
                  data={item}
                  variant={"web"}
                  onClick={() => {
                    openImage(item.image, hardcoded.demoWeb);
                  }}
                />
              );
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
                    openImage(item.image, hardcoded.demoWap);
                  }}
                />
              );
            })}
          </Contents>
        )}
      </Page>
      <Footer />{" "}
      <ImageViewer
        open={openViewer}
        handleClose={closeImage}
        image={image}
        handleNext={nextImage}
        handlePrevious={prevImage}
      />
    </>
  );
};

export default Demo;

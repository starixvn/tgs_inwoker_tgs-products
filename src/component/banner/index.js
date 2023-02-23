import React from "react";
import styled, { keyframes } from "styled-components";
import breakpoint from "../../config/breakpoints";
import { common } from "../../utils/common";

const FadeInAnimation = keyframes`0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;

const BannerContainer = styled.div`
height: 100vh;
width: 100%;
  background:${({ gradient, background }) => {
    return background
      ? `linear-gradient(${gradient}), url(${
          common.imageUrl + background
        }) center no-repeat;`
      : "#212121;";
  }}
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  transition: background 0.75s;
 

`;

const BannerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation-name: ${FadeInAnimation};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  @media (${breakpoint.mobile}) {
    width: calc(100% - 40px);
    padding: 20px;
    text-align: center;
  }
`;

const BannerText = styled.div`
  color: white;
  padding: 10px 0px;
  width: 50%;
  text-align: center;
  @media (${breakpoint.mobile}) {
    width: calc(100% - 40px);
  }
`;

const Title = styled(BannerText)`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Description = styled(BannerText)`
  font-size: 20px;
`;

const Banner = (props) => {
  return (
    <BannerContainer background={props.background} gradient={props.gradient}>
      <BannerContent>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

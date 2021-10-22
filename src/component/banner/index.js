import React from "react";
import styled from "styled-components";

var path = process.env.PUBLIC_URL + "/assets/images/";

const BannerContainer = styled.div`
height: 100vh;
width: 100%;
  background:${({ gradient, background }) => {
    return background
      ? `linear-gradient(${gradient}), url(${
          path + background
        }) center no-repeat;`
      : "#212121;";
  }}
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BannerContent = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Banner = (props) => {
  return (
    <BannerContainer background={props.background} gradient={props.gradient}>
      <BannerContent>{props.children}</BannerContent>
    </BannerContainer>
  );
};

export default Banner;

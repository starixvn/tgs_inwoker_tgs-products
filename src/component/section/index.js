import React from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";

const BannerContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BannerContent = styled.div`
  width: 1280px;
  @media (${breakpoint.mobile}) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Section = (props) => {
  return (
    <BannerContainer>
      <BannerContent>{props.children}</BannerContent>
    </BannerContainer>
  );
};

export default Section;

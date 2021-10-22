import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BannerContent = styled.div`
  width: 1280px;
`;

const Section = (props) => {
  return (
    <BannerContainer>
      <BannerContent>{props.children}</BannerContent>
    </BannerContainer>
  );
};

export default Section;

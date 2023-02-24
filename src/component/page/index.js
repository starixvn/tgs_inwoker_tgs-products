import React from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";

const PageWrapper = styled.div`
  z-index: 1;
  position: relative;
  padding: 100px 0;
  display: flex;
  justify-content: center;

  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  background: ${({ background }) => {
    return `url(${background}) top no-repeat;`;
  }};
  background-size: cover;

  @media (${breakpoint.mobile}) {
    padding: 60px 0px;
  }
`;

const WorkableArea = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const Page = (props) => {
  return (
    <PageWrapper background={props.background} style={props.style}>
      <WorkableArea>{props.children}</WorkableArea>
    </PageWrapper>
  );
};

export default Page;

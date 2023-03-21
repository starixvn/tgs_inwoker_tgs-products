import React from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";

const PageWrapper = styled.div`
  z-index: 1;
  position: relative;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;

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
  margin-bottom: -1px;

  @media (${breakpoint.mobile}) {
    margin-top: -1px;
    max-width: 100vw;
  }
`;

const WorkableArea = styled.div`
  width: 1280px;
  @media (${breakpoint.mobile}) {
    width: 100vw;
    max-width: 100vw;
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

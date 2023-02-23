import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  z-index: 1;
  position: relative;
  padding: 100px 0;
  display: flex;
  justify-content: center;

  background: ${({ background }) => {
    return `url(${background}) top no-repeat;`;
  }};
  background-size: cover;
`;

const WorkableArea = styled.div`
  width: 1280px;
`;
const Page = (props) => {
  return (
    <PageWrapper background={props.background} style={props.style}>
      <WorkableArea>{props.children}</WorkableArea>
    </PageWrapper>
  );
};

export default Page;

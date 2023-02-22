import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  z-index: 1;
  position: relative;
`;

const Page = (props) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

export default Page;

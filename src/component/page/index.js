import React from "react";
import AppBar from "../appbar";
import styled from "styled-components";

const PageWrapper = styled.div``;

const Page = (props) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

export default Page;

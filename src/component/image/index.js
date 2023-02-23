import React from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";
import { common } from "../../utils/common";

const ImageContainer = styled.div`
  padding: ${({ padding }) => {
    return padding ? padding : "";
  }};
  height: ${({ height }) => {
    return height ? height : "auto";
  }};
  width: ${({ width }) => {
    return width ? width : "auto";
  }};

  ${({ grayscale }) => {
    return (
      grayscale &&
      `
    
    filter: grayscale(100%);
    transition: transform 1s;
    :hover{
      filter: grayscale(0%);
       transform: scale(1.1);
       
       cursor: pointer; 
    }
    `
    );
  }}

  @media (${breakpoint.mobile}) {
    padding: ${({ wapPadding }) => {
      return wapPadding ? wapPadding : "0";
    }};
  }
`;

const ImageComponent = styled.img`
  width: 100%;
  height: 100%;
`;
const Image = ({ src, p, h, w, wap_p, grayscale }) => {
  return (
    <ImageContainer
      padding={p}
      height={h}
      width={w}
      wapPadding={wap_p}
      grayscale={grayscale}
    >
      <ImageComponent src={common.imageUrl + src} />
    </ImageContainer>
  );
};

export default Image;

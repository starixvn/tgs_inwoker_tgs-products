import React from "react";
import styled from "styled-components";

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

  @media (max-width: 600px) {
    padding: ${({ wapPadding }) => {
      return wapPadding ? wapPadding : "0";
    }};
  }
`;

const ImageComponent = styled.img`
  width: 100%;
  height: 100%;
`;
const Image = ({ src, p, h, w, wap_p }) => {
  var path = process.env.PUBLIC_URL + "/assets/images";
  return (
    <ImageContainer padding={p} height={h} width={w} wapPadding={wap_p}>
      <ImageComponent src={path + src} />
    </ImageContainer>
  );
};

export default Image;

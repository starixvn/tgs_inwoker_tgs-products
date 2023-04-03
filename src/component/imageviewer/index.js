import React, { useState } from "react";
import styled from "styled-components";
import { common } from "../../utils/common";
import breakpoint from "../../config/breakpoints";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;

  display: ${({ open }) => (open ? "block" : "none")};
`;

const CloseButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 40px;
  cursor: pointer;
  @media (${breakpoint.mobile}) {
    top: 5px;
    right: 20px;
    font-size: 30px;
  }
`;

const Content = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  gap: 20px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4d4e52;
  border-radius: 50px;
  font-size: 40px;
  cursor: pointer;
  span {
    margin-top: -10px;
  }
`;

const ImageViewer = ({
  open,
  image,
  handleNext,
  handlePrevious,
  handleClose,
}) => {
  return (
    <Overlay open={open}>
      <CloseButton
        onClick={() => {
          handleClose();
        }}
      >
        ✖
      </CloseButton>
      <Content>
        <Button
          onClick={() => {
            handlePrevious();
          }}
        >
          <span>‹</span>
        </Button>
        <Image src={common.imageUrl + image} alt={image} />
        <Button
          onClick={() => {
            handleNext();
          }}
        >
          <span>›</span>
        </Button>
      </Content>
    </Overlay>
  );
};

export default ImageViewer;

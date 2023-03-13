import React from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${({ open }) => {
    return open ? "flex" : "none";
  }};
  justify-content: center;
  align-items: center;
`;

const TheModal = styled.div`
  background: white;
  border-radius: 15px;
  width: 25%;
  min-height: 40%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (${breakpoint.mobile}) {
    width: 80%;
    z-index: 100;
  }
`;

const TheModalTitle = styled.div`
  background: #0389ff;
  color: white;
  border-radius: 15px 15px 0 0;
  padding: 10px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;

const Modal = ({ open, closeModal, title, children }) => {
  return (
    <ModalOverlay
      open={open}
      onClick={() => {
        closeModal();
      }}
    >
      <TheModal>
        <TheModalTitle>
          {title}
          <CloseButton
            onClick={() => {
              closeModal();
            }}
          >
            ✖
          </CloseButton>
        </TheModalTitle>
        <div>{children}</div>
      </TheModal>
    </ModalOverlay>
  );
};

export default Modal;

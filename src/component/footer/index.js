import React from "react";
import styled, { keyframes } from "styled-components";
import breakpoint from "../../config/breakpoints";
import Image from "../image";

const FooterContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  background: #030303;
`;

const FooterContent = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (${breakpoint.mobile}) {
    width: 100%;
  }
`;
const FlipWithScale = keyframes`
  0% {
    transform: perspective(400px) scaleX(1);
  }

  100% {
    transform: perspective(400px) scaleX(-1);
 }
 `;
const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const FooterIcon = styled.div`
  padding: 10px;
  @media (${breakpoint.mobile}) {
    padding: 0px;
    transform: scale(0.5);
  }

  :hover {
    animation-name: ${FlipWithScale};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    animation-duration: 0.25s;
    cursor: pointer;
  }
`;

const FooterText = styled.div`
  @media (${breakpoint.mobile}) {
    font-size: 0.8rem;
    text-align: center;
    //line break
    word-break: break-all;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterIconContainer>
          <FooterIcon>
            <Image src="/footer/white-1.png" h="50px" w="50px" />
          </FooterIcon>
          <FooterIcon>
            <Image src="/footer/white-2.png" h="50px" w="50px" />
          </FooterIcon>
          <FooterIcon>
            <Image src="/footer/white-3.png" h="50px" w="50px" />
          </FooterIcon>
          <FooterIcon>
            <Image src="/footer/white-4.png" h="50px" w="50px" />
          </FooterIcon>
        </FooterIconContainer>
        <FooterText>
          Copyright©2021 PG GAMING Solution Inc. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

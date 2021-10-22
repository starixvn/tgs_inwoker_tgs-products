import React from "react";
import styled from "styled-components";
import Image from "../image";

const FooterContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #686868;
`;

const FooterContent = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FooterIcon = styled.div`
  padding: 10px;
  @media (max-width: 600px) {
    padding: 0px;
    transform: scale(0.5);
  }
`;
const FooterText = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterIconContainer>
          <FooterIcon>
            <Image src="/footer/dark-1.png" />
          </FooterIcon>
          <FooterIcon>
            <Image src="/footer/dark-2.png" />
          </FooterIcon>
          <FooterIcon>
            <Image src="/footer/dark-3.png" />
          </FooterIcon>
          <FooterIcon>
            <Image src="/footer/dark-4.png" />
          </FooterIcon>
        </FooterIconContainer>
        <FooterText>Copyright (c) 2018 TC Gaming Solutions Inc.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

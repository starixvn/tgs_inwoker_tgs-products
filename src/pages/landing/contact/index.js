import React from "react";
import styled from "styled-components";
import Image from "../../../component/image";
import breakpoint from "../../../config/breakpoints";
import i18n from "../../../config/i18n";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleThingy = styled.div`
  position: absolute;
  color: white;

  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (${breakpoint.mobile}) {
    height: 100%;
    width: 100%;
    background: transparent;
  }
`;

const ContactTitle = styled.div`
  font-size: 50px;
`;

const ContactButton = styled.div`
  margin-top: 50px;
  padding: 10px 20px;
  border: solid 3px #fff;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #2f94ee;
    font-weight: bold;
  }

  @media (${breakpoint.mobile}) {
    margin-top: 20px;
  }
`;
const Contact = () => {
  return (
    <Wrapper>
      <Image src="/landing/contact/background.jpg" />
      <MiddleThingy>
        <ContactTitle>{i18n.t("landing.contact.title")}</ContactTitle>
        <ContactButton>{i18n.t("landing.contact.button")}</ContactButton>
      </MiddleThingy>
    </Wrapper>
  );
};

export default Contact;

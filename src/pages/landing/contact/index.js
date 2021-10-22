import React from "react";
import styled from "styled-components";
import Image from "../../../component/image";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleThingy = styled.div`
  position: absolute;
  color: white;
  background: #2f94ee;
  height: 30%;
  width: 50%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContactTitle = styled.div`
  font-size: 30px;
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
`;
const Contact = () => {
  return (
    <Wrapper>
      <Image src="/landing/contact/background.jpg" />
      <MiddleThingy>
        <ContactTitle>最全面的包往方案</ContactTitle>
        <ContactButton>联系我们</ContactButton>
      </MiddleThingy>
    </Wrapper>
  );
};

export default Contact;

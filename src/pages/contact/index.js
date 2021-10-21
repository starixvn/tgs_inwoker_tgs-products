import React from "react";
import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";
import Image from "../../component/image";
import Modal from "../../component/modal";
import { useState } from "react/cjs/react.development";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActualContent = styled.div`
  margin-top: -150px;
  display: grid;
  width: 1280px;
  grid-template-columns: 25% 25% 25% 25%;
`;

const TheCardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-align: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;
`;

const TheCardContent = styled.div`
  background: white;
  padding: 40px 0px;
  border-radius: 15px;
  width: 100%;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
`;
const Username = styled.div``;

const BannerTitle = styled.div`
  font-size: 30px;
  color: white;
`;

const Contact = () => {
  const CSLists = [
    { name: "Skype", username: "@PGGAME" },
    { name: "WeChat", username: "@PGGAME" },
    { name: "WhatsApp", username: "@PGGAME" },
    { name: "Telegram", username: "@PGGAME" },
    { name: "KakaoTalk", username: "@PGGAME" },
    { name: "Viber", username: "@PGGAME" },
    { name: "LINE", username: "@PGGAME" },
  ];

  const [selected, setSelected] = useState("");

  function closeModal() {
    setSelected("");
  }
  function performOpen(name) {
    setSelected(name);
  }
  return (
    <Page>
      <Content>
        <Banner
          background="banner/contact.jpg"
          gradient="rgb(255,255,255,0.1), rgb(255,255,255,0.1)"
        >
          <BannerTitle>免费咨询</BannerTitle>
        </Banner>
        <ActualContent>
          {CSLists.map((data, index) => {
            return (
              <div>
                <TheCardContainer
                  key={index}
                  onClick={() => {
                    performOpen(data.name);
                  }}
                >
                  <TheCardContent>
                    <Image src={"/cs/" + data.name + ".png"} />
                    <Title>{data.name}</Title>
                    <Username>{data.username}</Username>
                  </TheCardContent>
                </TheCardContainer>
                <Modal
                  title={data.name}
                  open={data.name === selected}
                  closeModal={closeModal}
                />
              </div>
            );
          })}
        </ActualContent>
      </Content>
    </Page>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";
import Image from "../../../component/image";

const LogoHolder = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
`;

const PartnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-size: 30px;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 30px;
`;

const TheDamnShortBorderBottom = styled.div`
  width: 55px;

  height: 2px;
  background: #bfbfbf;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Partners = () => {
  const partner = [
    { image: "/landing/partners/1.png" },
    { image: "/landing/partners/2.png" },
    { image: "/landing/partners/3.png" },
    { image: "/landing/partners/4.png" },
    { image: "/landing/partners/5.png" },
    { image: "/landing/partners/6.png" },
    { image: "/landing/partners/7.png" },
    { image: "/landing/partners/8.png" },
    { image: "/landing/partners/9.png" },
    { image: "/landing/partners/10.png" },
    { image: "/landing/partners/11.png" },
    { image: "/landing/partners/12.png" },
    { image: "/landing/partners/13.png" },
    { image: "/landing/partners/14.png" },
    { image: "/landing/partners/15.png" },
    { image: "/landing/partners/16.png" },
    { image: "/landing/partners/17.png" },
    { image: "/landing/partners/18.png" },
  ];
  return (
    <PartnerWrapper>
      <TitleWrapper>
        官方指名合作伙伴
        <TheDamnShortBorderBottom />
      </TitleWrapper>
      <LogoHolder>
        {partner.map((data, index) => {
          return <Image src={data.image} p="20px" />;
        })}
      </LogoHolder>
    </PartnerWrapper>
  );
};

export default Partners;

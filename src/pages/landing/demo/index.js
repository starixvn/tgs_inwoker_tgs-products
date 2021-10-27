import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "../../../component/image";
import styled from "styled-components";

const SliderPartitionContainer = styled.div`
  padding: 20px;
  position: relative;
`;

const ImageContainer = styled.div`
  :hover {
    transition: transform 1s;
  }
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.65);
  height: 100%;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: block;
  position: absolute;
  transition: all 0.1s;
`;

const OverlayBox = styled.div`
  padding: 30px;
  min-height: 100px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 6px white;
  font-size: 30px;
  font-weight: bold;
  opacity: 0;
  color: white;
`;

const AnotherOverlayToClick = styled.div`
  background: rgba(3, 137, 255, 0.75);
  height: 100%;
  width: calc(100% - 40px);
 display: flex;
 align-items: center;
 justify-content: center;
  position: absolute;

  opacity ${({ clicked }) => {
    return clicked ? "1" : "0";
  }};

  transition: opacity 1s;

  ${OverlayBox} {
    opacity: 1;
    transition: opacity 2s;
  }
`;

const SliderWrapper = styled.div`
  padding: 20px 0;
  .slick-current {
    transform: scale(1.05);
    transition: all 1s;

    ${Overlay} {
      display: none;
    }
  }
`;

const Demos = () => {
  const [current, setCurrent] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerPadding: "20px",
          swipe: true,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrent(next);
    },
  };

  function gotoPage(link) {
    window.open(link);
  }

  const SliderPartition = ({ image, link, count, name }) => {
    const [clicked, setClick] = useState(false);
    useEffect(() => {
      if (count !== current) {
        setClick(false);
      }
    });

    return (
      <SliderPartitionContainer
        onMouseOver={() => {
          setClick(true);
        }}
        onMouseOut={() => {
          setClick(false);
        }}
      >
        <AnotherOverlayToClick
          clicked={clicked}
          onClick={() => {
            if (clicked) {
              gotoPage(link);
            }
          }}
        >
          <OverlayBox>{name}</OverlayBox>
        </AnotherOverlayToClick>
        <Overlay />
        <ImageContainer>
          <Image src={`/landing/demo/${image}.png`} />
        </ImageContainer>
      </SliderPartitionContainer>
    );
  };

  const demoList = [
    { image: "1", alt: "T1", path: "https://t1.srvptt.com/" },
    { image: "2", alt: "T2", path: "https://t2.srvptt.com/" },
    { image: "3", alt: "T3", path: "https://t3.srvptt.com/" },
    { image: "4", alt: "T4", path: "https://t4.srvptt.com/" },
    { image: "5", alt: "T5", path: "https://t5.srvptt.com/" },
  ];
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {demoList.map((data, index) => {
          return (
            <SliderPartition
              key={index}
              count={index}
              image={data.image}
              link={data.path}
              name={data.alt}
            />
          );
        })}
      </Slider>
    </SliderWrapper>
  );
};

export default Demos;

import React from "react";
import Slider from "react-slick";
import Image from "../../../component/image";
import styled from "styled-components";

const ImageMasker = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0 0; 10px 0px;
  opacity: 0;
`;

const TheImagePadder = styled.div`
  position: relative;
  transition: 0.125s transform;
  :hover {
    transform: scale(1.05);
    ${ImageMasker} {
      opacity: 1;
      transition: 0.65s opacity;
    }
  }
  width: auto;
  height: auto;
  cursor: pointer;
`;

const Overlay = styled.div`
  background: red;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.2;
`;

const Demos = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    centerMode: true,
  };

  const demoList = [
    { image: "1", alt: "demo1" },
    { image: "2", alt: "demo2" },
    { image: "3", alt: "demo3" },
    { image: "4", alt: "demo4" },
    { image: "5", alt: "demo5" },
  ];
  return (
    <div>
      <Slider {...settings}>
        {demoList.map((data, index) => {
          return (
            <TheImagePadder>
              <ImageMasker>
                <Image p="10px " src={`/landing/demo/demo.png`} />
              </ImageMasker>
              <Image p="10px " src={`/landing/demo/${data.image}.png`} />
            </TheImagePadder>
          );
        })}
      </Slider>
    </div>
  );
};

export default Demos;

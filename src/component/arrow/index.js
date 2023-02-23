import React from "react";
import styled from "styled-components";
import { common } from "../../utils/common";

const arrowSize = (size) => {
  switch (size) {
    case "small":
      return "width: 30px; height: 30px;";
    case "medium":
      return "width: 40px; height: 40px;";
    case "large":
      return "width: 50px; height: 50px;";
    case "xlarge":
      return "width: 60px; height: 60px;";

    default:
      return "width: 30px; height: 30px;";
  }
};

const ArrowContainer = styled.div`
  background: #fff;
  mask: url(${({ direction }) => {
      return common.imageUrl + "misc/arrow-" + direction + ".png";
    }})
    no-repeat center;
  mask-size: contain;

  animation: ${({ animate, direction }) =>
    animate && (direction === "up" || direction === "down")
      ? "moveUpDown 1s ease-in-out infinite alternate"
      : "moveLeftRight 1s ease-in-out infinite alternate"};
  @keyframes moveUpDown {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes moveLeftRight {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-10px);
    }
  }

  ${({ size }) => arrowSize(size)}
`;

const Arrow = ({ direction, size, animate }) => {
  return (
    <ArrowContainer
      direction={direction}
      size={size}
      animate={animate}
    ></ArrowContainer>
  );
};

export default Arrow;

import React from "react";
import styled from "styled-components";
import { common } from "../../utils/common";

import { hardcoded } from "../../utils/hardcode";

const BannerContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ background }) => {
    return `url(${common.imageUrl + background}) center no-repeat;`;
  }};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0;

  opacity: ${({ selected }) => (selected ? "1" : "0")};
  transition: opacity 1s;
`;

const TransitionBackground = ({ selected }) => {
  return (
    <div>
      {hardcoded.homepage.map((item, index) => {
        return (
          <BannerContainer
            selected={selected === item.title}
            key={index}
            background={"homepage/" + item.title + ".jpg"}
            gradient={item.gradient}
          ></BannerContainer>
        );
      })}
    </div>
  );
};

export default TransitionBackground;

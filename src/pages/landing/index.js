import Banner from "../../component/banner";
import Page from "../../component/page";
import styled from "styled-components";

import breakpoint from "../../config/breakpoints";
import { useEffect, useState } from "react";
import { hardcoded } from "../../utils/hardcode";
import TransitionBackground from "../../component/transition-background";
import i18n from "../../config/i18n";

const GameListContainer = styled.div`
  bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
`;

const GameList = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 20px;
`;

const GameListItem = styled.div`
  text-align: center;
  padding:  10px 20px;
  
  border-radius: 8px;
  color: white;
  background: ${({ selected }) => (selected ? "#0389ff" : "rgba(0,0,0,0.5)")};
  border: solid 2px #0389ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
   border: solid 2px #0389ff;
    animation: breathing 0.75s infinite;
    @keyframes breathing {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
      }

      70% {
        transform: scale(1.025);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
  }
`;

var path = process.env.PUBLIC_URL + "/assets/images/";

const Icon = styled.div`
  mask: url(${({ icon }) => {
    return path + "homepage/icons/" + icon + ".svg";
  }});
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  width: 25px;
  height: 25px;
  background: white;
`;

const BrandsContainer = styled.div`
  color: #fff;
  position: absolute;
  ${({ position }) => {
    console.log(position);
    return [position] + ": 200px;";
  }};
  top: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Brands = styled.div`
  border: solid 1px #fff;
  padding: 10px 20px;
  border-radius: 4px;
`;

const Landing = () => {
  const [gameList, setGameList] = useState(hardcoded.homepage);
  const [selected, setSelected] = useState(gameList[0]);

  return (
    <Page>
      <TransitionBackground selected={selected.title} />
      {hardcoded.homepage
        .filter((a) => {
          return a.title === selected.title;
        })
        .map((a, index) => {
          return (
            <BrandsContainer position={a.position}>
              {hardcoded.brands
                .filter((b) => {
                  return b.gametype.includes(selected.title);
                })
                .map((c, index) => {
                  return <Brands>{c.name}</Brands>;
                })}
            </BrandsContainer>
          );
        })}

      <GameListContainer>
        <GameList>
          {hardcoded.homepage.map((data, index) => {
            return (
              <GameListItem
                selected={data.title === selected.title}
                onClick={() => {
                  setSelected(data);
                }}
              >
                <Icon icon={data.title} />
                {i18n.t("gametype." + data.title)}
              </GameListItem>
            );
          })}
        </GameList>
      </GameListContainer>
    </Page>
  );
};

export default Landing;

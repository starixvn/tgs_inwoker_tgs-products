import styled from "styled-components";

import { hardcoded } from "../../utils/hardcode";
import TransitionBackground from "../../component/transition-background";
import i18n from "../../config/i18n";
import { useState } from "react";
import Page from "../../component/page";
import { common } from "../../utils/common";
import breakpoint from "../../config/breakpoints";

const GameListContainer = styled.div`
  bottom: 40px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  left: 0;
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const GameList = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 20px;

  @media (${breakpoint.mobile}) {
    width: 100%;
  }
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

const Icon = styled.div`
  mask: url(${({ icon }) => {
    return common.imageUrl + "homepage/icons/" + icon + ".svg";
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
    return [position] + ": 320px;";
  }};
  top: 200px;

  @media (${breakpoint.mobile}) {
    left: 0;
    right: 0;
    top: 140px;
    bottom: 0;
    padding: 10px;
  }
`;

const Brands = styled.div`
  border: solid 1px #fff;
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;

  align-items: center;
  gap: 10px;
  @media (${breakpoint.mobile}) {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LogoHolder = styled.img`
  height: auto;
  width: 40px;
`;

const CustomMenu = styled.div`
  background: #0d1931;
  height: 80px;

  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: none;
  position: fixed;
  top: 60px;
  z-index: 2;

  @media (${breakpoint.mobile}) {
    display: flex;
  }
`;

const CustomGameListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ selected }) => (selected ? "#0389ff" : "rgba(0,0,0,0.5)")};
  color: #fff;
  min-width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 3rem;
  padding-bottom: 20px;
`;
const SubTitle = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #0389ff;
`;
const Landing = () => {
  const [gameList, setGameList] = useState(hardcoded.homepage);
  const [selected, setSelected] = useState(gameList[0]);

  return (
    <Page>
      <TransitionBackground selected={selected.title} />
      <CustomMenu>
        {hardcoded.homepage.map((data, index) => {
          return (
            <CustomGameListItem
              key={index}
              selected={data.title === selected.title}
              onClick={() => {
                setSelected(data);
              }}
            >
              <Icon icon={data.title} />
              <div>{i18n.t("gametype." + data.title)}</div>
            </CustomGameListItem>
          );
        })}
      </CustomMenu>

      {hardcoded.homepage
        .filter((a) => {
          return a.title === selected.title;
        })
        .map((a, index) => {
          return (
            <BrandsContainer position={a.position}>
              <div>
                <SubTitle>{a.title}</SubTitle>
                <Title> {i18n.t("gametype." + a.title)}</Title>
              </div>
              <LogosContainer>
                {hardcoded.brands
                  .filter((b) => {
                    return b.gametype.includes(selected.title);
                  })
                  .map((c, index) => {
                    return (
                      <Brands key={index}>
                        <LogoHolder
                          src={common.imageUrl + "providers/" + c.name + ".png"}
                          alt={c.name}
                        />
                        <div>{i18n.t(a.title + "." + c.name)}</div>
                      </Brands>
                    );
                  })}
              </LogosContainer>
            </BrandsContainer>
          );
        })}

      <GameListContainer>
        <GameList>
          {hardcoded.homepage.map((data, index) => {
            return (
              <GameListItem
                key={index}
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

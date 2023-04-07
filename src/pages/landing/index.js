import styled from "styled-components";

import { hardcoded } from "../../utils/hardcode";
import TransitionBackground from "../../component/transition-background";
import i18n from "../../config/i18n";
import { useEffect, useRef, useState } from "react";
import Page from "../../component/page";
import { common } from "../../utils/common";
import breakpoint from "../../config/breakpoints";

import AppBar from "../../component/appbar";
import { useParams } from "react-router";
import { AppHistory } from "../../config/router";

const GameListContainer = styled.div`
  bottom: 40px;
  display: flex;
  justify-content: center;

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
  background: ${({ selected }) =>
    selected ? "#0389ff" : "rgba(38, 41, 49,0.8)"};

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {

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
  width: 30px;
  height: 30px;
  background: white;
`;

const BrandWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;

  @media (${breakpoint.mobile}) {
    padding-top: 40px;
  }
`;

const BrandsContainer = styled.div`
  color: #fff;

  float: ${({ position }) => {
    return [position];
  }};

  @media (${breakpoint.mobile}) {
    width: 100%;
    padding: 20px;
  }
`;

const Brands = styled.div`
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;

  align-items: center;
  gap: 10px;

  background: rgba(30, 31, 32, 0.9);
  @media (${breakpoint.mobile}) {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LogoHolder = styled.img`
  height: 38px;
  width: 38px;
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
  right: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  @media (${breakpoint.mobile}) {
    display: flex;
  }
`;

const CustomGameListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ selected }) =>
    selected ? "#0389ff" : "rgba(38,41,49,0.9)"};
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 70px;
  text-align: center;

  white-space: nowrap;
`;

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 10px;

  @media (${breakpoint.mobile}) {
    width: auto;
    padding-bottom: 100px;
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
  font-weight: bold;

  @media (${breakpoint.mobile}) {
    font-size: 30px;
  }
`;
const SubTitle = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: #0389ff;

  @media (${breakpoint.mobile}) {
    font-size: 20px;
  }
`;

const TheWrapperForContent = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  justify-content: space-between;
  box-sizing: border-box;

  @media (${breakpoint.mobile}) {
    padding-bottom: 100px;
`;
const Landing = () => {
  const [gameList, setGameList] = useState(hardcoded.homepage);
  const [selected, setSelected] = useState(gameList[0]);

  const { game } = useParams();

  //check if game param is valid
  const isValid = gameList.find((a) => {
    return a.title === game;
  });

  useEffect(() => {
    if (!isValid) {
      AppHistory.push("/" + i18n.language + "/");
    }
  });

  useEffect(() => {
    //find matching title from homepage, if match with game param, set selected
    const found = gameList.find((a) => {
      return a.title === game;
    });
    if (found) {
      setSelected(found);
    }
  }, []);

  return (
    <>
      <AppBar />
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
                  AppHistory.push("/" + i18n.language + "/" + data.title);
                }}
              >
                <Icon icon={data.title} />
                <div>{i18n.t("gametype." + data.title)}</div>
              </CustomGameListItem>
            );
          })}
        </CustomMenu>
        <TheWrapperForContent>
          <BrandWrapper>
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
                                src={
                                  common.imageUrl +
                                  "providers/" +
                                  c.name +
                                  ".png"
                                }
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
          </BrandWrapper>

          <GameListContainer>
            <GameList>
              {hardcoded.homepage.map((data, index) => {
                return (
                  <GameListItem
                    key={index}
                    selected={data.title === selected.title}
                    onClick={() => {
                      setSelected(data);
                      AppHistory.push("/" + i18n.language + "/" + data.title);
                    }}
                  >
                    <Icon icon={data.title} />
                    {i18n.t("gametype." + data.title)}
                  </GameListItem>
                );
              })}
            </GameList>
          </GameListContainer>
        </TheWrapperForContent>
      </Page>
    </>
  );
};

export default Landing;

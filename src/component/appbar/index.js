import React, { useEffect, useState } from "react";
import styled from "styled-components";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";
import LanguageChanger from "../languageChanger";
import Image from "../image";
import MobileMenu from "./mobilemenu";
import breakpoint from "../../config/breakpoints";

const CustomAppBarContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  color: black;
  transition: background 0.75s;

  ${({ scrolled }) => {
    return (
      scrolled &&
      `
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
    `
    );
  }}
`;

const AppBarLength = styled.div`
  width: 1280px;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;

  @media (${breakpoint.mobile}) {
    width: 100%;
    grid-template-columns: 40%;
  }
`;

const AppBarContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Left = styled(AppBarContent)`
  @media (${breakpoint.mobile}) {
    margin-left: 20px;
  }
`;
const Middle = styled(AppBarContent)`
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;
const Right = styled(AppBarContent)`
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0px 100px;
`;

const MenuButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  text-transform: uppercase;
  user-select: none;

  ${({ scrolled }) => {
    return scrolled ? `color: black;` : `color: white;`;
  }}

  ${({ selected, border }) => {
    return selected ? (border ? "color: white;" : "color: #0389FF;") : ``;
  }}


  ${({ border, selected, scrolled }) => {
    return (
      border &&
      ` 
      ${
        scrolled
          ? `
          border: ${selected ? "solid 1px #0389FF" : "solid 1px black"};
         color: ${selected && "white"};
          background: ${selected && "#0389FF"};
          `
          : `
          border: ${selected ? "solid 1px #0389FF" : "solid 1px #FFF"};
          background: ${selected && "#0389FF"};
      `
      }
    `
    );
  }}
`;

const LogoHolder = styled.div`
  cursor: pointer;
`;

const AppBar = ({ scrolled }) => {
  const MenuList = [
    { title: "products", withBorder: false },
    { title: "demo", withBorder: false },
    { title: "about", withBorder: false },
    { title: "contact", withBorder: true },
  ];

  function redirect(path) {
    AppHistory.push("/" + i18n.language + "/" + path);
  }

  const [selected, setSelected] = useState("products");

  function performClickMenu(item) {
    setSelected(item);
    redirect(item);
  }
  var path = window.location.pathname.split("/");

  useEffect(() => {
    if (path[2] !== "") {
      setSelected(path[2]);
    } else {
    }
  }, []);

  return (
    <div>
      <CustomAppBarContainer scrolled={scrolled}>
        <AppBarLength>
          <Left>
            <LogoHolder
              onClick={() => {
                performClickMenu("");
              }}
            >
              <Image src={scrolled ? "/logo/PGG-gold.png" : "/logo/PGG.png"} />
            </LogoHolder>
          </Left>
          <Middle>
            <Menu>
              {MenuList.map((data, index) => {
                return (
                  <MenuButton
                    scrolled={scrolled}
                    key={index}
                    selected={selected === data.title}
                    onClick={(e) => {
                      e.preventDefault();
                      performClickMenu(data.title);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    border={data.withBorder}
                  >
                    {i18n.t(`menu.` + data.title)}
                  </MenuButton>
                );
              })}
            </Menu>
          </Middle>
          <Right>
            <LanguageChanger scrolled={scrolled} />
          </Right>
        </AppBarLength>
      </CustomAppBarContainer>
      <MobileMenu menu={MenuList} />
    </div>
  );
};

export default AppBar;

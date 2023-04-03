import React, { useEffect, useState } from "react";
import styled from "styled-components";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";
import LanguageChanger from "../languageChanger";
import Image from "../image";
import MobileMenu from "./mobilemenu";
import breakpoint from "../../config/breakpoints";
import { hardcoded } from "../../utils/hardcode";

const CustomAppBarContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  color: black;

  background: linear-gradient(
    180deg,
    #000 0,
    rgba(0, 0, 0, 0.2) 68%,
    transparent
  );

  @media (${breakpoint.mobile}) {
    height: 60px;
  }
  ${({ scrolled }) => {
    return (
      scrolled &&
      `
     background: linear-gradient(180deg,#000 0,rgba(0,0,0,.6) 68%,transparent);
    `
    );
  }}

  transition: background 0.75s;

  @media (${breakpoint.mobile}) {
    background: linear-gradient(
      180deg,
      #000 0,
      rgba(0, 0, 0, 0.6) 68%,
      transparent
    );
    ${({ scrolled }) => {
      return (
        scrolled &&
        `
        background: #111;
      `
      );
    }}
  }
`;

const AppBarLength = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (${breakpoint.mobile}) {
    display: grid;
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
    margin-left: 80px;
    width: 50%;
  }
`;
const HideOnMobile = styled(AppBarContent)`
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0px 20px;
`;

const MenuButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  text-transform: uppercase;
  user-select: none;

  ${({ scrolled }) => {
    return scrolled
      ? `color: hsla(0,0%,100%,.6);`
      : `color: hsla(0,0%,100%,.6);`;
  }}

  ${({ selected, border }) => {
    return selected
      ? border
        ? "color: hsla(0,0%,100%,.6);"
        : "color: #fff;"
      : ``;
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

const AppBar = ({}) => {
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
      setSelected("products");
    }
  }, []);

  const [y, setY] = useState(window.scrollY);
  var scrolled = y > 100;

  const handleNavigation = (e) => {
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div>
      <CustomAppBarContainer scrolled={scrolled}>
        <AppBarLength>
          <Left>
            <LogoHolder
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                performClickMenu("");
              }}
            >
              <Image
                src={scrolled ? "/logo/PGG.png" : "/logo/PGG.png"}
                h="40px"
              />
            </LogoHolder>
          </Left>
          <HideOnMobile>
            <Menu>
              {hardcoded.appbarMenu.map((data, index) => {
                return (
                  <div>
                    <MenuButton
                      scrolled={scrolled}
                      key={index}
                      selected={selected === data.title}
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        performClickMenu(data.route);
                      }}
                      border={data.withBorder}
                    >
                      {i18n.t(`menu.` + data.title)}
                    </MenuButton>
                  </div>
                );
              })}
            </Menu>

            <div>
              <LanguageChanger scrolled={scrolled} />
            </div>
          </HideOnMobile>
        </AppBarLength>
      </CustomAppBarContainer>
      <MobileMenu menu={hardcoded.appbarMenu} />
    </div>
  );
};

export default AppBar;

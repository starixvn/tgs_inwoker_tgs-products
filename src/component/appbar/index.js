import React, { useEffect, useState } from "react";
import styled from "styled-components";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";
import LanguageChanger from "../languageChanger";
import Image from "../image";

const CustomAppBarContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const AppBarLength = styled.div`
  width: 1280px;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;

const AppBarContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Left = styled(AppBarContent)``;
const Middle = styled(AppBarContent)``;
const Right = styled(AppBarContent)``;

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0px 100px;
`;

const MenuButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  border-radius: 15px;
  text-transform: uppercase;

  user-select: none;

  ${({ selected }) => {
    return (
      selected &&
      `
    color: #0389FF;`
    );
  }}

  ${({ border, selected }) => {
    return (
      border &&
      ` 
      border: ${selected ? "solid 1px #0389FF" : "solid 1px #FFF"};
      color: white;
      background: ${selected ? "#0389FF" : ""};
    `
    );
  }}
`;

const AppBar = () => {
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
    <React.Fragment>
      <CustomAppBarContainer>
        <AppBarLength>
          <Left
            onClick={() => {
              performClickMenu("");
            }}
          >
            <Image src="/logo/PGG.png" />
          </Left>
          <Middle>
            <Menu>
              {MenuList.map((data, index) => {
                return (
                  <MenuButton
                    key={index}
                    selected={selected === data.title}
                    onClick={(e) => {
                      e.preventDefault();
                      performClickMenu(data.title);
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
            <LanguageChanger />
          </Right>
        </AppBarLength>
      </CustomAppBarContainer>
    </React.Fragment>
  );
};

export default AppBar;

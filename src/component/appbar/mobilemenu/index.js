import React from "react";
import { useState } from "react";
import styled from "styled-components";
import breakpoint from "../../../config/breakpoints";
import i18n from "../../../config/i18n";
import { AppHistory } from "../../../config/router";
import { common } from "../../../utils/common";
import LanguageChanger from "../../languageChanger";

const FixedPosition = styled.div`
  position: fixed;
  z-index: 4;
  display: none;
  @media (${breakpoint.mobile}) {
    display: block;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  left: 20px;
  top: 0px;
  height: 50px;
  width: 50px;
  background: transparent;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

const MobileMenuList = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${({ open }) => {
    return open ? "block" : "none";
  }};
`;

const MenuList = styled.div``;

const MenuItem = styled.div`
  font-size: 30px;
  padding: 10px 50px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  text-align: center;
`;

const Language = styled.div`
  padding: 20px 35px;
  display: flex;
  justify-content: center;
`;

const LogoHolder = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px;
`;

const Logo = styled.img`
  height: 40px;
`;

const MobileMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }

  function redirect(path) {
    AppHistory.push("/" + path);
  }

  function performClickMenu(item) {
    setOpen(false);
    redirect(item);
  }

  return (
    <FixedPosition>
      <Hamburger onClick={toggleMenu}>{!open ? "☰" : "✖"}</Hamburger>{" "}
      <MobileMenuList open={open}>
        <LogoHolder>
          <Logo src={common.imageUrl + "/logo/PGG.png"} />
        </LogoHolder>
        <MenuList>
          {menu.map((data, index) => {
            return (
              <MenuItem
                onClick={() => {
                  performClickMenu(data.title);
                }}
              >
                {i18n.t(`menu.` + data.title)}
              </MenuItem>
            );
          })}
          <Language>
            <LanguageChanger />
          </Language>
        </MenuList>
      </MobileMenuList>
    </FixedPosition>
  );
};

export default MobileMenu;

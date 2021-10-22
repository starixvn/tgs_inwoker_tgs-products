import React from "react";
import { useState } from "react";
import styled from "styled-components";
import i18n from "../../../config/i18n";
import { AppHistory } from "../../../config/router";
import LanguageChanger from "../../languageChanger";

const FixedPosition = styled.div`
  position: fixed;
  z-index: 2;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  height: 50px;
  width: 50px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const MobileMenuList = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${({ open }) => {
    return open ? "block" : "none";
  }};
`;

const MenuList = styled.div`
  margin-top: 100px;
`;

const MenuItem = styled.div`
  font-size: 30px;
  padding: 10px 50px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Language = styled.div`
  padding: 20px 35px;
`;

const MobileMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }

  function redirect(path) {
    AppHistory.push("/" + i18n.language + "/" + path);
  }

  function performClickMenu(item) {
    setOpen(false);
    redirect(item);
  }

  return (
    <FixedPosition>
      <Hamburger onClick={toggleMenu}>{!open ? "☰" : "✖"}</Hamburger>
      <MobileMenuList open={open}>
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

import React, { useState } from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";

const LanguageHolder = styled.div`
  display: flex;
  color: ${({ scrolled }) => {
    return scrolled ? "hsla(0,0%,100%,.6)" : "hsla(0,0%,100%,.6) ";
  }};
  align-items: center;
  white-space: nowrap;
`;

const TheDropdownWrapper = styled.div`
  position: relative;
  display: block;
  @media (${breakpoint.mobile}) {
    display: none;
  }
`;

const TheGoddamnButton = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ show }) => {
    return (
      show &&
      `
    color: #fff;
    `
    );
  }}
`;

const TheDropdownContainer = styled.div`
  opacity: ${({ show }) => (show ? "1" : "0")};
  position: absolute;
  top: 50px;
  left: -30px;
  transition: opacity 0.3s ease-in-out;
`;

const HideOnMobile = styled.div`
  display: none;
  @media (${breakpoint.mobile}) {
    display: flex;
  }
`;

const TheBubble = styled.div`
  cursor: pointer;
  background: #313132;
  width: 50px;
  color: #a1a1a1;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  width: 100px;
  gap: 10px;
  border-radius: 8px;
  ::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #313132 transparent;
  }
`;

const Arrow = styled.div`
  padding-top: 0;
  padding-left: 10px;
`;

const LanguageOption = styled.div`
  padding-left: 20px;

  user-select: none;
  cursor: pointer;

  @media (${breakpoint.mobile}) {
    padding: 0 20px;
  }
`;

const WebLanguageOption = styled.div`
  padding: 3px 20px;
  :hover {
    background: #0389ff;
    color: #fff;
  }
`;

export const languages = [
  {
    language: "en-US",
    name: "EN",
  },

  {
    language: "zh-CN",
    name: "简中",
  },

  {
    language: "zh-TW",
    name: "繁中",
  },
];

const LanguageChanger = ({ scrolled }) => {
  var path = window.location.pathname.split("/");

  const [selected, setSelected] = useState(languages[0].name);

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("fallbackLng", language);
    if (path[1] !== "" && path[1] !== undefined && path[1] !== null) {
      AppHistory.push("/" + path[1]);
    } else {
      AppHistory.push("/");
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <LanguageHolder scrolled={scrolled}>
      <TheDropdownWrapper>
        <TheGoddamnButton
          show={show}
          onClick={() => {
            setShow(!show);
          }}
        >
          {selected} <Arrow>˅</Arrow>
        </TheGoddamnButton>
        <TheDropdownContainer show={show}>
          <TheBubble>
            {languages.map((data, index) => {
              return (
                <WebLanguageOption
                  key={index}
                  onClick={() => {
                    setSelected(data.name);
                    changeLanguage(data.language);
                    handleClose();
                  }}
                >
                  {data.name}
                </WebLanguageOption>
              );
            })}
          </TheBubble>
        </TheDropdownContainer>
      </TheDropdownWrapper>
      <HideOnMobile>
        {languages.map((data, index) => {
          return (
            <LanguageOption
              key={index}
              onClick={() => {
                changeLanguage(data.language);
              }}
            >
              {data.name}
            </LanguageOption>
          );
        })}
      </HideOnMobile>
    </LanguageHolder>
  );
};

export default LanguageChanger;

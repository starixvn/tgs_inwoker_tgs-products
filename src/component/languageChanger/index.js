import React, { useState } from "react";
import styled from "styled-components";
import breakpoint from "../../config/breakpoints";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";

const LanguageHolder = styled.div`
  display: flex;
  color: ${({ scrolled }) => {
    return scrolled ? "white" : "white ";
  }};
  align-items: center;
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
`;

const TheDropdownContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 50px;
  left: -30px;
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
  padding: 20px;
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
`;

const LanguageChanger = ({ scrolled }) => {
  const languages = [
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

  var path = window.location.pathname.split("/");

  var languageInLocalStorage = localStorage.getItem("i18nextLng");
  const [selected, setSelected] = useState(languages[0].name);

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    if (path[2] !== "" && path[2] !== undefined && path[2] !== null) {
      AppHistory.push("/" + language + "/" + path[2]);
    } else {
      AppHistory.push("/" + language + "/");
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
                <div
                  key={index}
                  onClick={() => {
                    setSelected(data.name);
                    changeLanguage(data.language);
                    handleClose();
                  }}
                >
                  {data.name}
                </div>
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

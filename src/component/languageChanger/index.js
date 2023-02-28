import React from "react";
import styled from "styled-components";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";

const LanguageHolder = styled.div`
  display: flex;
  color: ${({ scrolled }) => {
    return scrolled ? "white" : "white ";
  }};
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
      name: "CN",
    },
  ];

  var path = window.location.pathname.split("/");

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    if (path[2] !== "") {
      AppHistory.push("/" + language + "/" + path[2]);
    } else {
      AppHistory.push("/" + language);
    }
  }

  return (
    <LanguageHolder scrolled={scrolled}>
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
    </LanguageHolder>
  );
};

export default LanguageChanger;

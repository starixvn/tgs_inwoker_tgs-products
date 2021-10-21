import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import i18n from "../../config/i18n";
import { AppHistory } from "../../config/router";

const LanguageHolder = styled.div`
  display: flex;
`;

const LanguageOption = styled.div`
  padding-left: 20px;
  color: white;
  user-select: none;
  cursor: pointer;
`;

const LanguageChanger = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <LanguageHolder>
      {languages.map((data, index) => {
        return (
          <LanguageOption
            key={index}
            onClick={() => {
              i18n.changeLanguage(data.language);
              setOpen(!open);
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

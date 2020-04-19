import React from "react";

import about from "../../content/about";

import Button from "../Button";

import * as S from "./styles";

export default () => (
  <S.AboutWrapper>
    <S.DeveloperWrapper>
      <S.DeveloperJsLogo>JS</S.DeveloperJsLogo>
      <S.DeveloperText>Developer</S.DeveloperText>
    </S.DeveloperWrapper>

    <S.ProfilePhoto
      src={require("../../assets/images/" + about.photo)}
      alt={about.name}
    />

    <S.DeveloperName>{about.name}</S.DeveloperName>

    <S.DevStats>
      {Object.keys(about.social).map(
        (key) =>
          about.social[key].stats && (
            <Button
              key={key}
              as="label"
              config={{
                icon: require("react-icons/fi")[about.social[key].icon],
              }}
            >
              {about.social[key].stats}
            </Button>
          )
      )}
    </S.DevStats>

    <S.DevSocial>
      {Object.keys(about.social).map((key) => (
        <Button
          key={key}
          as="a"
          href={about.social[key].url}
          config={{
            icon: require("react-icons/fi")[about.social[key].icon],
          }}
          target="_blank"
          rel="noopener noreferrer external"
        >
          {key.toUpperCase()}
        </Button>
      ))}
    </S.DevSocial>
  </S.AboutWrapper>
);

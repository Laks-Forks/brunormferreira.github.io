import React from "react";

import about from "../../content/about";

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
  </S.AboutWrapper>
);

import React, { useContext } from "react";

import { store, actions } from "../../store";

import Logo from "../NavLogotipo";

import * as S from "./styles";

export default () => {
  const { state, dispatch } = useContext(store);
  console.log(state);
  return (
    <S.NavWrapper>
      <Logo />
    </S.NavWrapper>
  );
};

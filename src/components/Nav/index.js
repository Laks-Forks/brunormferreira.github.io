import React, { useContext } from "react";

import { store, actions } from "../../store";

import Logo from "../NavLogotipo";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import Button from "../Button";

import * as S from "./styles";

export default () => {
  const { state, dispatch } = useContext(store);
  console.log(state);
  return (
    <S.NavWrapper>
      <S.NavContainer>
        <Logo />
        <S.ButtonsContainer>
          <Button
            as="button"
            type="button"
            onClick={() =>
              state.content.currentIndex !== 0 &&
              dispatch({ type: actions.SCROLL_TO_ABOUT })
            }
          >
            about
          </Button>
          <Button
            as="button"
            type="button"
            onClick={() =>
              state.content.currentIndex !== 1 &&
              dispatch({ type: actions.SCROLL_TO_SKILLS })
            }
          >
            skills
          </Button>
        </S.ButtonsContainer>
      </S.NavContainer>
    </S.NavWrapper>
  );
};

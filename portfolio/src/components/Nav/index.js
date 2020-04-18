import React, { useContext } from "react";

import { store, actions } from "../../store";

import * as S from "./styles";

export default () => {
  const { state, dispatch } = useContext(store);
  console.log(state);
  return (
    <S.NavWrapper
      onClick={() =>
        state.content.currentIndex === 0
          ? dispatch({ type: actions.SCROLL_TO_SKILLS })
          : dispatch({ type: actions.SCROLL_TO_ABOUT })
      }
    >
      {state.content.currentIndex}
    </S.NavWrapper>
  );
};

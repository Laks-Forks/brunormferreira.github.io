import React, { useState, useEffect, useContext } from "react";

import about from "../../content/about";

import { store, actions } from "../../store";

import * as S from "./styles";

export default () => {
  const { state, dispatch } = useContext(store);

  const [embla, setEmbla] = useState(null);

  // ========================================================================================
  // ADD A LISTENER WHEN EMBLA IS SCROLLED AND GET NEW INDEX AND SET CURRENT INDEX STATE
  // ========================================================================================
  useEffect(() => {
    const onScrollEmbla = () => {
      const index = embla.selectedScrollSnap();

      index === 0
        ? dispatch({
            type: actions.SCROLL_TO_ABOUT,
          })
        : dispatch({
            type: actions.SCROLL_TO_SKILLS,
          });
    };
    if (embla) embla.on("scroll", onScrollEmbla);

    return () => {
      if (embla) embla.off("scroll", onScrollEmbla);
    };
  }, [embla]);

  // =============================================
  // SCROLL EMBLA WHEN CURRENT INDEX STATE CHANGE
  // =============================================
  useEffect(() => {
    if (embla && state.content.currentIndex !== embla.selectedScrollSnap()) {
      embla.scrollTo(state.content.currentIndex);
    }
  }, [state.content.currentIndex]);

  return (
    <S.ContentWrapper emblaRef={setEmbla}>
      <S.ContentContainer>
        <S.ContentItem>Slide 1</S.ContentItem>
        <S.ContentItem>Slide 2</S.ContentItem>
      </S.ContentContainer>
    </S.ContentWrapper>
  );
};

/* <img src={require("../../assets/images/" + about.photo)} alt="" /> */

import React, { useState, useEffect, useContext } from "react";

import { store, actions } from "../../store";

import About from "../About";

import * as S from "./styles";

export default () => {
  const { state, dispatch } = useContext(store);

  const [embla, setEmbla] = useState(null);

  // =============================================
  // SCROLL EMBLA WHEN CURRENT INDEX STATE CHANGE
  // =============================================
  useEffect(() => {
    if (embla && state.content.currentIndex !== embla.selectedScrollSnap())
      embla.scrollTo(state.content.currentIndex);
  }, [state.content.currentIndex]);

  return (
    <S.ContentWrapper options={{ draggable: false }} emblaRef={setEmbla}>
      <S.ContentContainer>
        <S.ContentItem>
          <About />
        </S.ContentItem>
        <S.ContentItem>Slide 2</S.ContentItem>
      </S.ContentContainer>
    </S.ContentWrapper>
  );
};

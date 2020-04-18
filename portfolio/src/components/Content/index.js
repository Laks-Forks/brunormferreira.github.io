import React, { useState, useEffect, useCallback } from "react";

import about from "../../content/about";

import * as S from "./styles";

export default () => {
  const [embla, setEmbla] = useState(null);

  const scrollToSkills = useCallback(() => embla && embla.scrollTo(1), [embla]);
  const scrollToAbout = useCallback(() => embla && embla.scrollTo(0), [embla]);

  useEffect(() => {
    if (!embla) return;
  }, [embla]);

  return (
    <S.ContentWrapper useRef={setEmbla}>
      <S.ContentContainer>
        <S.ContentItem>Slide 1</S.ContentItem>
        <S.ContentItem>Slide 2</S.ContentItem>
      </S.ContentContainer>
    </S.ContentWrapper>
  );
};

/* <img src={require("../../assets/images/" + about.photo)} alt="" /> */

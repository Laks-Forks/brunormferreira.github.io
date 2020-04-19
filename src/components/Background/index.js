import React, { useEffect, useRef } from "react";

import rain from "./animation";

import * as S from "./styles";

export default () => {
  const canvas = useRef(null);
  useEffect(() => {
    if (canvas && canvas.current) rain(canvas.current);
  }, []);
  return <S.Canvas ref={canvas} />;
};

import React from "react";

import * as S from "./styles";

const defaultConfig = {
  fontSize: 12,
  color: "var(--color-normal)",
  icon: null,
};

export default ({
  config: { icon: Icon, ...config } = {},
  children,
  ...rest
}) => (
  <S.ButtonWrapper config={Object.assign({}, defaultConfig, config)} {...rest}>
    {Icon && <Icon />}
    {children}
  </S.ButtonWrapper>
);

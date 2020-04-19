import React from "react";

import * as S from "./styles";

const defaultConfig = {
  fontSize: 12,
  color: "var(--color-normal)",
  icon: null,
  fontSize: "var(--font-small)",
};

export default ({
  config: { icon: Icon, variant, ...config } = {},
  children,
  ...rest
}) => (
  <S.ButtonWrapper
    className={variant}
    config={Object.assign({}, defaultConfig, config)}
    {...rest}
  >
    {Icon && <Icon />}
    {children}
  </S.ButtonWrapper>
);

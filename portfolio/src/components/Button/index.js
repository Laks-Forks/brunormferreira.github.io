import React from "react";

import * as S from "./styles";

export default ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
);

import React from "react";

import * as S from "./styles";

export default ({ skill }) => (
  <S.Skill>
    <S.SkillImg
      src={require("../../assets/images/" + skill.img)}
      alt={skill.name}
    />
  </S.Skill>
);

import styled from "styled-components";

export const SkillsWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillsContainer = styled.div`
  height: 100%;
  width: 100%;

  max-width: 850px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
  grid-template-rows: repeat(auto-fit, minmax(50px, 100px));

  justify-content: center;
  align-content: center;
  justify-items: center;

  grid-gap: 1.5rem;
`;

import styled from "styled-components";

export const Skill = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem;

  border-radius: 12px;
  background: var(--content);

  img {
    filter: grayscale(100%);
  }
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

export const SkillImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center;

  transition: var(--transition);
`;

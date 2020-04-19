import styled from "styled-components";

export const LogoText = styled.p`
  color: var(--color-normal);
  font-size: var(--font-small);
  &.colored {
    color: var(--color-primary);
  }
`;

export const LogoTextWrapper = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

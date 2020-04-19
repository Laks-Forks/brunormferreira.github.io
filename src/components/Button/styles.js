import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;

  color: ${({ config }) => config.color};

  transition: var(--transition);

  font-size: ${({ config }) => config.fontSize};

  svg {
    margin-right: 12px;
  }
  * {
    transition: var(--transition);
  }

  &:not(.primary) {
    &:hover {
      color: var(--color-hovered);
      * {
        color: var(--color-hovered);
      }
    }
  }
  &.primary {
    color: var(--color-primary);
  }
`;

import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;

  color: ${({ config }) => config.color};

  transition: var(--transition);

  svg {
    margin-right: 12px;
  }
  * {
    transition: var(--transition);
  }

  &:hover {
    color: var(--color-hovered);
    * {
      color: var(--color-hovered);
    }
  }
`;

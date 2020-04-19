import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeveloperWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
export const DeveloperJsLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  border: 2px solid var(--color-normal);

  margin-right: 16px;

  font-family: Arial, Helvetica, sans-serif, sans-serif;

  padding: 2px;
  border-radius: 10px;

  width: 65px;
  height: 65px;

  font-weight: 800;
  letter-spacing: 3px;
`;
export const DeveloperText = styled.p`
  color: var(--color);
  font-weight: 400;
  font-size: 1.8em;
`;

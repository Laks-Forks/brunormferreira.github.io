import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 1rem;
`;
// ==================
// JS DEVELOPER
// ==================
export const DeveloperWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const DeveloperJsLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  border: 2px solid var(--color-normal);

  margin-right: 16px;

  font-family: Arial, Helvetica, sans-serif, sans-serif;

  padding: 3px 5px;
  border-radius: 8px;

  width: 45px;
  height: 45px;

  font-weight: 500;
  font-size: var(--font-normal);
`;
export const DeveloperText = styled.p`
  color: var(--color);
  font-weight: 400;
  font-size: 1.4em;
`;

// ==================
// PROFILE PHOTO
// ==================
export const ProfilePhoto = styled.img`
  object-fit: cover;
  object-position: center;
  border: 3px solid var(--color-normal);

  width: 120px;
  height: 120px;

  border-radius: 50%;
`;

// ==================
// DEV NAME
// ==================
export const DeveloperName = styled.h1`
  color: var(--color-normal);
  font-size: var(--font-big);

  margin: 1rem 0;
  font-weight: 400;
`;

// ==================
// DEV SOCIAL STATS
// ==================
export const DevStats = styled.div`
  display: flex;
`;

// ==================
// DEV SOCIAL LINKS
// ==================
export const DevSocial = styled.div`
  display: flex;
  margin: 1rem 0;
`;

// ==================
// DEV BIO
// ==================
export const DevBio = styled.p`
  color: var(--color);

  max-width: 550px;
  padding: 1rem;

  text-align: center;
  line-height: 1.5;
`;

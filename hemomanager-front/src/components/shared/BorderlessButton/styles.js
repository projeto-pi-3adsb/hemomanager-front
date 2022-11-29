import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  border: none;
  border-radius: 8px;
  height: 2.5rem;
  width: 9rem;

  font-weight: 500;

  font-family: "Roboto", sans-serif;
  background: var(--background-button);

  color: var(--background);

  &:hover {
    color: var(--red);
    transition: 0.2s;
    background: var(--background);
    border: 2px solid var(--red);
  }
`;

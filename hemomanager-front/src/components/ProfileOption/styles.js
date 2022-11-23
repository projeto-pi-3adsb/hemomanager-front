import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  width: 20%;
  height: 100%;
  font-size: 1rem;
  font-family: "Farro", sans-serif;
  gap: 1rem;

  .on-focused {
    color: var(--red);
    transition: 0.2s;
    background: var(--background);
    border: 2px solid var(--red);
  }
`;

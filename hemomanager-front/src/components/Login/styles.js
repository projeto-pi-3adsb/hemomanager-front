import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 30%;
  padding: 2rem;
  border: 1px solid var(--background-border-bar);
  border-radius: 8px;
  margin-bottom: 1rem;
  padding-top: 1rem;
  overflow-x: hidden;
  gap: 2rem;

  input {
    min-width: 100%;
    height: 1rem;
    padding-left: 0;
    color: var(--black);
  }

  div {
    text-align: center;

    span {
      color: var(--background-button);
      font-weight: 600;
    }
  }
`;

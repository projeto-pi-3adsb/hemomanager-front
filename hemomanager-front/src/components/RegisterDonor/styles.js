import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 70%;
  padding: 2rem;
  border: 1px solid var(--background-border-bar);
  border-radius: 8px;
  margin-bottom: 1rem;
  padding-top: 3rem;
  overflow-x: hidden;

  select {
    inline-size: 100%;
    block-size: 3rem;
    border: none;
    border-bottom: 2px solid var(--background-border-bar);
    background: transparent;
    font-weight: 400;
    font-size: 1rem;

    color: var(--gray);

    & + input {
      margin-block-start: 1rem;
    }

    &:focus-within {
      border: none;
    }
  }

  input {
    min-width: 100%;
    height: 1rem;
    padding-left: 0;
    color: var(--black);
  }

  .error {
    width: 90%;
    margin-top: -5rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    color: var(--shape);
    padding: 1rem;
    text-align: center;
    background-color: var(--red);
  }
`;

import styled from "styled-components";

export const InputDefault = styled.input`
  inline-size: 100%;
  padding: 1rem;
  block-size: 3rem;
  border: none;
  border-bottom: 2px solid var(--background-border-bar);
  background: transparent;
  font-weight: 400;
  font-size: 1rem;

  & + input {
    margin-block-start: 1rem;
  }

  &:focus-within {
    border: none;
    color: var(--background-button);
  }
`;

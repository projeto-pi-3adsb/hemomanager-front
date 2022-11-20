import styled from "styled-components";

export const InputDefault = styled.input`
  inline-size: 100%;
  padding: 1rem;
  block-size: 4rem;
  border: none;
  border-bottom: 2px solid var(--background-border-bar);
  background: transparent;
  font-weight: 400;
  font-size: 1rem;

  &:placeholder {
    color: var(--text-title);
  }
  & + input {
    margin-block-start: 1rem;
  }

  :focus {
    border: none;
  }
`;

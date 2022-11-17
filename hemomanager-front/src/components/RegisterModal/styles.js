import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-block-end: 2rem;
  }

  button {
    width: 100%;
    height: 3rem;
    margin: 2rem auto;
  }

  input {
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
  }

  button[type="submit"] {
    inline-size: 100%;
    padding: 0 1.5rem;
    block-size: 4rem;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-block-start: 1.5rem;
    color: #fff;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

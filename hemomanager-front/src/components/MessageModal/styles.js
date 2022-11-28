import styled from "styled-components";

export const Container = styled.form`
  div {
    display: flex;
    align-items: center;
    height: 6rem;
    gap: 1rem;

    input {
      margin: 0;
    }
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-block-end: 2rem;
  }

  textarea {
    inline-size: 100%;
    padding: 1rem;
    block-size: 8rem;
    border: 2px solid var(--background-border-bar);
    background: transparent;
    font-weight: 400;
    font-size: 1rem;

    resize: none;

    border-radius: 8px;
    margin-top: 1rem;

    :focus-within {
      border: 2px solid var(--background-button);
      color: var(--blue);
      font-weight: bold;
      outline: 0;
    }
  }

  button {
    width: 100%;
    height: 3rem;
    margin: 2rem auto;
  }

  select {
    inline-size: 100%;
    padding: 1rem;
    block-size: 4rem;
    border: none;
    border-bottom: 2px solid var(--background-border-bar);
    background: transparent;
    font-weight: 400;
    font-size: 1rem;

    color: var(--text-title);
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

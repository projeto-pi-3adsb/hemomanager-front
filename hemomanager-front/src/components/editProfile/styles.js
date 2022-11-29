import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;


  div {
    display: flex;
    margin: auto;
    height: 4rem;
    border-bottom: 2px solid var(--input-border);
    margin-bottom: 2rem;

    gap: 1rem;

    span {
      font-family: "Roboto", sans-serif;
      width: 60%;
      display: flex;
      align-items: center;
    }

    input,
    select {
      font-family: "Roboto", sans-serif;
      width: 40%;
      border: none;
      display: flex;
      text-align: start;
      justify-content: flex-end;
      outline: 0;
      background: none;

      &:focus-within {
        border: none;
      }
    }

    select {
      font-size: 1rem;
      height: 3rem;
      padding-left: 0.8rem;
    }
  }
`;

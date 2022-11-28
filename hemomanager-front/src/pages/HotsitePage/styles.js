import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: auto;
  height: 100vh;
  width: 80vw;
  display: block;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: 87px;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 100;
      color: var(--red-blood);
      font-size: 1.2rem;
    }
  }

  img {
    align-self: flex-start;
    height: 4rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Title = styled.strong`
  margin-top: 4rem;
  font-family: "Francois One", sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: var(--black);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 6rem;
  height: 100vh;
  max-width: 980px;
  border-radius: 9px;
  border: 1px solid var(--input-border);
  margin: 2rem auto;

  div {
    display: flex;
    border-bottom: 2px solid var(--input-border);
    margin-bottom: 2rem;

    gap: 1rem;

    span {
      font-family: "Roboto", sans-serif;
      width: 60%;
      display: flex;
      align-items: center;
    }

    input {
      font-family: "Roboto", sans-serif;
      width: 40%;
      border: none;
      display: flex;
      text-align: start;
      justify-content: flex-end;

      &:focus-within {
        border: none;
      }
    }
  }
`;

export const Input = styled.input``;

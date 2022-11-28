import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  height: 85vh;
  width: 80vw;
  display: block;
`;

export const Header = styled.header`
  display: flex;
  justify-content: start;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
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
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Title = styled.strong`
  margin-top: 4rem;
  font-family: "Francois One", sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: var(--black);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 6rem;
  height: 70vh;
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

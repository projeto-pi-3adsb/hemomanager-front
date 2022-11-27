import styled from "styled-components";

export const Container = styled.div`
  max-width: 1124px;
  height: 100%;
  margin: 0 auto;
`;
export const Header = styled.div`
  background-color: var(--background);
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1280px;
  padding: 0 1rem;
  margin: 0 auto;

  button {
    width: 6rem;
  }
`;

export const Perfil = styled.div`
  display: flex;
  color: var(--cinza-claro);
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2rem;
  }
  img {
    height: 8rem;
  }
`;

export const BarraOpcoes = styled.div`
  margin: 3rem auto;
  max-width: 980px;
  background-color: var(--background-beige);
  justify-content: center;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;

  gap: 2rem;

  button {
    height: 2.5rem;
    width: 14rem;
  }
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

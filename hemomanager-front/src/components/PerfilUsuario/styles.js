import styled from "styled-components";

export const Header = styled.div`
  background-color: var(--background);
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
`;
export const Button = styled.button`
  background-color: var(--background-button);
  font-family: "Roboto", sans-serif;
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  width: 75px;
  height: 35px;
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
    height: 200px;
  }
`;

export const BarraOpcoes = styled.div`
  margin: 4rem auto;
  width: 75vw;
  height: 15vh;
  background-color: var(--background-option-bar);
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    border: 1px solid var(--background-border-bar);
    width: 248px;
    height: 48px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 800px;
  border-radius: 9px;
  border: 1px solid var(--input-border);
  margin: auto;
`;
export const Input = styled.input``;

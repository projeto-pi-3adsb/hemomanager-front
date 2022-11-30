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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  height: 75vh;
  max-width: 980px;
  border-radius: 9px;
  border: 1px solid var(--input-border);
  margin: 0 auto;

  div{
    height: 100%
    height: 5rem;
  }

  h1 {
    display: flex;
    height: 10%;
    justify-content: flex-end;
    width: 100%;
  }

  .edit {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .my-schedule {
    padding: 1rem 4rem;
  }
`;

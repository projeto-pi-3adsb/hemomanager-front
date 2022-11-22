import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: auto;
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid var(--red);
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    background: var(--background);
    border-radius: 8px;

    padding: 4rem;

    button {
      margin: 4rem  auto;
    }

    h1 {
      font-family: "Farro", sans-serif;
      font-weight: 600;
      font-size: 2.5rem;
      margin: auto;
      gap: 2rem;
    }

    img {
      height: 20rem;
      margin: auto;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid var(--background-border-bar);
  width: 100%;
  height: 50vh;
  margin-top: 4rem;

  h4 {
    margin: 2rem auto;
    font-family: "Francois One", sans-serif;
    font-size: 1.5rem;
  }

  div {
    width: 80%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    button{
        width: 35vw;
        height: 3rem;
    }
  }
`;

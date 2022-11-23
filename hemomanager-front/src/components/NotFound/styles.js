import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: auto;
  display: flex;

  border-radius: 8px;
  border: 2px solid var(--red);

  div:nth-child(1) {
    display: flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 8px;

    img {
      height: 100%;
    }
  }

  div:nth-child(2) {
    display: flex;
    height: 50%;
    width: 75%;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    gap: 1rem;

    h1 {
      font-size: 8rem;
      font-weight: bold;
      color: var(--background-button);
    }

    span {
      font-size: 2rem;
      font-weight: bold;
      color: var(--background-button);
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text-body);
    }

    .end-button {
      display: flex;
      height: 4rem;
      align-items: center;


      button {
        margin-left: 12rem;
        width: 13rem;
        font-size: 1.5rem;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

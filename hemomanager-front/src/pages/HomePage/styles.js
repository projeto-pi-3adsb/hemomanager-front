import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  height: 90vh;
  width: 100%;

  padding: 4rem 8rem ;

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    width: 60%;

    padding-top: 5rem;

    strong {
      z-index: 1;
      font-family: "Francois One", sans-serif;
      font-size: 2.3rem;
      margin: 6rem 0 2rem 0;
      padding: 0 3rem 0 0;
      line-height: 2.8rem;
      font-weight: 500;
    }

    p {
      text-align: left;
      font-size: 1.5rem;
      padding: 0 5rem 0 0;
      margin-bottom: 2rem;
      width: 90%;
      text-align: left;
      font-family: "Roboto", sans-serif;
    }

    &:nth-child(2) {
      padding: 0;
      width: 45%;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-content: center;

      img {
        z-index: 1;
        height: 600px;
      }
    }
  }

  button {
    height: 3rem;
    width: 10rem;
    font-size: 1rem;
  }
`;

export const ContainerSecondary = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 4rem;

  img {
    z-index: 8;
    display: flex;
    justify-items: flex-end;
    height: 740px;
  }

  h1 {
    align-self: flex-start;
    display: flex;
    align-items: center;

    color: var(--red-blood);

    img {
      height: 2rem;
    }
  }

  div {
    width: 30%;
    display: flex;
    align-items: center;

    :nth-child(2) {
      width: 70%;
      height: 70%;
      align-self: flex-start;
      flex-direction: column;
      justify-content: center;

      strong {
        font-size: 2.3rem;
        margin: 0 auto;
        width: 105%;
        font-family: "Francois One", sans-serif;
      }

      p {
        text-align: left;
        font-size: 1.5rem;
        align-self: flex-end;
        margin-bottom: 2rem;
        margin: 2rem 0 1rem 0;
        font-family: "Roboto", sans-serif;
      }

      button {
        margin: 1rem 0;
        align-self: flex-start;
      }
    }
  }

  button {
    height: 3rem;
    width: 10rem;
    font-size: 1rem;
  }
`;

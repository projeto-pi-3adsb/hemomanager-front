import styled from "styled-components";

export const FireImg = styled.div`
  z-index: 7;
  justify-content: center;
  box-sizing: content-box;
  display: flex;
  width: 10%;
  align-items: center;

  img {
    height: 30rem;
    rotate: 20%;
    transform: rotate(270deg);
    position: absolute;
    margin-bottom: 30rem;
    justify-content: center;
    z-index: 9;
  }
`;

export const FireAbout = styled.div`
  justify-content: center;
  box-sizing: content-box;
  display: flex;
  align-items: center;

  img {
    z-index: 1;
    rotate: 20%;
    transform: rotate(0deg);
    position: absolute;
    margin-bottom: 30rem;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;

  img {
    max-height: 550px;
    padding: 1rem;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    color: white;
    align-items: center;

    strong {
      font-family: "Francois One";
      color: var(--black);
      margin: 1rem 3rem;
      font-size: 2.5rem;
      min-width: 100%;
      z-index: 5;
    }

    p {
      z-index: 5;
      color: var(--black);
      margin: 1rem 3rem;
      max-width: 75%;
      font-size: 1.5rem;
      align-self: flex-start;
    }

    button {
      align-self: flex-start;
      margin: 1rem 3rem;
    }
  }
`;

export const About = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 4rem;

  img {
    display: flex;
    justify-items: flex-end;
    height: 740px;
  }

  h1 {
    z-index: 10;
    align-self: flex-start;
    display: flex;
    align-items: center;

    color: var(--red-blood);

    img {
      max-height: 2rem;
    }
  }

  div {
    z-index: 4;
    width: 30%;
    display: flex;
    align-items: center;
    box-sizing: content-box;
    margin: 1rem;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      img {
        max-height: 700px;
      }
    }

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

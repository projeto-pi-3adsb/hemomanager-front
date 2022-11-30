import styled from "styled-components";

import handsImg from "../../assets/hands.jpg";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: red;
`;

export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 35%;
  background-image: url(${handsImg});
  background-repeat: no-repeat;
  background-size: cover;

  header {
    button {
      margin: 1rem 0 0 1rem;
      img {
        color: var(--shape);
      }
    }
  }

  div {
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
      height: 100%;
      width: 35%;

      li {
        display: flex;
        justify-content: center;
        color: var(--red);
        height: 50%;
        align-items: center;
        font-family: "Farro", sans-serif;
        font-size: 1.3rem;
        font-weight: bold;
        border-radius: 1rem 0 0 1rem;
        background: var(--background);
        cursor: pointer;
      }

      .non-focused {
        background: transparent;
      }
    }
  }

  .drop-missing {
    display: flex;
    justify-content: flex-start;

    h1 {
      display: flex;
      text-align: start;
      color: var(--shape);
      height: 50%;
      width: 45%;
      font-family: "Francois One", sans-serif;
      align-items: center;
      font-size: 2rem;
      padding-left: 1rem;
    }
  }
`;

export const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 65%;
  background: var(--background);
  align-items: center;

  h1 {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    font-size: 2.5rem;
    font-family: "Farro", sans-serif;
    margin-bottom: 2rem;
    color: var(--text-body);
  }

  .error {
    width: 90%;
    margin: 2rem auto;
    margin-top: -3rem;
    font-size: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    color: var(--shape);
    padding: 1rem;
    text-align: center;
    background-color: var(--red);
  }

  section {
    display: flex;
    justify-content: end;
    width: 80%;
  }

  .center {
    display: flex;
    justify-content: center;
  }
`;

export const Link = styled.div`
  text-align: center;
  margin: 1rem;
  color: var(--text-body);

  span {
    color: var(--background-button);
    font-weight: 600;
    cursor: pointer;
  }
`;

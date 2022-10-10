import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;

  padding: 0 8rem;

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100vh;
    width: 60%;


    padding-top: 5rem;

    strong {
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

    :nth-child(2) {

      padding: 0;
      width: 45%;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-content: center;

      img {
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

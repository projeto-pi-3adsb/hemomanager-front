import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: auto;
  height: 100vh;
  width: 80vw;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 100;
      color: var(--red-blood);
      font-size: 1.2rem;
    }
  }

  img {
    align-self: flex-start;
    height: 4rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Title = styled.strong`
  margin-top: 4rem;
  font-family: "Francois One", sans-serif;
  font-size: 35px;
  font-weight: 400;
  color: var(--black);
`;

export const InputGroup = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 6rem;
  border-radius: 0.5rem;
  border: 1px solid var(--background-border-bar);
  width: 100%;
  height: 85vh;
  margin-top: 2rem;

  div {
    display: flex;
    border-bottom: 2px solid var(--input-border);
    margin-top: 2rem;

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

export const BoxUpload = styled.div`
  padding: 0 3rem;
  border-radius: 0.5rem;
  border: 1px solid var(--background-border-bar);
  width: 100%;
  height: 90vh;
  margin-top: 4rem;

`
export const Upload = styled.div`
    justify-content: center;
    width: 50%;
    height: 40vh;
    margin-top: 20px;
    padding: 0 3rem;
    border-radius: 0.5rem;
    border: 1px solid var(--background-border-bar);
    display: flex;

    h2 {
    margin-top: 20px;
    color: #666666;
  }
`

export const BoxList = styled.div`
  margin-top: 30px;
  width: 100%;

  table {
      inline-size: 110%;
      border-spacing: 0 0.5rem;

      th {
        color: var(--shape);
        background-color: var(--background-button);
        font-weight: 400;
        padding: 1rem 2rem;
        line-height: 1.8rem;
        text-align: center;
        border-radius: 8px 8px 8px 8px;
      }

      td {
        padding: 1rem 2rem;
        line-height: 1.8rem;
        background: var(--background-option-bar);
        color: var(--background-button);
        border-radius: 0.25rem;
        text-align: center;
        flex-wrap: wrap;
        display: flex;
      }
    }
  `;

  export const BoxButton = styled.div`
    margin-top: 20px;
    margin-left: 30px;
    background-color: brown;
    width: 50%;

    div {
      justify-content: right;
      display: flex;
    }
    
  `


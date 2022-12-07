import styled from "styled-components";

import mapImg from "../../assets/map.png";

export const Container = styled.div`
  height: 25rem;
  width: 100%;
  flex: 1;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding: 2rem;

  div {
    box-sizing: content-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8px;
    border: 2px solid var(--background-border-bar);

    button {
      margin: auto;
      width: 12rem;
      font-size: 0.8rem;
    }

    h1 {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      font-family: "Francois One", sans-serif;
      font-size: 1.2rem;
      background-color: var(--background-button);
      border-radius: 4px;
      color: var(--shape);
    }

    p {
      display: flex;
      flex-direction: column;
      justify-content: end;
      background-image: url(${mapImg});
      background-repeat: no-repeat;
      background-size: 150px;
      background-position: center;
      height: 50%;
      justify-content: center;
      margin: auto;

      span {
        background: #cb0111;
        color: var(--shape);
        font-size: 1rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        border-radius: 8px;
      }
    }
  }
`;

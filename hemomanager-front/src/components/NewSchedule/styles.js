import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  .select-hemocenter {
    display: flex;
    align-items: center;
    height: 50%;
    width: 100%;
    gap: 1rem;
  }

  .select {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 3rem;
    gap: 1rem;

    h1 {
      display: flex;
      align-items: center;
      justify-content: start;

      height: 3rem;
      font-size: 1.5rem;
    }

    select {
      margin: auto;
      width: 50%;
      height: 3rem;
      border-radius: 8px;
      margin: 0 0 10rem;
      font-size: 1.2rem;
    }
  }

  .schedule-avaliable {
    display: flex;
    align-items: center;
    height: 50%;
    width: 100%;
    flex-direction: column;
    padding: 0 2rem;
  }
`;

export const Confirm = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin: auto;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;
  border-radius: 16px;
  align-items: center;
  width: 10rem;
  padding: 0.5rem;
  color: var(--shape);
  box-sizing: content-box;
  background: var(--background-button);

  h1 {
    margin: auto;
    height: 2rem;
    justify-content: start;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
  }

  h2 {
    margin: 0.8rem 0;
    height: 2rem;
    font-size: 2rem;
    justify-content: start;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: normal;
    
  }

  p {
    flex-wrap: wrap;
    box-sizing: content-box;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: start;
    padding: 0rem;
    margin: 0.5rem auto;
  }

  div {
    margin: 0.3rem 0;
    width: 100%;
    display: flex;
    justify-content: end;

    input[type="radio"] {
      accent-color: black;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background-color: white;
      border: none;
    }
  }
`;

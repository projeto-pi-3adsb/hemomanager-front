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
      height: 3rem;
      font-size: 1.5rem;
    }

    select {
      width: 100%;
      height: 3rem;
      border-radius: 8px;
      margin: 0 0 10rem;
    }
  }

  .info {
    inline-size: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    table {
      inline-size: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: var(--shape);
        background-color: var(--background-button);
        font-weight: 400;
        padding: 1rem 2rem;
        line-height: 1.8rem;
        text-align: center;

        &:first-child {
          border-radius: 8px 0 0 8px;
        }

        &:last-child {
          border-radius: 0 8px 8px 0;
        }
      }

      td {
        padding: 1rem 2rem;
        line-height: 1.8rem;
        border: 0;
        background: var(--background-option-bar);
        color: var(--background-button);
        border-radius: 0.25rem;
        text-align: center;

        &:first-child {
          border-radius: 8px 0 0 8px;
        }
        &:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }

  .schedule-avaliable {
    display: flex;
    align-items: center;
    height: 50%;
    width: 100%;

    padding: 0 4rem;
  }
`;

export const Box = styled.div`
  justify-content: center;
  height: 10rem;
  border-radius: 16px;
  width: 12rem;
  padding: 1.2rem 1rem;
  color: var(--shape);
  background: var(--background-button);

  h1 {
    margin: auto;
    height: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-weight: normal;
    }
  }

  section {
    h1 {
      font-size: 2rem;
      margin: 1rem auto;
      height: 2rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      font-weight: normal;
      gap: 0.5rem;

      span {
        font-weight: normal;
      }
    }
  }

  input {
    background: #f5f5f5;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-left: 8rem;
    color: var(--black);
    border: none;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

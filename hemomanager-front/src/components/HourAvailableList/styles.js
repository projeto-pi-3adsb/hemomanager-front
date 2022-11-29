import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 100%;
  margin: auto;

  h1 {
    display: flex;
    justify-content: end;

    button {
      width: 12rem;
      margin: 2rem 0 2.5rem 0;
    }
  }

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
    }
  }
`;

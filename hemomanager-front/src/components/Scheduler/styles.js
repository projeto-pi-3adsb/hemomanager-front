import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;

    ::-webkit-scrollbar {
      background: var(--background-begie);
      border-radius: 0.25rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.25rem;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--background-button);
    }
    overflow: auto;
    height: 80vh;
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

      &:first-child {
        border-radius: 8px 0 0 8px;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;

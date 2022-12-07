import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  padding-top: 5rem;
  flex-direction: column;

  align-items: center;

  div {
    gap: 1rem;
  }

  span {
    height: 1rem;
  }

  .not-found {
    margin: auto;
    background-color: var(--red);
    padding: 1rem;
    border-radius: 8px;
    color: var(--shape);
    display: flex;
    justify-content: center;
  }

  
`;

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 70%;
    padding: 2rem;
    border: 1px solid var(--background-border-bar);
    border-radius: 8px;
    margin-bottom: 1rem;
    padding-top: 3rem;
    overflow-x: hidden;

    input {
      min-width: 100%;
      height: 1rem;
      padding-left: 0;
      color: var(--black);
    }
  }
  `;

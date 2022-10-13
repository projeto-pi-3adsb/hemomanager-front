import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  position: fixed;
  z-index: 9;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  background: var(--background);

  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Francois One", sans-serif;

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;

    li {
      cursor: pointer;
    }
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

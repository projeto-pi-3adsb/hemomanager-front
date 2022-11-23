import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  position: fixed;
  z-index: 7;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  background: var(--background);

  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Farro", sans-serif;

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;

    a {
      text-decoration: none;
      color: var(--black);

      &:hover{
        color: var(--red);
        transition: 0.2s;
      }
    }

    img {
      z-index: 10;
    }

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

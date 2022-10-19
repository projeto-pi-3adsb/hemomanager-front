import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  height: 85vh;
  width: 80vw;
  display: block;
`;

export const Header = styled.header`
  display: flex;
  justify-content: start;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
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
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Title = styled.strong`
  margin-top: 4rem;
  font-family: "Francois One", sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: var(--black);
`;

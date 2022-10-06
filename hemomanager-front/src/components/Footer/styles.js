import styled from "styled-components";

export const Container = styled.footer`
  padding: 3rem 10rem;
  height: 80vh;
  background: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Contato = styled.div`
  padding: 0rem 0.8rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  h1 {
    font-size: 1.4rem;
    color: var(--text-white);
    font-weight: 400;
  }
`;

export const ContatoGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;
  gap: 8.5rem;
  margin-top: 1.6rem;
  div {
    margin-top: 0.6rem;
    color: var(--background);
    display: flex;
    gap: 1.2rem;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    &:nth-child(2) {
      text-decoration: underline;
    }
    img {
      height: 3.2rem;
    }
  }
`;

export const BreakLine = styled.div`
  width: 100%;
  height: 0.1rem;
  border-radius: 1rem;
  background: var(--text-white);
  margin: 3.5rem auto;
`;

export const MenuFooter = styled.div`
  margin: 0 ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    height: 10rem;
    margin-bottom: 2.5rem;
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    height: 4rem;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      gap: 5rem;
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-white);
    }
  }
  button {
    border: none;
    color: var(--text-white);
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: var(--background-button);
    width: 10rem;
    height: 48px;
  }
`;

export const Reservados = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gray);
  img{
    height: 3rem;
    cursor: pointer;
  }
  span {
   
    &:nth-child(2) {
      font-weight: 600;
      cursor: pointer;
    }
    &:nth-child(3) {
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
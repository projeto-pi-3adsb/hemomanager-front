import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;

  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Farro", sans-serif;
 
  ul {
    
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;



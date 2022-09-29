import React from "react";
import {
  BreakLine,
  Container,
  Contato,
  ContatoGroup,
  MenuFooter,
} from "./styles";
import emailIcon from "../../assets/email.svg";
import telefoneIcon from "../../assets/telefone.svg";
import logoImg from "../../assets/logotypes/logo-3.svg";

export function Footer() {
  return (
    <Container>
      <Contato>
        <h1>Entre em contato conosco através</h1>
        <ContatoGroup>
          <div>
            <img src={telefoneIcon} alt="" />
            <span>+55 (11) 5008-8663</span>
          </div>
          <div>
            <img src={emailIcon} alt="" />
            <span>help@hemomanager.com</span>
          </div>
        </ContatoGroup>
      </Contato>
      <BreakLine />
      <MenuFooter>
        <img src={logoImg} alt="" />
        <div>
          <ul>
            <li>Homepage</li>
            <li>Sobre nos</li>
            <li>Noticias</li>
            <li>Depoimentos</li>
          </ul>
        </div>
        <button>Doar agora</button>
      </MenuFooter>
    </Container>
  );
}

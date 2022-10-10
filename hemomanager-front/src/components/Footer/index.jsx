import React from "react";
import {
  BreakLine,
  Container,
  Contato,
  ContatoGroup,
  MenuFooter,
  Reservados,
} from "./styles";
import emailIcon from "../../assets/email.svg";
import telefoneIcon from "../../assets/telefone.svg";
import logoImg from "../../assets/logotypes/logo-3.svg";
import arrowImg from "../../assets/up-arrow.svg";
import { Link } from "react-router-dom";

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
            <Link>Homepage</Link>
            <Link>Sobre nós</Link>
            <Link>Notícias</Link>
            <Link>Depoimentos</Link>
          </ul>
        </div>
        <button>Doar agora</button>
      </MenuFooter>
      <Reservados>
        <span>@2022 HEMOMANAGER. Todos os direitos reservados</span>
        <span>Política de privacidade</span>
        <span>Cookies</span>
        <img src={arrowImg} alt="" />
      </Reservados>
    </Container>
  );
}

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
import { Navigate, useNavigate } from "react-router-dom";

export function Footer(props) {
  const navigate = useNavigate();

  return (
    <Container id={props.id}>
      <Contato>
        <h1>Entre em contato conosco</h1>
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
            <a href="#home">Homepage</a>
            <a href="#about">Sobre nós</a>
            <a onClick={() => navigate("/video")}>Notícias</a>
            <a href="#home">Orientações</a>
          </ul>
        </div>
        <button onClick={()=> navigate("/area-usuario")}>Doar agora</button>
      </MenuFooter>
      <Reservados>
        <span>@2022 HEMOMANAGER. Todos os direitos reservados</span>
        <span>Política de privacidade</span>
        <span>Cookies</span>
        <a href={props.start}>
          <img src={arrowImg} alt="" />
        </a>
      </Reservados>
    </Container>
  );
}

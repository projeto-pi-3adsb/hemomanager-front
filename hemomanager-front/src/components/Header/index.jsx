import React from "react";
import { BorderlessButton } from "../BorderlessButton";
import { ButtonGroup, Header } from "./styles";
import logo from "../../assets/logotypes/logo-2.png";

import { Link } from "react-router-dom";
import { ButtonComeback } from "../Footer/ButtonComeback";

export function HeaderComponent(props) {
  return (
    <Header>
      <Link to="/">{props.button ? <ButtonComeback /> : false}</Link>
      <ul>
        <img src={logo} alt="" />
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Orientações</li>
        <li>Perguntas frequentes</li>
      </ul>
      <ButtonGroup>
        <BorderlessButton text="Cadastro" />
        <BorderlessButton text="Login" />
      </ButtonGroup>
    </Header>
  );
}

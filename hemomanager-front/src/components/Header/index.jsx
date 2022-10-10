import React from "react";
import { BorderlessButton } from "../BorderlessButton";
import { ButtonGroup, Header } from "./styles";
import logo from "../../assets/logotypes/logo-2.png";
import { ButtonComeback } from "../ButtonComeback";
import { Link } from "react-router-dom";

export function HeaderComponent(props) {
  return (
    <Header>
      <Link to="/">{props.button ? <ButtonComeback /> : false}</Link>
      <ul>
        <img src={logo} alt="" />
        <li>Home</li>
        <li>Sobre nos</li>
        <li>Orientacoes</li>
        <li>Perguntas frequentes</li>
      </ul>
      <ButtonGroup>
        <BorderlessButton text="Cadastro" />
        <BorderlessButton text="Login" />
      </ButtonGroup>
    </Header>
  );
}

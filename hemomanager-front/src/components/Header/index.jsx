import React, { useState } from "react";
import { BorderlessButton } from "../BorderlessButton";
import { ButtonGroup, HeaderStyle } from "./styles";
import logo from "../../assets/logotypes/logo-2.png";

import { Link } from "react-router-dom";
import { ButtonComeback } from "../Footer/ButtonComeback";

export function HeaderComponent(props) {
  
  const [colorMenu, setColorMenu] = useState(true);

  return (
    <HeaderStyle>
      <Link to="/">{props.button ? <ButtonComeback /> : false}</Link>

      <ul>
        <img src={logo} alt="" />
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Orientações</li>
        <li>Perguntas frequentes</li>
        {console.log(colorMenu)}
      </ul>
      <ButtonGroup>
        <BorderlessButton text="Cadastro" />
        <BorderlessButton text="Login" />
      </ButtonGroup>
    </HeaderStyle>
  );
}

import React, { useState } from "react";
import { BorderlessButton } from "../BorderlessButton";
import { ButtonGroup, HeaderStyle } from "./styles";
import logo from "../../assets/logotypes/logo-2.png";

import { Link } from "react-router-dom";
import { ButtonComeback } from "../Footer/ButtonComeback";

export function HeaderComponent(props) {
  const [colorMenu, setColorMenu] = useState(false);

  return (
    <HeaderStyle>
      <Link to="/">{props.button ? <ButtonComeback /> : false}</Link>
      <ul>
        <img src={logo} alt="" />
        <li>
          <a
            href={props.home}
            className={colorMenu ? "menuSelected" : "#1111"}
            onClick={() => setColorMenu(true)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href={props.about}
            className={colorMenu ? "menuSelected" : "#1111"}
            onClick={() => setColorMenu(true)}
          >
            Sobre nós
          </a>
        </li>
        <li>
          <a
            href={props.orientation}
            className={colorMenu ? "menuSelected" : "#1111"}
            onClick={() => setColorMenu(true)}
          >
            Orientações
          </a>
        </li>
        <li>
          <a
            href={props.question}
            className={colorMenu ? "menuSelected" : "#1111"}
            onClick={() => setColorMenu(true)}
          >
            Perguntas frequentes
          </a>
        </li>
      </ul>
      <ButtonGroup>
        <BorderlessButton text="Cadastro" />
        <BorderlessButton text="Login" />
      </ButtonGroup>
    </HeaderStyle>
  );
}

import { ButtonGroup, HeaderStyle } from "./styles";
import logo from "../../assets/logotypes/logo-2.png";
import { ButtonComeback } from "../shared/ButtonComeback";
import { Link } from "react-router-dom";
import { BorderlessButton } from "../shared/BorderlessButton";

export function HeaderComponent(props) {
  return (
    <HeaderStyle>
      <Link to="/">{props.button ? <ButtonComeback /> : false}</Link>
      <ul>
        <img src={logo} alt="" />
        <li>
          <a href={props.home}>Home</a>
        </li>
        <li>
          <a href={props.about}>Sobre nós</a>
        </li>
        <li>
          <a href={props.orientation}>Orientações</a>
        </li>
        <li>
          <a href={props.contact}>Contato</a>
        </li>
      </ul>
      <ButtonGroup>
        <BorderlessButton text="Cadastro" />
        <BorderlessButton text="Login" />
      </ButtonGroup>
    </HeaderStyle>
  );
}

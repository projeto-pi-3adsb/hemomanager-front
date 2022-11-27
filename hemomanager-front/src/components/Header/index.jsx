import { ButtonGroup, HeaderStyle } from "./styles";
import logo from "../../assets/logotypes/logo-2.png";
import { ButtonComeback } from "../shared/ButtonComeback";
import { Link, useNavigate } from "react-router-dom";
import { BorderlessButton } from "../shared/BorderlessButton";

export function HeaderComponent(props) {
  const navigate = useNavigate();

  function doGoToLogin() {
    navigate("/area-usuario");
    sessionStorage.setItem("page", 2);
  }

  function doGoToRegister() {
    navigate("/area-usuario");
    sessionStorage.setItem("page", 1);
  }

  return (
    <HeaderStyle>
      <Link to="/hemomanager-front">
        {props.button ? <ButtonComeback /> : false}
      </Link>
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
        <BorderlessButton
          doSomething={() => doGoToRegister()}
          text="Cadastro"
        />
        <BorderlessButton doSomething={() => doGoToLogin()} text="Login" />
      </ButtonGroup>
    </HeaderStyle>
  );
}

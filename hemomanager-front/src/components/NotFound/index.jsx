import { Container } from "./styles";
import bloodBagImg from "../../assets/blood-bag.svg";
import { BorderlessButton } from "../shared/BorderlessButton";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div>
          <h1>
            <p>Ops, parece que algo deu errado !</p>
          </h1>
          <img src={bloodBagImg} alt="" />
          <h1>Página não encontrada!</h1>
          <BorderlessButton text="Retornar" method={() => navigate(-1)} />
        </div>
      </Container>
    </>
  );
}

import { Container } from "./styles";
import notFoundImg from "../../assets/not-found.svg";
import { BorderlessButton } from "../shared/BorderlessButton";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div>
          <img src={notFoundImg} alt="" />
        </div>
        <div>
          <h1>404</h1>
          <span>Ooops...</span>
          <p>A página que você procura não existe</p>
          <div className="end-button">
            <BorderlessButton text="VOLTAR" doSomething={() => navigate(-1)} />
          </div>
        </div>
      </Container>
    </>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { ButtonComeback } from "../../components/shared/ButtonComeback";
import { Container, Link, LoginArea, Welcome } from "../LoginPage/styles";

export function LoginPage({ pageSeleced }) {
  const [page, setPage] = useState(1 || pageSeleced);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Welcome>
          <header>
            <ButtonComeback method={() => navigate(-1)} white />
          </header>
          <div>
            <ul>
              <li
                onClick={() => setPage(1)}
                className={page === 2 ? "non-focused" : ""}
              >
                Cadastro
              </li>
              <li
                onClick={() => setPage(2)}
                className={page === 1 ? "non-focused" : ""}
              >
                Login
              </li>
            </ul>
          </div>
          <div className="dropMissing">
            <h1>VOCÊ É A GOTA QUE FALTA</h1>
          </div>
        </Welcome>
        <LoginArea>
          <h1>{page === 1 ? "NOVO CADASTRO" : "BEM VINDO NOVAMENTE! "}</h1>
          {page === 1 ? <Register /> : <Login />}
          {page === 2 ? (
            <Link>
              Ainda não possui cadastro? Clique em{" "}
              <span onClick={() => setPage(1)}>CADASTRO</span> e vá diretamente
              para tela de cadastro.
            </Link>
          ) : (
            ""
          )}
          <section className={page === 2 ? "center" : ""}>
            <BorderlessButton text={page === 1 ? "CADASTRAR" : "LOGIN"} />
          </section>
        </LoginArea>
      </Container>
    </>
  );
}

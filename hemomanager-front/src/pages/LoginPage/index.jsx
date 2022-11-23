import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";

import { ProfileOption } from "../../components/ProfileOption";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { ButtonComeback } from "../../components/shared/ButtonComeback";
import { Container, Link, LoginArea, Welcome } from "../LoginPage/styles";
import { RegisterHemocenter } from "../../components/RegisterHemocenter";
import { RegisterDonor } from "../../components/RegisterDonor";

export function LoginPage({ pageSelected }) {
  const [page, setPage] = useState(1 || pageSelected);
  const [user, setUser] = useState(1);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipNumber, setZipNumber] = useState(0);
  const [startOperation, setStartOperation] = useState(0);
  const [endOperation, setEndtOperation] = useState(0);

  const hemocenter = {
    name,
    cnpj,
    email,
    password,
    zipCode,
    zipNumber,
    startOperation,
    endOperation,
  };

  function doSaveNewHemocenter(event) {
    event.preventDefault();
  }

  function doSaveNewDonor(event) {
    event.preventDefault();
  }

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
          <div className="drop-missing">
            <h1>VOCÊ É A GOTA QUE FALTA</h1>
          </div>
        </Welcome>
        <LoginArea>
          <h1 className={page === 1 ? "" : "center"}>
            {page === 1
              ? user === 1
                ? "NOVO CADASTRO DE DOADOR"
                : "NOVO CADASTRO DE HEMOCENTRO"
              : "BEM VINDO NOVAMENTE!"}
            {page === 1 ? (
              <ProfileOption
                method1={() => setUser(1)}
                method2={() => setUser(2)}
              />
            ) : (
              " "
            )}
          </h1>

          {page === 1 ? (
            user === 2 ? (
              <RegisterHemocenter
                name={() => setName()}
                email={() => setEmail()}
                cnpj={() => setCnpj()}
                password={() => setPassword()}
                method={() => doSaveNewHemocenter}
              />
            ) : (
              <RegisterDonor method={() => doSaveNewDonor} />
            )
          ) : (
            <Login />
          )}

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
            <BorderlessButton
              type="submit"
              method={
                doSaveNewHemocenter 
              }
              text={page === 1 ? "CADASTRAR" : "LOGIN"}
            />
          </section>
        </LoginArea>
      </Container>
    </>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login";

import { ProfileOption } from "../../components/ProfileOption";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { ButtonComeback } from "../../components/shared/ButtonComeback";
import { Container, Link, LoginArea, Welcome } from "../LoginPage/styles";
import { RegisterHemocenter } from "../../components/RegisterHemocenter";
import { RegisterDonor } from "../../components/RegisterDonor";
import { api } from "../../api";

export function LoginPage({ pageSelected }) {
  const [page, setPage] = useState(1 || pageSelected);
  const [userType, setUserType] = useState(1);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipNumber, setZipNumber] = useState(0);
  const [qttySimultServices, setQttyServices] = useState(0);
  const [number, setNumber] = useState(0);
  const [phone, setPhone] = useState(0);
  const [cpf, setCpf] = useState(0);
  const [startOperation, setStartOperation] = useState(0);
  const [endOperation, setEndOperation] = useState(0);
  const [sex, setSex] = useState(0);

  async function doSaveNewHemocenter() {
    const hemocenter = {
      name,
      cnpj,
      email,
      password,
      zipCode,
      zipNumber,
      startOperation,
      endOperation,
      qttySimultServices,
    };
    console.log("hemocente", hemocenter);

    await api
      .post("hemocenter", hemocenter)
      .then(() => {
        <h4>Success !</h4>;

        setPage(2);
      })
      .catch((err) => {
        alert("error: ", err);
      });
  }

  function doSaveNewDonor() {
    const donor = {
      name,
      cpf,
      email,
      birthDate,
      phone,
      password,
      sex,
    };

    console.log(donor);

    api
      .post("donors/", donor)
      .then((data) => {
        setPage(2);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  function doLogin() {
    const userLogin = {
      email,
      password,
    };

    const user = {
      id,
      name,
      email,
    };

    api
      .post(userType === 2 ? "hemocenter/current" : "donor/current", userLogin)
      .then((resp) => {
        navigate("/dashboard");
        sessionStorage.setItem("name", resp.data.name);
        sessionStorage.setItem("email", resp.data.email);
        sessionStorage.setItem("password", resp.data.password);
        console.log(resp);
      })
      .catch((erro) => {
        alert("deu erro", erro);
      });

    console.log(sessionStorage.getItem("data".toString));
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
          <h1>
            {page === 1
              ? userType === 1
                ? "NOVO CADASTRO DE DOADOR"
                : "NOVO CADASTRO DE HEMOCENTRO"
              : userType === 1
              ? "BEM VINDO DOADOR"
              : "SEJA BEM VINDO!"}
            {
              <ProfileOption
                method1={() => setUserType(1)}
                method2={() => setUserType(2)}
              />
            }
          </h1>

          {page === 1 ? (
            userType === 2 ? (
              <RegisterHemocenter
                setName={setName}
                setEmail={setEmail}
                setCnpj={setCnpj}
                setZipNumber={setZipNumber}
                setZipCode={setZipCode}
                setPassword={setPassword}
                setQtty={setQttyServices}
                setStartOperation={setStartOperation}
                setEndOperation={setEndOperation}
                setQttyServices={setQttyServices}
              />
            ) : (
              <RegisterDonor
                setName={setName}
                setEmail={setEmail}
                setCpf={setCpf}
                setPhone={setPhone}
                setBirthDate={setBirthDate}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                setSex={setSex}
              />
            )
          ) : (
            <Login
              typeInputPassword="password"
              setEmail={setEmail}
              setPassword={setPassword}
            />
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
              doSomething={
                page === 1
                  ? userType === 2
                    ? () => doSaveNewHemocenter()
                    : () => doSaveNewDonor()
                  : () => doLogin()
              }
              text={page === 1 ? "CADASTRAR" : "LOGIN"}
            />
          </section>
        </LoginArea>
      </Container>
    </>
  );
}

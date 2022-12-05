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
import { MaxDialog } from "../../components/shared/Dialog";

export function LoginPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(
    sessionStorage.getItem("page") === "1" ? 1 : 2
  );
  
  const [userType, setUserType] = useState(
    sessionStorage.getItem("userType") === "1" ? 1 : 2
  );

  const [userType, setUserType] = useState(
    sessionStorage.getItem("userType") === "1" ? 1 : 2
  );

  const [error, setError] = useState(false);

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
  const [sex, setSex] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  function doIsOpenModalTrue() {
    console.log("TO aberto");
    setError(false);
    setIsOpen(true);
  }

  function doIsOpenModalFalse() {
    console.log("TO FECHADO");
    setIsOpen(false);
  }

  function validateError() {
    setError(true);
    setTimeout(() => setError(false), 3000);
  }

  function doSaveNewHemocenter() {
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

    api
      .post("/hemocenter", hemocenter)
      .then(() => {
        setPage(2);
        validateError();
        console.table(hemocenter);
      })
      .catch((err) => {
        validateError();
      });
  }

  function doSaveNewDonor() {
    const donor = {
      name,
      email,
      password,
      cpf,
      birthDate,
      sex,
      phone,
      valid: false,
    };

    api
      .post("/donor", donor)
      .then(() => {
        setPage(2);
        console.table(donor);
      })
      .catch((err) => {
        validateError();
        console.log("ERROR STATUS: ", err.data.status);
      });
  }

  function doLogin() {
    const userLogin = {
      email,
      password,
    };

    api
      .post(
        userType === 2 ? "/hemocenter/current/" : "donor/current",
        userLogin
      )
      .then((resp) => {
        doIsOpenModalTrue();

        setTimeout(() => {
          userType === 2 ? navigate("/dashboard") : navigate("/perfil-usuario");
        }, 2000);

        const user = resp.data;

        if (userType === 1) {
          sessionStorage.setItem("id", user.id);
          sessionStorage.setItem("user", user.name);
          sessionStorage.setItem("password", user.password);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("birth", user.birthDate);
          sessionStorage.setItem("cpf", user.cpf);
          sessionStorage.setItem("phone", user.phone);
          sessionStorage.setItem("sex", user.sex);
          sessionStorage.setItem("validDonor", false);
        }

        if (userType === 2) {
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("user", user.name);
          sessionStorage.setItem("password", user.password);
          sessionStorage.setItem("id", user.uuid);
          sessionStorage.setItem("cnpj", user.cnpj);
          sessionStorage.setItem("ZipCode", user.zipCode);
          sessionStorage.setItem("ZipNumber", user.zipNumber);
          sessionStorage.setItem("startOperation", user.startOperation);

          sessionStorage.setItem("endOperation", user.endOperation);
          sessionStorage.setItem("services", user.qttySimultServices);
        }
      })
      .catch((erro) => {
        validateError();
        console.log("Error:", erro);
      });
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
          {page === 2 && error ? (
            <h1 className={error ? "error" : ""}>
              {error ? "Email ou senha inválidos, tente novamente!" : ""}
            </h1>
          ) : (
            ""
          )}
          <h1>
            {page === 1
              ? userType === 1
                ? "NOVO CADASTRO DE DOADOR"
                : "NOVO CADASTRO DE HEMOCENTRO"
              : userType === 1
              ? "BEM VINDO DOADOR!"
              : "BEM VINDO GESTOR!"}

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
                error={error}
              />
            )
          ) : (
            <Login
              typeInputPassword="password"
              placeholderInput="Email"
              placeholderInputPassword="Senha"
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
        <MaxDialog isOpen={isOpen} isClose={doIsOpenModalFalse} />
      </Container>
    </>
  );
}

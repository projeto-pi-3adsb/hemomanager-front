import { useState } from "react";
import { Avatar, Container, Exit, MainArea, Menu, Profile } from "./styles";

import { ArrowCircleRight24Filled } from "@fluentui/react-icons";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Dashboard } from "../../components/Dashboard";

import { Schaduler } from "../../components/Scheduler";
import { HourAvailableList } from "../../components/HourAvailableList";
import { RegisterModal } from "../../components/RegisterModal";

import { ManagerMenu } from "../../components/ManagerMenu";

import { api } from "../../api";
import { StockList } from "../../components/StockList";
import { useNavigate } from "react-router";
import { EditProfileManager } from "../../components/editProfileManager";
import { BorderlessButton } from "../../components/shared/BorderlessButton";

Chart.register = () => (
  // eslint-disable-next-line no-sequences
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

export function ProfilePage() {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  const [bloodType, setBloodType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(0);

  const [error, setError] = useState(false);
  const [send, setSend] = useState(null);

  const id = sessionStorage.getItem("id");
  const [name, setName] = useState(sessionStorage.getItem("user"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [password, setPassword] = useState(sessionStorage.getItem("password"));
  const [cpnj, setCnpj] = useState(sessionStorage.getItem("cnpj"));
  const [zipCode, setZipCode] = useState(sessionStorage.getItem("zipCode"));
  const [zipNumber, setZipNumber] = useState(
    sessionStorage.getItem("zipNumber")
  );
  const [startOperation, setStartOperation] = useState(
    sessionStorage.getItem("startOperation")
  );
  const [endOperation, setEndOperation] = useState(
    sessionStorage.getItem("endOperation")
  );
  const [qttySimultServices, setQttySimultServices] = useState(
    sessionStorage.getItem("qttySimultServices")
  );

  const [cep, setCep] = useState(sessionStorage.getItem("cep"));
  const [sex, setSex] = useState(sessionStorage.getItem("sex"));

  const user = {
    uuid: sessionStorage.getItem("id"),
    name: sessionStorage.getItem("user"),
    email: sessionStorage.getItem("email"),
  };

  const [isEdit, setIsEdit] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  function doFocused() {
    setIsFocused(true);
  }

  function doWithoutFocused() {
    setIsFocused(false);
  }

  function validateError() {
    setError(true);
    setSend(false);
    setTimeout(() => setError(null), 3000);
  }

  function validateSuccess() {
    setSend(true);
    setError(true);
    setTimeout(() => setError(null), 3000);
  }

  function doIsOpenModalTrue() {
    console.log("TO aberto");
    setIsOpenModal(true);
  }

  function doIsOpenModalFalse() {
    console.log("TO FECHADO");
    setIsOpenModal(false);
  }

  function doRegisterNewBag() {
    const bag = {
      bloodType,
      collectionDate: date,
    };

    api
      .post(`/stock/${user.uuid}`, bag)
      .then((response) => {
        validateSuccess();

        console.table(bag);
      })
      .catch((err) => {
        validateError();
        console.log(err.status);
      });
  }

  function doRegisterNewHour() {
    const hour = {
      hemocenterId: user.uuid,
      shcduleDate: date,
      scheduleTime: time,
    };

    console.log("Current Hour: ", hour);

    api
      .post(`hemocenter/scheduleHemocenter/`, hour)
      .then(() => {
        validateSuccess();
      })
      .catch((error) => {
        validateError();
        console.log("Erro: ", error);
      });
  }

  function logOut() {
    sessionStorage.clear();
    sessionStorage.setItem("page", 2);
    navigate("/area-usuario");
  }

  const labels2 = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return (
    <Container>
      <Profile>
        <Avatar>
          <img src="https://www.github.com/samuckqadev.png" alt="" />
          <h1>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </h1>
        </Avatar>
        <Menu>
          <ul>
            <ManagerMenu
              method1={() => setPage(1)}
              method2={() => setPage(2)}
              method3={() => setPage(3)}
              method4={() => setPage(4)}
              method5={() => setPage(5)}
              method6={() => setPage(6)}
            />
          </ul>
        </Menu>
        <Exit>
          <button onClick={() => logOut()}>
            <span>Sair</span>
            <i>
              <ArrowCircleRight24Filled />
            </i>
          </button>
        </Exit>
      </Profile>
      <MainArea>
        <div className="content">
          {
            <h1>
              <BorderlessButton text="EDITAR" />
            </h1>
          }
          {page === 1 ? <Dashboard labelsSex={labels2} /> : ""}
          {page === 2 ? <Schaduler /> : ""}
          {page === 3 ? <HourAvailableList isOpen={doIsOpenModalTrue} /> : ""}
          {page === 4 ? <StockList isOpen={doIsOpenModalTrue} /> : ""}
          {page === 6 ? (
            <EditProfileManager
              name={name}
              email={email}
              password={password}
              setPassword={setPassword}
              cep={cep}
              startOperation={startOperation}
              setStartOperation={setStartOperation}
              qtty={qttySimultServices}
              setQttySimultServices={setQttySimultServices}
              setEmail={setEmail}
              setName={setName}
              zipNumber={zipNumber}
              setZipNumber={setZipNumber}
              isEdit={!isEdit}
              focused={isFocused}
              setFocused={
                isFocused ? () => doWithoutFocused() : () => doFocused()
              }
              isPassword={isFocused ? "text" : "password"}
            />
          ) : (
            ""
          )}
          {
            <h2>
              <BorderlessButton text="SALVAR" />
            </h2>
          }
        </div>
      </MainArea>
      <RegisterModal
        error={error}
        setText="REGISTRAR"
        setTitle={
          page === 3
            ? "NOVO HORÁRIO"
            : "" || page === 4
            ? "NOVA BOLSA DE SANGUE"
            : ""
        }
        setType="button"
        doRegister={() =>
          page === 3 ? doRegisterNewHour() : doRegisterNewBag()
        }
        selectSomething={setBloodType}
        setDate={setDate}
        setTime={setTime}
        close={doIsOpenModalFalse}
        hourRegister={page === 3 ? true : false}
        bloodBag={page === 4 ? true : false}
        open={isOpenModal}
        send={send}
        page={page}
      />
    </Container>
  );
}

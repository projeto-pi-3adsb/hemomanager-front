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

import { ManagerMenu } from "../../components/ManagerMenu";

import { api } from "../../api";
import { StockList } from "../../components/StockList";
import { useNavigate } from "react-router";
import { EditProfileManager } from "../../components/editProfileManager";
import { RegisterModal } from "../../components/RegisterModal";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { MaxDialogBag } from "../../components/shared/DialogBag";

Chart.register = () => (
  // eslint-disable-next-line no-sequences
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

export function ProfilePage() {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [page, setPage] = useState(1);

  const [bloodType, setBloodType] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState(0);

  const [error, setError] = useState(false);
  const [send, setSend] = useState(null);

  const id = sessionStorage.getItem("id");
  const [name, setName] = useState(sessionStorage.getItem("user"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [password, setPassword] = useState(sessionStorage.getItem("password"));
  const [cpnj, setCnpj] = useState(sessionStorage.getItem("cnpj"));
  const [zipCode, setZipCode] = useState(sessionStorage.getItem("ZipCode"));
  const [zipNumber, setZipNumber] = useState(
    sessionStorage.getItem("ZipNumber")
  );
  const [startOperation, setStartOperation] = useState(
    sessionStorage.getItem("startOperation")
  );
  const [endOperation, setEndOperation] = useState(
    sessionStorage.getItem("endOperation")
  );
  const [qttySimultServices, setQttySimultServices] = useState(
    sessionStorage.getItem("services")
  );

  const [sex, setSex] = useState(sessionStorage.getItem("sex"));

  const user = {
    id,
    name,
    email,
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

  function doIsOpenModalConfirmTrue() {
    console.log("TO aberto");
    setIsOpenModalEdit(true);
  }

  function doIsOpenModalConfirmFalse() {
    console.log("TO aberto");
    setIsOpenModalEdit(false);
  }

  function doIsOpenModalTrue() {
    console.log("TO aberto");
    setIsOpenModal(true);
  }

  function doIsOpenModalFalse() {
    console.log("TO aberto");
    setScheduleDate("");
    setScheduleTime("");
    setIsOpenModal(false);
  }

  function doRegisterNewBag() {
    const bag = {
      bloodType,
      collectionDate: scheduleDate,
    };

    api
      .post(`/stock/${user.id}`, bag)
      .then((response) => {
        validateSuccess();
        console.log("Insert Bag RESPONSE: ", response);
      })
      .catch((err) => {
        validateError();
        console.log("Insert Bag ERROR: ", err);
      });
  }

  function doRegisterNewHour() {
    const hour = {
      hemocenterId: user.id,
      scheduledDate: scheduleDate,
      scheduledTime: scheduleTime,
    };

    console.log("Current Hour: ", hour);

    api
      .post(`/hemocenter/scheduleHemocenter`, hour)
      .then(() => {
        validateSuccess();
        setScheduleDate("");
        setScheduleTime("");
        console.log(hour);
      })
      .catch((error) => {
        validateError();
        console.log("Erro: ", error);
        console.log("HOUR:", hour);
      });
  }

  function doEditData() {
    const hemocenter = {
      name,
      email,
      password,
      id,
      cpnj,
      zipCode,
      zipNumber,
      startOperation,
      endOperation,
      qttySimultServices,
    };

    api
      .put(`/hemocenter/${id}`, hemocenter)
      .then(() => {
        sessionStorage.setItem("userType", 2);
        setIsEdit(false);
        doIsOpenModalConfirmTrue();
        setTimeout(() => {
          doIsOpenModalConfirmFalse();
        }, 2000);
      })
      .catch((error) => {
        console.log("Erro no edit:", error);
      });

    api.post(`/hemocenter/current/`, { email, password }).catch((error) => {
      console.log(error);
      console.log(hemocenter);
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
          {page === 6 ? (
            <h1>
              <BorderlessButton
                doSomething={() => setIsEdit(true)}
                text="EDITAR"
              />
            </h1>
          ) : (
            ""
          )}
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
              startOperation={startOperation}
              endOperation={endOperation}
              qtty={qttySimultServices}
              setStartOperation={setStartOperation}
              setEndOperation={setEndOperation}
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
              cep={zipCode}
              isPassword={isFocused ? "text" : "password"}
            />
          ) : (
            ""
          )}
          {page === 6 && isEdit ? (
            <h2>
              <BorderlessButton
                doSomething={() => doEditData()}
                text="SALVAR"
              />
            </h2>
          ) : (
            ""
          )}
        </div>
        {console.log(startOperation)}
        {console.log(zipCode)}
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
        setDate={setScheduleDate}
        setTime={setScheduleTime}
        close={doIsOpenModalFalse}
        hourRegister={page === 3 ? true : false}
        bloodBag={page === 4 ? true : false}
        open={isOpenModal}
        send={send}
        page={page}
        isEdit={isEdit}
      />
      <MaxDialogBag isOpen={isOpenModalEdit} isClose={doIsOpenModalConfirmFalse} />
    </Container>
  );
}

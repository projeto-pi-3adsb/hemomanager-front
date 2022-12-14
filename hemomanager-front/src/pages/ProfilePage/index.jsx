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

  const user = {
    uuid: sessionStorage.getItem("id"),
    name: sessionStorage.getItem("user"),
    email: sessionStorage.getItem("email"),
  };

  function validateError() {
    setError(true);
    setSend(false);
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
        console.log(response);
        setSend(true);
        setError(true);
        setTimeout(() => setError(null), 3000);
        console.table(bag);
      })
      .catch((err) => {});
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
      .then((data) => {
        setSend(true);
        console.log(data);
      })
      .catch((error) => {
        validateError();
        console.log(hour);
        console.error(error.response.status);
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
    "Ter??a",
    "Quarta",
    "Quinta",
    "Sexta",
    "S??bado",
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
          {page === 1 ? <Dashboard labelsSex={labels2} /> : () => {}}
          {page === 2 ? <Schaduler /> : ""}
          {page === 3 ? <HourAvailableList isOpen={doIsOpenModalTrue} /> : ""}
          {page === 4 ? <StockList isOpen={doIsOpenModalTrue} /> : ""}
        </div>
      </MainArea>
      <RegisterModal
        error={error}
        setText="REGISTRAR"
        setTitle={
          page === 3
            ? "NOVO HOR??RIO"
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
      />
    </Container>
  );
}

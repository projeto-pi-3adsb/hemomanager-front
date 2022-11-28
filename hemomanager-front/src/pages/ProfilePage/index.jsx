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
import { MessageModal } from "../../components/MessageModal";

Chart.register = () => (
  // eslint-disable-next-line no-sequences
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

export function ProfilePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(4);

  const [description, setDescription] = useState("Description");
  const [bloodType, setBloodType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(0);

  const [bags, setBags] = useState([]);

  const [stockList, setStockList] = useState([]);
  const [counterAPos, setCounterAPos] = useState(0);

  const user = {
    uuid: sessionStorage.getItem("id"),
    name: sessionStorage.getItem("user"),
    email: sessionStorage.getItem("email"),
  };

  function doIsOpenModalTrue() {
    console.log("TO aberto");
    setIsOpenModal(true);
  }

  function doIsOpenModalFalse() {
    console.log("TO FECHADO");
    setIsOpenModal(false);
  }

  async function doRegisterNewBag() {
    const bag = {
      bloodType,
      collectionDate: date,
    };

    await api.post(`/stock/${user.id}`, bag).catch((err) => {
      alert(err.message);
    });
  }

  async function doRegisterNewHour() {
    const hour = {
      uuid: sessionStorage.getItem("id"),
      time,
      date,
    };

    console.log("CUrrent Hour: ", hour);

    await api.post(`/scheduleHemocenter/${hour.uu}`, hour).catch((err) => {
      console.log(err);
    });
  }

  function doRegisterNewHour() {}

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
          <button>
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
        setText="REGISTRAR"
        setTitle={
          page === 3
            ? "NOVO HORÁRIO"
            : "" || page === 4
            ? "NOVA BOLSA DE SANGUE"
            : ""
        }
        placeholderDescription="DESCRIÇÃO"
        setType="button"
        doRegister={() => doRegisterNewHour()}
        selectSomething={setBloodType}
        setDate={setDate}
        setTime={setTime}
        close={doIsOpenModalFalse}
        hourRegister={page === 3 ? true : false}
        bloodBag={page === 4 ? true : false}
        open={isOpenModal}
      />
    </Container>
  );
}

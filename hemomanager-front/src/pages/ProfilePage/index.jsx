import { Container, Exit, MainArea, Menu, Profile } from "./styles";

import {
  CalendarLtr28Filled,
  Board28Filled,
  ReceiptBag24Filled,
  Wrench24Filled,
  PeopleCommunity24Filled,
  ArrowCircleRight24Filled,
} from "@fluentui/react-icons";
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
import { useState } from "react";
import { Schaduler } from "../../components/Scheduler";
import { EmployeeList } from "../../components/EmployeeList";
import { RegisterModal } from "../../components/RegisterModal";

Chart.register = () => (
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

export function ProfilePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [page, setPage] = useState(1);

  function doIsOpenModalTrue() {
    console.log("TO aberto");
    setIsOpenModal(true);
  }

  function doIsOpenModalFalse() {
    console.log("TO FECHADO");
    setIsOpenModal(false);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Quantidade de bolsas doadas",
        data: labels.map(() => Math.random(), Math.random()),
        backgroundColor: "#fd37139b",
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "Doadores Femininos",
        data: labels.map(() => Math.random(), -Math.random()),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Doadores Masculinos",
        data: labels.map(() => Math.random(), -Math.random()),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <Profile>
        <div className="avatar">
          <img src="https://www.github.com/samuckqadev.png" alt="" />
          <h1>
            <strong>Samuckqa</strong>
            <span>samuelt.tomimatu@cip-bancos.org.br</span>
          </h1>
        </div>
        <Menu>
          <ul>
            <li>
              <button onClick={() => setPage(1)}>
                <i>
                  <Board28Filled />
                </i>
                <span>Dashboard</span>
              </button>
              <button onClick={() => setPage(2)}>
                <i>
                  <CalendarLtr28Filled />
                </i>
                <span>Calendário</span>
              </button>
            </li>
            <li>
              <button onClick={() => setPage(3)}>
                <i>
                  <CalendarLtr28Filled />
                </i>
                <span>Disponibilizar horários</span>
              </button>
              <button>
                <i>
                  <ReceiptBag24Filled />
                </i>
                <span>Estoque</span>
              </button>
            </li>
            <li>
              <button onClick={() => setPage(4)}>
                <PeopleCommunity24Filled />
                <span>Funcionários</span>
              </button>
              <button>
                <i>
                  <Wrench24Filled />
                </i>
                <span>Configurações</span>
              </button>
            </li>
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
          {page === 1 ? (
            <Dashboard data={data} data2={data2} options={options} />
          ) : (
            ""
          )}
          {page === 2 ? <Schaduler /> : ""}
          {page === 3 ? <Schaduler /> : ""}
          {page === 4 ? <EmployeeList isOpen={doIsOpenModalTrue} /> : ""}
        </div>
      </MainArea>
      <RegisterModal close={doIsOpenModalFalse} open={isOpenModal} />
    </Container>
  );
}

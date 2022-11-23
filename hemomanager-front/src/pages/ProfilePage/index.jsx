import { Container, Exit, MainArea, Menu, Profile } from "./styles";

import {
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
import { DonorMenu } from "../../components/DonorMenu";
import { ManagerMenu } from "../../components/ManagerMenu";
import { UserSettings } from "../../components/UserSettings";

Chart.register = () => (
  // eslint-disable-next-line no-sequences
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

  const user1 = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    senha: "teste123",
    birth: "2001-03-06",
    gender: "male",
    role: "donor",
  };

  const user2 = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    senha: "teste123",
    birth: "2001-03-06",
    gender: "male",
    role: "administrator",
  };

  return (
    <Container>
      <Profile>
        <div className="avatar">
          <img src="https://www.github.com/samuckqadev.png" alt="" />
          <h1>
            <strong>{user1.name}</strong>
            <span>{user1.email}</span>
          </h1>
        </div>
        <Menu>
          <ul className={user1.role === "donkor" ? "user-menu" : ""}>

            {user1.role === "donokr" ? (
              <DonorMenu
                method1={() => setPage(2)}
                method2={() => setPage(6)}
              />
            ) : (
              ""
            )}

            {user1.role === "donor" ? (
              <ManagerMenu
                method1={() => setPage(1)}
                method2={() => setPage(2)}
                method3={() => setPage(3)}
                method4={() => setPage(4)}
                method5={() => setPage(5)}
                method6={() => setPage(6)}
              />
            ) : (
              ""
            )}
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
            () => {}
          )}
          {page === 2 ? <Schaduler /> : ""}
          {page === 5 ? <EmployeeList isOpen={doIsOpenModalTrue} /> : ""}
          {page === 6 ? <UserSettings /> : ""}
        </div>
      </MainArea>
      <RegisterModal close={doIsOpenModalFalse} open={isOpenModal} />
    </Container>
  );
}

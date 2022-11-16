import { Container, Exit, MainArea, Menu, Profile } from "./styles";

import {
  CalendarLtr28Filled,
  Board28Filled,
  ReceiptBag24Filled,
  Wrench24Filled,
  PeopleCommunity24Filled,
  ArrowCircleLeft24Filled,
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
import { Bar, Line } from "react-chartjs-2";

const ChartJS = () =>
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export function ProfilePage() {
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
              <button>
                <i>
                  <Board28Filled />
                </i>
                <span>Dashboard</span>
              </button>
              <button>
                <i>
                  <CalendarLtr28Filled />
                </i>
                <span>Calendário</span>
              </button>
            </li>
            <li>
              <button>
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
              <button>
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
        <div>
          <section className="top-charts">
            <Line height={90} options={options} data={data} />
          </section>
          <section className="bar-chart">
            <Bar height={90} options={options} data={data2} />
          </section>
        </div>
      </MainArea>
    </Container>
  );
}

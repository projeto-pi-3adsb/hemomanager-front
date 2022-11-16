import { Container } from "./styles";

import dashIcon from "../../assets/dash.svg";
import calenderIcon from "../../assets/calender.svg";
import buldingIcon from "../../assets/building.svg";
import peoplesIcon from "../../assets/peoples.svg";

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
        text: "Chart.js Bar Chart",
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
        label: "Atividade",
        data: labels.map(() => Math.random(), -Math.random()),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Quantidade de bolsas doadas",
        data: labels.map(() => Math.random(), -Math.random()),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
      <div className="profile">
        <div className="avatar">
          <img src="https://www.github.com/samuckqadev.png" alt="" />
          <h1>
            <strong>Samuckqa</strong>
            <span>samuelt.tomimatu@cip-bancos.org.br</span>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <button>
                <img src={dashIcon} alt="" />
                <span>Dashboard</span>
              </button>
              <button>
                <img src={calenderIcon} alt="" />
                <span>Calendário</span>
              </button>
            </li>
            <li>
              <button>
                <img src={calenderIcon} alt="" />
                <span>Disponibilizar horários</span>
              </button>
              <button>
                <img src={buldingIcon} alt="" />
                <span>Disponibilizar horários</span>
              </button>
            </li>
            <li>
              <button>
                <img src={peoplesIcon} alt="" />
                <span>Funcionários</span>
              </button>
              <button>
                <img src={buldingIcon} alt="" />
                <span>Disponibilizar horários</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-area">
        <div>
          <section className="top-charts">
            <Line height={50} options={options} data={data} />
          </section>
          <section className="bar-chart">
            <Bar height={90} options={options} data={data} />
          </section>
        </div>
      </div>
    </Container>
  );
}

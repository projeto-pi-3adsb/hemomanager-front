import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { api } from "../../api";

export function Dashboard({ labelsBag, labelsSex }) {
  const [types, setTypes] = useState([]);
  const [values, setValues] = useState([]);

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

  useEffect(() => {
    labelsBag.map((typeBag) =>
      api
        .get(`/stock/type/${typeBag}`)
        .then((data) => setValues(values + data.datasets))
    );
  }, []);

  console.log(values);

  const data = {
    labels: labelsBag,
    datasets: [
      {
        label: "Quantidade de bolsas doadas",
        data: labelsBag.map(() => types.length),
        backgroundColor: "#fd37139b",
      },
    ],
  };

  const data2 = {
    labels: labelsSex,
    datasets: [
      {
        label: "Doadores Femininos",
        data: labelsSex.map(() => 1),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Doadores Masculinos",
        data: labelsSex.map(() => 1),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="chart">
        <HorizontalBar height={90} options={options} data={data} />
      </div>
      <div className="chart">
        <Bar height={90} options={options} data={data2} />
      </div>
    </>
  );
}
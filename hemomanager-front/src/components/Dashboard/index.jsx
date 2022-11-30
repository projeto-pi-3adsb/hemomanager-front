import { DonutLarge } from "@mui/icons-material";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Pie, HorizontalBar, Line } from "react-chartjs-2";
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
    api
      .get(`/stock/bloodType/${sessionStorage.id}`)
      .then((data) => setValues(data.data));
  }, []);

  console.log(values);

  const data = {
    labels: values.map((value) => value.name),
    datasets: [
      {
        label: "Quantidade de bolsas doadas",
        data: values.map((value) => value.counter),
        backgroundColor: "#fd37139b",
      },
    ],
  };

  const data2 = {
    labels: labelsSex,
    datasets: [
      {
        label: "Doadores Femininos",
        data: labelsSex.map(() => 5),
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
        <Pie height={90} options={options} data={data2} />
      </div>
    </>
  );
}

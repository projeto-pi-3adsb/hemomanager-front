import { useEffect, useState } from "react";
import { Pie, HorizontalBar } from "react-chartjs-2";
import { api } from "../../api";

export function Dashboard() {
  const [types, setTypes] = useState([]);
  const [values, setValues] = useState([]);

  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);
  const [gender, setGender] = useState([]);

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

  useEffect(() => {
    api.get(`/donor/gender/female`).then((data) => setFemale(data.data));
  }, []);

  useEffect(() => {
    api.get(`/donor/gender/male`).then((data) => setMale(data.data));
  }, []);

  useEffect(() => {
    setGender(male);
    setGender(female);
    console.log(male);
    console.log(female);
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

  const sexus = {
    labels: ["Femininos", "Masculinos"],
    datasets: [
      {
        label: "# of Votes",
        data: [female, male],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="chart">
        <HorizontalBar height={90} options={options} data={data} />
      </div>
      <div className="chart">
        <Pie height={90} data={sexus} />
      </div>
    </>
  );
}

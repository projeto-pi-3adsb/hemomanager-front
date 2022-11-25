import { Bar,  HorizontalBar } from "react-chartjs-2";

export function Dashboard({ labels, labels2 }) {
  
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
  
  const data = {
    labels : labels ,
    datasets: [
      {
        label: "Quantidade de bolsas doadas",
        data: labels.map(
          () => 2,
          () => 3),
        backgroundColor: "#fd37139b",
      },
    ],
  };

  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Doadores Femininos",
        data: labels.map(
          () => 1,
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Doadores Masculinos",
        data: labels.map(
          () => 1,
        ),
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

import { Bar,  HorizontalBar } from "react-chartjs-2";

export function Dashboard({ data, options, options2, data2 }) {
  return (
    <>
      <div className="chart">
        <HorizontalBar height={90} options={options} data={data} />
      </div>
      <div className="chart">
        <Bar height={90} options={options2} data={data2} />
      </div>
    </>
  );
}

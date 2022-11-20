import { Bar,  HorizontalBar } from "react-chartjs-2";

export function Dashboard({ data, options, options2, data2 }) {
  return (
    <>
      <section className="top-charts">
        <HorizontalBar height={90} options={options} data={data} />
      </section>
      <section className="bar-chart">
        <Bar height={90} options={options2} data={data2} />
      </section>
    </>
  );
}

import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

const stockList = [
  {
    typeBlood: "A+",
    date: new Date().getDate(),
    fullHour: {
      hour: new Date().getHours(),
      minutos: new Date().getMinutes().toFixed(0),
    },
  },
  {
    typeBlood: "B+",
    date: new Date().getDate(),
    fullHour: {
      hour: new Date().getHours(),
      minutos: new Date().getMinutes().toFixed(0),
    },
  },
  {
    typeBlood: "AB+",
    date: new Date().getDate(),
    fullHour: {
      hour: new Date().getHours(),
      minutos: new Date().getMinutes().toFixed(0),
    },
  },
];

export function StockList({ isOpen }) {
  return (
    <Container>
      <h1>
        <BorderlessButton
          doSomething={isOpen}
          text="INSERIR BOLSA"
        />
      </h1>
      <table>
        <thead>
          <tr>
            <th>Tipo Sanguíneo</th>
            <th>Data da Coleta</th>
            <th>Hora da Coleta</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((bag) => (
            <tr>
              <td>{bag.typeBlood}</td>
              <td>{bag.date}</td>
              <td>
                {bag.fullHour.hour} : {bag.fullHour.minutos}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

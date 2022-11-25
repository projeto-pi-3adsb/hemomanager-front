import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

const hours = [
  {
    date: new Date().getDate().toString(),
    time: new Date().getHours(),
    minuts: new Date().getMinutes().toFixed(1),
  },
  {
    date: new Date().getDate().toString(),
    time: new Date().getHours(),
    minuts: new Date().getMinutes().toFixed(1),
  },
  {
    date: new Date().getDate().toString(),
    time: new Date().getHours(),
    minuts: new Date().getMinutes().toFixed(1),
  },
  {
    date: new Date().getDate().toString(),
    time: new Date().getHours(),
    minuts: new Date().getMinutes().toFixed(1),
  },
  {
    date: new Date().getDate().toString(),
    time: new Date().getHours(),
    minuts: new Date().getMinutes().toFixed(1),
  },
  {
    date: new Date().getDate().toString(),
    time: new Date().getHours(),
    minuts: new Date().getMinutes().toFixed(1),
  },
  ,
];

export function HourAvailableList({ isOpen }) {
  return (
    <Container>
      <h1>
        <BorderlessButton doSomething={isOpen} text="CADASTRAR HORÁRIO" />
      </h1>
      <table>
        <thead>
          <tr>
            <th>Dia</th>

            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour.email}>
              <td>{hour.date}</td>
              <td>
                {hour.time}:{hour.minuts}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

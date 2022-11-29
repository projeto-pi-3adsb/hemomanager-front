import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function HourAvailableList({ isOpen }) {
  const [hours, setHours] = useState([]);

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
            <tr key={hour.type}>
              <td>{hour.date}</td>
              <td>{hour.hour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

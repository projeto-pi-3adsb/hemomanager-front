import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function HourAvailableList({ isOpen }) {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    api.get(`/schedules/hemocenter/${sessionStorage.id}`).then((data) => {
      setHours(data.data);
    });
    console.log("HOUERS: ", hours);
  }, []);

  function handleUseBag(hourId) {
    api
      .delete(`/stock/${sessionStorage.id}/${hourId}`)
      .then(() => {
        setHours((prev) => prev.filter((hour) => hour.id !== hourId));
      })
      .catch((err) => {
        console.log("DELETE ERROR: ", err.response.status);
      })

  }

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
          {hours.length > 0
            ? hours.map((hour) => (
                <tr key={hour.uuid}>
                  <td>{hour.shceduleDate}</td>
                  <td>{hour.shceduleTime}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </Container>
  );
}

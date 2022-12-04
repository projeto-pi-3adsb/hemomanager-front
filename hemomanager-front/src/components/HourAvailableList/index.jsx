import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function HourAvailableList({ isOpen }) {
  const [hours, setHours] = useState([]);

  const now = new Date();

  const withPmAm = now.toLocaleTimeString("en-US", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    api.get(`/schedules/hemocenter/all/${sessionStorage.id}`).then((data) => {
      setHours(data.data);
    });
    console.log("HOURS: ", hours);
  }, []);

  function doRemoveHour(hourId) {
    api
      .delete(`/stock/${sessionStorage.id}/${hourId}`)
      .then(() => {
        setHours((prev) => prev.filter((hour) => hour.id !== hourId));
      })
      .catch((err) => {
        console.log("DELETE ERROR: ", err.response.status);
      });
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
                <tr key={hour.hemocenterUuid}>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR", {}).format(
                      new Date(hour.scheduledDate)
                    )}
                  </td>
                  <td></td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </Container>
  );
}

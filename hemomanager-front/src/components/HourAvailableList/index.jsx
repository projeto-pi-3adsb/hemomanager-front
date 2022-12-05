import { Delete20Filled } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { MaxDialogBag } from "../shared/DialogBag";
import { Container } from "./styles";

export function HourAvailableList({ isOpen }) {
  const [hours, setHours] = useState([]);

  const [open, setOpen] = useState(false);

  function validateDelete() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  useEffect(() => {
    api.get(`/schedules/hemocenter/all/${sessionStorage.id}`).then((data) => {
      setHours(data.data);
      console.log("AGENDAMENTO:", data.data);

    });
    console.log("HOURS: ", hours);
  }, [hours]);

  function doRemoveHour(hourId) {
    api
      .delete(`/schedules/hour/${sessionStorage.id}/${hourId}`)
      .then(() => {
        setHours((prev) =>
          prev.filter((hour) => hour.scheduleHemocenterUuid !== hourId)
        );
        validateDelete();
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
      <div>
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Horário</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            {hours.length > 0
              ? hours.map((hour) => (
                  <tr key={hour.scheduleHemocenterUuid}>
                    <td>
                      {new Intl.DateTimeFormat("pt-BR", {}).format(
                        new Date(hour.scheduledDate)
                      )}
                    </td>
                    <td>
                      {hour.scheduledTime}
                      <b>h</b>
                    </td>
                    <td>
                      <Delete20Filled
                        onClick={() =>
                          doRemoveHour(hour.scheduleHemocenterUuid)
                        }
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <MaxDialogBag hour isOpen={open} />
    </Container>
  );
}

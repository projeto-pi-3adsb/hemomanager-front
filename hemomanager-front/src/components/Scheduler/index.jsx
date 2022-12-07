import { useState } from "react";
import { Conatiner } from "./styles";

import { useEffect } from "react";
import { api } from "../../api";

export function Schaduler(props) {
  const [schedules, setSchedules] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get(`/schedules/hemocenter/${sessionStorage.id}`).then((data) => {
      setSchedules(data.data);
      console.log("AGENDAMENTO:", data.data);
    });
  }, []);

  return (
    <Conatiner>
      <div>
        <table>
          <thead>
            <tr>
              <th>Doador</th>
              <th>Data agendamento</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {schedules.length > 0
              ? schedules.map((schedule) => (
                  <tr>
                    <td>{schedule.scheduledDonor.name}</td>
                    <td>
                      {new Intl.DateTimeFormat("pt-BR", {}).format(
                        new Date(schedule.scheduleHemocenter.scheduledDate)
                      )}
                    </td>
                    <td>
                      {schedule.scheduleHemocenter.scheduledTime.slice(0, 5)}h
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </Conatiner>
  );
}

import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";

import { Box, Confirm, Container } from "./styles";

export function NewSchedule() {
  const [hemocenters, setHemocenters] = useState([0]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    getAllHemocenters();
  }, [hours]);

  function getAllHemocenters() {
    api
      .get("/hemocenter")
      .then((data) => {
        setHemocenters(data.data);
        console.log(hemocenters);
      })
      .catch((error) => {
        console.error(error.status);
      });
  }

  function doSetLocalHemocenter(hemo) {
    api.get(`/schedules/hemocenter/all/${hemo}`).then((data) => {
      setHours(data.data);
    });
  }

  return (
    <>
      <Container>
        <div className="select-hemocenter">
          <div className="select">
            <h1>Selecione um Hemocentro para Realizar sua doação</h1>
            <select onChange={(e) => doSetLocalHemocenter(e.target.value)}>
              <option value="">Selecionar Hemocentro</option>
              {hemocenters.length > 0
                ? hemocenters.map((hemo) => {
                    return (
                      <option key={hemo.uuid} value={hemo.uuid}>
                        {hemo.name}
                      </option>
                    );
                  })
                : null}
              {console.log("Local :")}
              {console.log("Hemocentro :", hours)}
            </select>
          </div>
        </div>
        <div className="schedule-avaliable">
          <OwlCarousel className="owl-theme" items="3" autoPlay nav dots>
            {hours.length > 0 ? (
              hours.map((hour, index) => (
                <Box key={index}>
                  <p>{hour.hemocenterName}</p>
                  <h1>
                    {new Intl.DateTimeFormat("pt-BR", {}).format(
                      new Date(hour.scheduledDate)
                    )}
                  </h1>
                  <h2>{hour.scheduledTime}h</h2>
                  <div>
                      <button></button>
                  </div>
                </Box>
              ))
            ) : (
              <h1>Nenhum hemocentro selecionado</h1>
            )}
          </OwlCarousel>
          <Confirm>
            <BorderlessButton text="AGENDAR" />
          </Confirm>
        </div>
      </Container>
    </>
  );
}

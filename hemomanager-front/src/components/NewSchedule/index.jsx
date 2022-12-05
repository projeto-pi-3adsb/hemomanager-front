import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";

import { Box, Confirm, Container } from "./styles";

import checkImg from "../../assets/check.png";

export function NewSchedule() {
  const [hemocenters, setHemocenters] = useState([]);
  const [hours, setHours] = useState([]);

  const [selectedHemocenter, setSelectedHemocenter] = useState(0);

  const [hourSelected, setHourSelected] = useState();

  const id = sessionStorage.id;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getAllHemocenters();
  }, [hours]);

  function doAddNewSchecule() {
    api
      .post(`/schedules`, {
        donorId: id,
        hemocenterId: selectedHemocenter,
        scheduleHemocenterId: hourSelected,
      })
      .then(() => {
        setHours((prev) => prev.filter((hour) => hour.id !== hourSelected));
      })
      .catch((err) => {
        console.log("POST ERROR: ", err.response.status);
      });
  }

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
    setSelectedHemocenter(hemo);
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
                      <option key={hemo.uuid} value={hemo.uuid || 0}>
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
              hours.map((hour, index, checked) => (
                <Box key={index}>
                  <p>{hour.hemocenterName}</p>
                  <h1>
                    {new Intl.DateTimeFormat("pt-BR", {}).format(
                      new Date(hour.scheduledDate)
                    )}
                  </h1>
                  <h2>{hour.scheduledTime.slice(0, 5)}h</h2>
                  <div>
                    <label htmlFor={"radio" + index}>
                      <input
                        onClick={() =>
                          setHourSelected(hour.scheduleHemocenterUuid)
                        }
                        id={"radio" + index}
                        value="true"
                        type="radio"
                      />
                    </label>
                  </div>
                </Box>
              ))
            ) : (
              <h1>Nenhum horário disponível</h1>
            )}
          </OwlCarousel>
          <Confirm>
            <BorderlessButton doSomething={doAddNewSchecule} text="AGENDAR" />
          </Confirm>
        </div>
      </Container>
    </>
  );
}

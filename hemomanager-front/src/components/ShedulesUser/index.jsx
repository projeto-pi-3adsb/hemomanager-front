// Commonjs
import OwlCarousel from "react-owl-carousel";
import { MaxDialogBag } from "../shared/DialogBag";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { SchedulesCard } from "../ScheduleCard";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../api";
import axios from "axios";

export function SchedulesUser() {
  const [schedules, setSchedules] = useState([]);

  const [locals, setLocals] = useState([]);
  const [open, setOpen] = useState(false);

  function getData() {
    api
      .get(`/schedules/donor/${sessionStorage.id}`)
      .then((resp) => {
        setSchedules(resp.data);
        console.log("DATA DO ARRAY:", schedules);
      })
      .then(() => {
        schedules
          .forEach((schedule, index) => {
            axios
              .get(
                `https://viacep.com.br/ws/${schedule.hemocenter.zipCode}/json/`
              )
              .then((data) => {
                schedule.hemocenter.zipCode = data.logradouro;
                console.log("VIACEP: ", locals);
              });
          })
          .catch((error) => {
            console.log("Erro AXIOS :", error);
          });
      })
      .catch((erro) => console.log(erro));
  }

  function insertData(resp) {
    setSchedules(resp.data);
    getLocalAddress(resp.data.hemocenter.zipCode);
  }

  function validateDelete() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat("pt-BR", {}).format(new Date(date));
  }

  function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
  }

  function getLocalAddress(zipCode) {
    axios
      .get(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((data) => {
        setLocals(data);
        console.log("LOCAL", locals);
      })
      .catch((error) => {
        console.log("Erro :", error);
      });
  }

  useEffect(() => {
    getData();
  }, [schedules]);

  function doRemoveBag(bagId) {
    api
      .delete(`/stock/${sessionStorage.id}/${bagId}`)
      .then(() => {
        setSchedules((prev) => prev.filter((bag) => bag.id !== bagId));
        validateDelete();
      })
      .catch((err) => {
        console.log("DELETE ERROR: ", err.response.status);
      });
  }

  return (
    <Container>
      <OwlCarousel className="owl-theme" items="3" autoPlay nav dots>
        {schedules.length > 0
          ? schedules.map((schedule, index) => (
              <div key={schedule.uuid} className="item">
                <SchedulesCard
                  description={schedule.hemocenter.zipCode}
                  title={schedule.hemocenter.name}
                  hour={`Dia ${formatDate(
                    schedule.scheduleHemocenter.scheduledDate
                  )} 
                  às ${
                    timeConvert(
                      schedule.scheduleHemocenter.scheduledTime[0] * 60 +
                        schedule.scheduleHemocenter.scheduledTime[1]
                    ) + "h"
                  }`}
                />
              </div>
            ))
          : null}
      </OwlCarousel>
      <MaxDialogBag schedule isOpen={open} />
    </Container>
  );
}

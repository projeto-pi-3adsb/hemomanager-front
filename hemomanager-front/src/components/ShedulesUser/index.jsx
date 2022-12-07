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
      })
      .catch((erro) => console.log(erro));
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

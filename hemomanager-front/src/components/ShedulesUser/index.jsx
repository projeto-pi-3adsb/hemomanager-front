// Commonjs
import OwlCarousel from "react-owl-carousel";
import { MaxDialogBag } from "../shared/DialogBag";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { SchedulesCard } from "../ScheduleCard";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../api";

export function SchedulesUser() {
  const [schedules, setSchedules] = useState([]);

  const [locals, setLocals] = useState([]);
  const [open, setOpen] = useState(false);

  const id = sessionStorage.id;

  function validateDelete() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  useEffect(() => {
    api
      .get(`/schedules/donor/${id}`)
      .then((resp) => {
        setSchedules(resp.data);
        console.log("DATA DO ARRAY:", schedules);
        return;
      })
      .catch((erro) => console.log(erro));
  }, [schedules]);

  function doCancelSchedule(homocenterId, scheduleHemocenterId) {
    api
      .delete(`/schedules/hour/${homocenterId}/${scheduleHemocenterId}`)
      .then(() => {
        setSchedules((prev) =>
          prev.filter(
            (schedule) =>
              schedule.scheduleHemocenter.uuid !== scheduleHemocenterId
          )
        );
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  return (
    <Container>
      <OwlCarousel className="owl-theme" items="3" autoPlay nav dots>
        {schedules?.length > 0 ? (
          schedules.map((schedule, index) => (
            <div key={schedule.uuid} className="item">
              <SchedulesCard
                description={schedule.hemocenter.zipCode}
                title={schedule.hemocenter.name}
                hour={schedule.scheduleHemocenter.scheduledTime.slice(0, 5)}
                doCancel={() =>
                  doCancelSchedule(
                    schedule.hemocenter.uuid,
                    schedule.scheduleHemocenter.uuid
                  )
                }
              />
            </div>
          ))
        ) : (
          <h1 className="not-found"> Nehnum agendamento encontrado!</h1>
        )}
      </OwlCarousel>
      <MaxDialogBag schedule isOpen={open} />
    </Container>
  );
}

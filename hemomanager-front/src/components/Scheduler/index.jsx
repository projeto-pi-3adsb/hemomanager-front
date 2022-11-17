import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export function Schaduler(props) {
  return (
    <FullCalendar
      events={[
        { title: "event 1", date: "2022-11-03" },
        { title: "event 2", date: "2022-11-03" },
      ]}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
    />
  );
}

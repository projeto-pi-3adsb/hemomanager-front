// Commonjs
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { SchedulesCard } from "../ScheduleCard";
import { Container } from "./styles";
import { mapHash } from "@fullcalendar/react";

export function SchedulesUser() {
  const imgs = [
    {
      id: 1,
      title: "Hmocentro Blood Donate",
      descrition: "Rua Haddcock lobo, vila brasilandia",
    },
    {
      id: 2,
      title: "Hmocentro Blood Donate",
      descrition: "Rua Haddcock lobo, vila brasilandia",
    },
    {
      id: 123,
      title: "Hmocentro Blood Donate",
      descrition: "Rua Haddcock lobo, vila brasilandia",
    },
    {
      id: 3,
      title: "Hmocentro Blood Donate",
      descrition: "Rua Haddcock lobo, vila brasilandia",
    },
    {
      id: 4,
      title: "Hmocentro Blood Donate",
      descrition: "Rua Haddcock lobo, vila brasilandia",
    },
  ];

  return (
    <Container>
      <OwlCarousel className="owl-theme" items="2" autoPlay nav dots>
        {imgs.map((img) => (
          <div key={img.id} className="item">
            <SchedulesCard title={img.title} description={img.descrition} />
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
}

import React from "react";
import { Footer } from "../Footer";
import { HeaderDoador } from "../Header/HeaderDoador";
import { CardMeusAgend } from "../shared/Cards/CardMeusAgend";
import { MenuDoador } from "../shared/Cards/MenuDoador";

export function MeusAgendamentos() {
  return (
    <>
      <HeaderDoador />
      <MenuDoador/>
      <CardMeusAgend/>
      <Footer />
    </>
  );
}

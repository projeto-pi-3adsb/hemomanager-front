import React from "react";
import { Footer } from "../Footer";
import { HeaderDoador } from "../Header/HeaderDoador";
import { CardMeusAgend } from "../shared/Cards/CardMeusAgend";
import { MenuDoador } from "../shared/Cards/MenuDoador";
import { TituloAgendamento } from "../shared/Cards/TituloAgendamentos";

export function MeusAgendamentos() {
  return (
    <>
      <HeaderDoador />
      <MenuDoador/>
      <TituloAgendamento />
      <CardMeusAgend/>
      <Footer />
    </>
  );
}

import React from "react";
import { ButtonComeback } from "../ButtonComeback";
import {
  BoxTitulo,
  MeusAgend,
  BoxButtonAgend,
  ButtonAgendEsquerda,
  ButtonAgendDireita,
} from "./styles";

export function TituloAgendamento(props) {
  return (
    <>
      <BoxTitulo>
        <MeusAgend>MEUS AGENDAMENTOS</MeusAgend>
        <BoxButtonAgend>
          <ButtonAgendEsquerda>
            <ButtonComeback />
          </ButtonAgendEsquerda>
          <ButtonAgendDireita>
            <ButtonComeback />
          </ButtonAgendDireita>
        </BoxButtonAgend>
      </BoxTitulo>
    </>
  );
}

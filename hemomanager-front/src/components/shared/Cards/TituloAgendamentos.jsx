import React from "react";
import {
    BoxTitulo,
    MeusAgend,
    BoxButtonAgend,
    ButtonAgendEsquerda,
    ButtonAgendDireita
} from "./styles"

export function TituloAgendamento(props) {
    return (<>
        <BoxTitulo>
           <MeusAgend>MEUS AGENDAMENTOS</MeusAgend>
           <BoxButtonAgend>
           <ButtonAgendEsquerda></ButtonAgendEsquerda>
           <ButtonAgendDireita></ButtonAgendDireita>
           </BoxButtonAgend>
        </BoxTitulo>
     </>)
}
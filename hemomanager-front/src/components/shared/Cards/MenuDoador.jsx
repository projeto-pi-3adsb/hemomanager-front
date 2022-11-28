import { BarraOpcoes, Container } from "../../PerfilUsuario/styles";

import { BorderlessButton } from "../BorderlessButton";

export function MenuDoador(props) {
  return (
    <Container>
      <BarraOpcoes>
        <BorderlessButton text="MEU PERFIL" />
        <BorderlessButton text="MEUS AGENDAMENTOS" />
        <BorderlessButton text="NOVOS AGENDAMENTOS" />
      </BarraOpcoes>
    </Container>
  );
}

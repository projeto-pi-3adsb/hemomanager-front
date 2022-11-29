


import { BarraOpcoes, Container } from "../PerfilUsuario/styles";
import { BorderlessButton } from "../shared/BorderlessButton";

export function MenuDoador({ method1, method2, method3 }) {
  return (
    <Container>
      <BarraOpcoes>
        <BorderlessButton doSomething={method1} text="MEU PERFIL" />
        <BorderlessButton doSomething={method2} text="MEUS AGENDAMENTOS" />
        <BorderlessButton doSomething={method3} text="NOVOS AGENDAMENTOS" />
      </BarraOpcoes>
    </Container>
  );
}

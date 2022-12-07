import { BarraOpcoes, Container } from "../PerfilUsuario/styles";
import { BorderlessButton } from "../shared/BorderlessButton";

export function MenuDoador({ method1, method2, method3, page }) {
  return (
    <Container>
      <BarraOpcoes>
        <BorderlessButton
          buttonStyle={page === 1 ? "hover" : ""}
          doSomething={method1}
          text="MEU PERFIL"
        />
        <BorderlessButton
          buttonStyle={page === 2 ? "hover" : ""}
          doSomething={method2}
          text="MEUS AGENDAMENTOS"
        />
        <BorderlessButton
          buttonStyle={page === 3 ? "hover" : ""}
          doSomething={method3}
          text="NOVOS AGENDAMENTOS"
        />
      </BarraOpcoes>
    </Container>
  );
}

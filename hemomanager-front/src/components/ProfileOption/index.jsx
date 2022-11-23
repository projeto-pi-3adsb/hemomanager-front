import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function ProfileOption({ method1, method2 }) {
  return (
    <Container>
      <BorderlessButton method={method1} text="Doador" />
      <BorderlessButton method={method2} text="Hemocentro" />
    </Container>
  );
}

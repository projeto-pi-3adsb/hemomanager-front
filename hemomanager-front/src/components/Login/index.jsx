import { Input } from "../shared/Input";
import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
    </Container>
  );
}

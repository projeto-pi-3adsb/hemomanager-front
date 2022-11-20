import { Input } from "../shared/Input";
import { Container } from "./styles";

export function Register() {
  return (
    <Container>
      <Input placeholder="Nome completo *" />
      <Input placeholder="CPF/CNPJ *" />
      <Input placeholder="Email *" />
      <Input type="date" placeholder="Nascimento *" />
      <Input placeholder="Celular" />
      <Input placeholder="Senha *" />
      <Input placeholder="Confiramar senha *" />
      <Input placeholder="Sexo *" />
    </Container>
  );
}

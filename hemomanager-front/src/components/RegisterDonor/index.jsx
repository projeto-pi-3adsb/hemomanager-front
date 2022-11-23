import { Input } from "../shared/Input";
import { Container } from "./styles";

export function RegisterDonor() {
  return (
    <Container>
      <Input name="name" placeholder="Nome completo *" />
      <Input name="cpf" placeholder="CPF *" />
      <Input name="email" placeholder="Email *" />
      <Input name="birthDate" type="date" placeholder="Nascimento *" />
      <Input name="phone" placeholder="Celular" />
      <Input name="password" placeholder="Senha *" />
      <Input name="confirmPassword" placeholder="Confiramar senha *" />
      <select>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
      </select>
    </Container>
  );
}

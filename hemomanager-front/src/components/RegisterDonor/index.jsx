import { Input } from "../shared/Input";
import { Container } from "./styles";

export function RegisterDonor({ setName, setCpf, setEmail, setBirthDate, setPhone, setSex, setPassword, setConfirmPassword }) {
  return (
    <Container>
      <Input doSomething={setName} nameInput="name" placeholderInput="Nome completo*" />
      <Input doSomething={setCpf} nameInput="cpf" placeholderInput="CPF*" />
      <Input doSomething={setEmail} nameInput="email" placeholderInput="Email*" />
      <Input doSomething={setBirthDate} nameInput="birthDate" typeInput="date" placeholderInput="Nascimento*" />
      <Input doSomething={setPhone} nameInput="phone" placeholderInput="Celular" />
      <Input doSomething={setPassword} nameInput="password" placeholderInput="Senha*" />
      <Input doSomething={setConfirmPassword} nameInput="confirmPassword" placeholderInput="Confirmar senha*" />
      <select onChange={(e) => setSex(e.target.value)}>
        <option value="">Selecionar opção</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
      </select>
    </Container>
  );
}

import { Input } from "../shared/Input";
import { Container } from "./styles";

export function RegisterDonor({
  setName,
  setCpf,
  setEmail,
  setBirthDate,
  setPhone,
  setSex,
  setPassword,
  setConfirmPassword,
  error,
}) {
  return (
    <Container>
      <h1 className={error ? "error" : ""}>{error ? "Error" : ""}</h1>
      <Input
        doSomething={setName}
        nameInput="name"
        placeholderInput="Nome completo*"
      />
      <Input doSomething={setCpf} nameInput="cpf" placeholderInput="CPF*" />
      <Input
        doSomething={setEmail}
        nameInput="email"
        placeholderInput="Email*"
      />
      <Input
        doSomething={setBirthDate}
        nameInput="birthDate"
        typeInput="date"
        placeholderInput="Nascimento*"
      />
      <Input
        doSomething={setPhone}
        nameInput="phone"
        placeholderInput="Celular"
      />
      <Input
        typeInput="password"
        doSomething={setPassword}
        nameInput="password"
        placeholderInput="Senha*"
      />
      <Input
        doSomething={setConfirmPassword}
        typeInput="password"
        nameInput="confirmPassword"
        placeholderInput="Confirmar senha*"
      />
      <select onChange={(e) => setSex(e.target.value)}>
        <option value="">Selecionar opção</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
      </select>
    </Container>
  );
}

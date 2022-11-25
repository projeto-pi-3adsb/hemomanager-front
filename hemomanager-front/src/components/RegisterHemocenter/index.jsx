import { Input } from "../shared/Input";
import { Container } from "./styles";

export function RegisterHemocenter({ setName, setCnpj, setEmail, setPassword, setStartOperation, setEndOperation, setQtty,setZipCode, setZipNumber}) {
  return (
    <Container>
      <Input doSomething={setName} nameInput="name" placeholderInput="Nome completo *" />
      <Input doSomething={setCnpj} nameInput="cnpj" placeholderInput="CNPJ *" />
      <Input doSomething={setEmail} nameInput="email" placeholderInput="Email *" />
      <Input doSomething={setPassword} nameInput="password" placeholderInput="Senha *" />
      <Input doSomething={setPassword} nameInput="password" placeholderInput="Confiramar senha *" />
      <Input doSomething={setZipCode} nameInput="zipCode" placeholderInput="CEP *" />
      <Input doSomething={setZipNumber} typeInput="number" nameInput="zipNumber" placeholderInput="Number *" />

      <div className="input-group">
        <span>Inicio da operação *</span>
        <Input doSomething={setStartOperation} typeInput="time" nameInput="startOperation" />
      </div>
      <div className="input-group">
        <span>Fim da operação *</span>
        <Input doSomething={setEndOperation} typeInput="time" nameInput="endOperation" />
      </div>

      <Input
        typeInput="number"
        nameInput="qttyService"
        doSomething={setQtty}
        placeholderInput="Quantidade de atendimentos simultâneos *"
      />
    </Container>
  );
}

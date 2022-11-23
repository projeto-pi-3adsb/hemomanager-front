import { Input } from "../shared/Input";
import { Container } from "./styles";

export function RegisterHemocenter() {
  return (
    <Container>
      <Input name="name" placeholder="Nome completo *" />
      <Input name="cnpj" placeholder="CNPJ *" />
      <Input name="email" placeholder="Email *" />
      <Input name="password" placeholder="Senha *" />
      <Input name="confirmPassword" placeholder="Confiramar senha *" />
      <Input name="zipCode" placeholder="CEP *" />
      <Input type="number" name="zipNumber" placeholder="Number *" />

      <div className="input-group">
        <span>Inicio da operação *</span>
        <Input type="time" name="startOperation" />
      </div>
      <div className="input-group">
        <span>Fim da operação *</span>
        <Input type="time" name="endOperation" />
      </div>

      <Input
        type="number"
        name="qttyService"
        placeholder="Quantidade de atendimentos simultâneos *"
      />
    </Container>
  );
}

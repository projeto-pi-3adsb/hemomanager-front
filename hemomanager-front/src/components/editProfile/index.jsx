import { Input } from "../shared/Input";
import { Container } from "./styles";

export function EditProfile({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  sex,
  setSex,
  isEdit,
}) {
  return (
    <Container>
      <div>
        <span>Nome Completo</span>
        <Input setDisabled={isEdit} valueInput={name} doSomething={setName} />
      </div>
      <div>
        <span>Email</span>
        <Input setDisabled={isEdit} valueInput={email} doSomething={setEmail} />
      </div>
      <div>
        <span>Celular</span>
        <Input
          setDisabled={isEdit}
          typeInput="number"
          valueInput={phone}
          doSomething={setPhone}
        />
      </div>
      <div>
        <span>Sexo</span>
        <select disabled={isEdit} onChange={(e) => setSex(e.target.value)}>
          {isEdit ? (
            <option value="">
              {sex === "MALE" ? "Masculino" : "Feminino"}
            </option>
          ) : (
            ""
          )}
          <option value="MALE">Masculino</option>
          <option value="FEMALE">Feminino</option>
        </select>
      </div>
    </Container>
  );
}

import { Eye24Filled, Eye28Filled } from "@fluentui/react-icons";
import { Input } from "../shared/Input";
import { Container } from "./styles";

export function EditProfile({
  name,
  setName,
  email,
  setEmail,
  phone,
  password,
  setPassword,
  setPhone,
  sex,
  setSex,
  isEdit,
  focused,
  setFocused,
  isPassword,
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
      <div className="password">
        <span>Senha</span>
        <Input
          setDisabled={isEdit}
          typeInput={isPassword}
          valueInput={password}
          doSomething={setPassword}
        />
        <button
          className={focused ? "focused" : ""}
          disabled={isEdit}
          onClick={setFocused}
        >
          <Eye24Filled />
        </button>
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

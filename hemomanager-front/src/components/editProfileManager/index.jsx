import { Eye24Filled, Eye28Filled } from "@fluentui/react-icons";
import { Input } from "../shared/Input";
import { Container } from "./styles";

export function EditProfileManager({
  cep,
  setCep,
  name,
  setName,
  email,
  setEmail,
  qtty,
  password,
  setPassword,
  setQtty,
  isEdit,
  focused,
  setFocused,
  isPassword,
  setStartOperation,
  startOperation,
  endOperation,
  setEndOperation,
  zipNumber,
  setZipNumber,
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
        <span>Quantidade de atedimentos simultâneos</span>
        <Input
          setDisabled={isEdit}
          typeInput="number"
          valueInput={qtty}
          doSomething={setQtty}
        />
      </div>
      <div>
        <span>Inicio da operação</span>
        <Input
          setDisabled={isEdit}
          typeInput={isEdit ? "text" : "time"}
          valueInput={startOperation}
          doSomething={setStartOperation}
        />
      </div>
      <div>
        <span>Fim da operação</span>
        <Input
          setDisabled={isEdit}
          typeInput="time"
          valueInput={endOperation}
          doSomething={setEndOperation}
        />
      </div>
      <div>
        <span>CEP</span>
        <Input
          setDisabled={isEdit}
          typeInput="text"
          valueInput={cep}
          doSomething={setCep}
        />
      </div>
      <div>
        <span>Número</span>
        <Input
          setDisabled={isEdit}
          typeInput="number"
          valueInput={zipNumber}
          doSomething={setZipNumber}
        />
      </div>
    </Container>
  );
}

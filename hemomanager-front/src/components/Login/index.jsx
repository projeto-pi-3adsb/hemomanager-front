import { Input } from "../shared/Input";
import { Container } from "./styles";

export function Login({ idInput, typeInput, valueInput,setPassword, nameInput, placeholderInput,setEmail,  doSomethingPassword, doSomething, placeholderInputPassword, valueInputPassword, idInputPassowrd, nameInputPassword, typeInputPassword }) {
  return (
    <Container>
      <Input 
        id={idInput}
        nameInput={nameInput}
        typeInput={typeInput}
        valueInput={valueInput}
        placeholderInput={placeholderInput}
        doSomething={setEmail}
/>

      <Input id={idInputPassowrd}
        nameInput={nameInputPassword}
        typeInput={typeInputPassword}
        valueInput={valueInputPassword}
        placeholderInput={placeholderInputPassword}
        doSomething={setPassword} />
    </Container>
  );
}

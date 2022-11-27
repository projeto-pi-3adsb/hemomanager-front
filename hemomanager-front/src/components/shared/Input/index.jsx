import { InputDefault } from "./styles";

export function Input({
  typeInput,
  placeholderInput,
  valueInput,
  idInput,
  doSomething,
  nameInput,
}) {
  return (
    <InputDefault
      id={idInput}
      name={nameInput}
      type={typeInput}
      defaultValue={valueInput}
      placeholder={placeholderInput}
      onInput={(e) => doSomething(e.target.value)}
    />
  );
}

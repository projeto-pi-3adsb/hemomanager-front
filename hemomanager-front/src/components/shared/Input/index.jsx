import { InputDefault } from "./styles";

export function Input({ type, placeholder, value, id, onInput, name }) {
  return (
    <InputDefault
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onInput={onInput}
    />
  );
}

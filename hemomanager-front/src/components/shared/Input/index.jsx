import { InputDefault } from "./styles";

export function Input({ type, placeholder, value, id }) {
  return (
    <InputDefault id={id} type={type} placeholder={placeholder} value={value} />
  );
}

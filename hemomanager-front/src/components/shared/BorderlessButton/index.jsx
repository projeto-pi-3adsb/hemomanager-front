import React from "react";
import { Button } from "./styles";

export function BorderlessButton({
  text,
  typeButton,
  doSomething,
  icon,
  buttonStyle,
}) {
  return (
    <Button className={buttonStyle} type={typeButton} onClick={doSomething}>
      {text}
      {icon}
    </Button>
  );
}

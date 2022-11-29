import React from "react";
import { Button } from "./styles";

export function BorderlessButton({ text, typeButton, doSomething, icon }) {
  return (
    <Button type={typeButton} onClick={doSomething}>
      {text}
      {icon}
    </Button>
  );
}

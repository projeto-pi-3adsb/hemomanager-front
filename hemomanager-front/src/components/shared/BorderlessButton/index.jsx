import React from "react";
import { Button } from "./styles";

export function BorderlessButton({ method, text, type }) {
  return (
    <Button type={type} onClick={method}>
      {text}
    </Button>
  );
}

import React from "react";
import { Button } from "./styles";

export function BorderlessButton(props) {
  return <Button onClick={props.method}>{props.text}</Button>;
}

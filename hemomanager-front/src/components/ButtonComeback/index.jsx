import React from "react";
import { Button } from "./styles";
import arrow from "../../assets/arrow-left.svg";

export function ButtonComeback(props) {
  return (
    <Button onClick={props.method}>
      <img src={arrow} alt="Arrow left" />
    </Button>
  );
}

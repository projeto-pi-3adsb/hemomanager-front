import React from "react";
import { Button } from "./styles";
import arrow from "../../assets/arrow-left.svg";

export function ButtonComeback() {
  return (
    <Button>
      <img src={arrow} alt="" />
    </Button>
  );
}

import React from "react";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function Question(props) {


  function doAnswerTrue() {
    props.setAnswer(true)
    props.setCounter(props.counter + 1);
  }

  function doAnswerFalse() {
    props.setAnswer(false);
    props.setCounter(props.counter + 1);
  }

  return (
    <Container>
      <h4>{props.indexQuestion}</h4>
      <div>
        <BorderlessButton text="Sim" method={doAnswerTrue} />

        <BorderlessButton text="Não" method={doAnswerFalse} />
      </div>
    </Container>
  );
}

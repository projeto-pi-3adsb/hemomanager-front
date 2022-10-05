import React, { useState, createContext } from "react";
import { BorderlessButton } from "../BorderlessButton";
import { Container } from "./styles";

export const QuestionContext = createContext({});

export function Question(props) {
  
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState(false);
  
  function doAnswerTrue() {
    setAnswer(true);
    setCounter(counter + 1);
  }
  
  function doAnswerFalse() {
    setAnswer(false);
    setCounter(counter + 1);
  }

  return (
    <QuestionContext.Provider value={counter}>
      <Container>
        <h4>{props.question}</h4>
        <div>
          <BorderlessButton text="Sim" method={doAnswerTrue} />

          <BorderlessButton text="Não" method={doAnswerFalse} />

          {console.log(counter)}
          {console.log(answer)}
        </div>
      </Container>
    </QuestionContext.Provider>
  );
}

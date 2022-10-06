import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Title } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { Question } from "../../components/Question";

const questions = [
  {
    id: 1,
    ask: "Você tem entre 16 e 69 anos?",
    answer: false,
  },
  {
    id: 2,
    ask: "Passou por quadros de gripe, resfriado ou febre nos últimos 7 dias?",
    answer: false,
  },
  {
    id: 3,
    ask: "Foi diagnosticado(a) com Covid-19 nos últimos 30 dias?",
    answer: false,
  },
  {
    id: 4,
    ask: "Fez tatuagem nos últimos 12 meses?",
    answer: false,
  },
  {
    id: 5,
    ask: "Pesa no mínimo 50kg?",
    answer: false,
  },
  {
    id: 6,
    ask: "Dormiu, pelo menos, 6 horas nas últimas 24 horas?",
    answer: false,
  },
];



export function QuizPage() {
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <HeaderComponent button={true} />
      <Container>
        <Header>
          <div>
            <img src={bloodDrop} alt="" />
            <span>QUIZ</span>
          </div>
          <Title>VOCÊ ESTÁ APTO A DOAR SANGUE?</Title>
          <p>Faça o teste e descubra!</p>
        </Header>

        <Question
          setCounter={setCounter}
          setAnswer={setAnswer}
          counter={counter}
          indexQuestion={questions[counter].ask}
          answer={answer}
        />


        {console.log("Asks: " + questions[counter].ask)}
        {console.log(
          "-------------------------------------"
        )}    
      </Container>
    </>
  );
}

import React, { useContext } from "react";
import { ButtonComeback } from "../../components/ButtonComeback";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Title } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { Question, QuestionContext } from "../../components/Question";

const questions = [
  {
    ask: "Você tem entre 16 e 69 anos?",
    answer: false,
  },
  {
    ask: "Passou por quadros de gripe, resfriado ou febre nos últimos 7 dias?",
    answer: false,
  },
  {
    ask: "Foi diagnosticado(a) com Covid-19 nos últimos 30 dias?",
    answer: false,
  },
  {
    ask: "Fez tatuagem nos últimos 12 meses?",
    answer: false,
  },
  {
    ask: "Pesa no mínimo 50kg?",
    answer: false,
  },
  {
    ask: "Dormiu, pelo menos, 6 horas nas últimas 24 horas?",
    answer: false,
  },
];

const asks = []
const answers = []

questions.map((question)=>{
  asks.push(question.ask)
  answers.push(question.answer)
})

export function QuizPage() {
  const questionContext = useContext(QuestionContext);

  const { counter } = questionContext;

  console.log("Counter: " + counter);

  return (
    <>
      <HeaderComponent button={<ButtonComeback />} />
      <Container>
        <Header>
          <div>
            <img src={bloodDrop} alt="" />
            <span>QUIZ</span>
          </div>
          <Title>VOCÊ ESTÁ APTO A DOAR SANGUE?</Title>
          <p>Faça o teste e descubra!</p>
        </Header>
        <Question question={asks[counter]} />
        {console.log("Ansower: " + asks[counter])}
      </Container>
    </>
  );
}

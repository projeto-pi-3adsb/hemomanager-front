import React from "react";
import { ButtonComeback } from "../../components/ButtonComeback";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Title } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { Question } from "../../components/Question";

export function QuizPage() {
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
        <Question />
      </Container>
    </>
  );
}

import React, { useState } from "react";
import { BorderlessButton } from "../BorderlessButton";
import { Container } from "./styles";

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

export function Question() {
    
  const [answer, setAnswer] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <h4>Teste</h4>
      <div>
        <BorderlessButton text="Sim" />

        <BorderlessButton text="Não" />
      </div>
    </Container>
  );
}

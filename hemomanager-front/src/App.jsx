import React from "react";
import { Route, Routes } from "react-router-dom";
import { MeusAgendamentos } from "./components/MeusAgendamentos";

import { QuizPage } from "./pages/QuizPage";

import { GlobalStyled } from "./styles/global";
import { HomePage } from "./pages/HomePage/HomePage";
import { CadastroDoador } from "./pages/CadastroDoador/CadastroDoador";
import { VideoPage } from "./pages/VideoPage/VideoPage";
import { NovoAgendamento } from "./pages/NovoAgendamento/NovoAgendamento";

export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/meus-agendamentos" element={<MeusAgendamentos />} />
        <Route exact path="/quiz" element={<QuizPage />} />
        <Route exact path="/cadastro-doador" element={<CadastroDoador />} />
        <Route exact path="/video" element={<VideoPage/>} />
        <Route exact path="/novo-agendamento" element={<NovoAgendamento />} />
        <Route exact path="/video" element={<VideoPage/>} />
      </Routes>
      <GlobalStyled />
    </>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import { MeusAgendamentos } from "./components/MeusAgendamentos";

import { QuizPage } from "./pages/QuizPage";

import { GlobalStyled } from "./styles/global";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage";

export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/meus-agendamentos" element={<MeusAgendamentos />} />
        <Route exact path="/quiz" element={<QuizPage />} />
        <Route exact path="/dashboard" element={<ProfilePage />} />
      </Routes>
      <GlobalStyled />
    </>
  );
}

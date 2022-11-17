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
        <Route path="/" element={<HomePage />} />
        <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dashboard" element={<ProfilePage />} />
      </Routes>
      <GlobalStyled />
    </>
  );
}

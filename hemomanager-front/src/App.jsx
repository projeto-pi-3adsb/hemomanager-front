import { Route, Routes } from "react-router-dom";
import { MeusAgendamentos } from "./components/MeusAgendamentos";

import { QuizPage } from "./pages/QuizPage";

import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { GlobalStyled } from "./styles/global";
import { LoginPage } from "./pages/LoginPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/area-usuario" element={<LoginPage />} />
        <Route path="/agendamento" element={<MeusAgendamentos />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dashboard" element={<ProfilePage />} />
        <Route path="*" element={<h1>Not Found ! </h1>} />
      </Routes>
      <GlobalStyled />
    </>
  );
}

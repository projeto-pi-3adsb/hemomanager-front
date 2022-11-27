import { Route, Routes } from "react-router-dom";
import { MeusAgendamentos } from "./components/MeusAgendamentos";

import { QuizPage } from "./pages/QuizPage";

import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { GlobalStyled } from "./styles/global";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./components/NotFound";
import { CadastroDoador } from "./pages/CadastroDoador/CadastroDoador";
import { VideoPage } from "./pages/VideoPage/VideoPage";
import { NovoAgendamento } from "./pages/NovoAgendamento/NovoAgendamento";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/area-usuario" element={<LoginPage />} />
        <Route path="/agendamento" element={<MeusAgendamentos />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dashboard" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/cadastro-doador" element={<CadastroDoador />} />
        <Route exact path="/video" element={<VideoPage/>} />
        <Route exact path="/novo-agendamento" element={<NovoAgendamento />} />
      </Routes>
      <GlobalStyled />
    </>
  );
}

import { Route, Routes } from "react-router-dom";

import { QuizPage } from "./pages/QuizPage";

import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { GlobalStyled } from "./styles/global";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./components/NotFound";
import { PerfilUsuario } from "./components/PerfilUsuario";

import { CadastroDoador } from "./pages/CadastroDoador/CadastroDoador";
import { VideoPage } from "./pages/VideoPage/VideoPage";


export function App() {
  return (
    <>
      <Routes>
        <Route path="/hemomanager" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/area-usuario" element={<LoginPage />} />
        <Route path="/perfil-usuario" element={<PerfilUsuario />} />
        <Route path="/dashboard" element={<ProfilePage />} />
        <Route path="/cadastro-doador" element={<CadastroDoador />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyled />
    </>
  );
}

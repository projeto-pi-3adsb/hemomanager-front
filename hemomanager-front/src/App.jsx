import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import { PerfilUsuario } from "./components/PerfilUsuario";
import { MeusAgendamentos } from "./components/MeusAgendamentos";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<PerfilUsuario />} />
      <Route exact path="/meus-agendamentos" element={<MeusAgendamentos />} />
    </Routes>
      <GlobalStyle />
    </>
  );
}
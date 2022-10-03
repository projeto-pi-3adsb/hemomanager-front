import React from "react";
import { ButtonComeback } from "./components/ButtonComeback";
import { HeaderComponent } from "./components/Header";


import { GlobalStyled } from "./styles/global";

export function App() {
  return (
    <>
      <HeaderComponent button={<ButtonComeback />} />
      <GlobalStyled />
    </>
  );
}

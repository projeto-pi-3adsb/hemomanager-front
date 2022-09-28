import React from 'react';
import { GlobalStyle } from "./styles/global";
import { HeaderDoador } from "./components/Header/HeaderDoador";

export function App() {
   return (<>
      <HeaderDoador title='Meus Agendamentos' name='Cindy' src='assets/logotypes/logo-1.png' />
      <GlobalStyle />
    </> 
   );
}

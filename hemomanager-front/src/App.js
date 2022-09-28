import React from 'react';
import { GlobalStyle } from "./styles/global";
import { HeaderDoador } from "./components/Header/HeaderDoador";
import { CardMeusAgend } from './components/shared/Cards/CardMeusAgend';

export function App() {
   return (<>
      <HeaderDoador />
      <div className='p-grid'>
         <CardMeusAgend />
         <CardMeusAgend />
      </div>
      <GlobalStyle />
    </> 
   );
}

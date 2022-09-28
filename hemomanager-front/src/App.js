import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { PerfilUsuario } from './components/PerfilUsuario';
import { GlobalStyled } from './styles/global';


function App() {
  return (
    <>
    <PerfilUsuario/>
    <GlobalStyled/>
    </>
  );
}

export default App;

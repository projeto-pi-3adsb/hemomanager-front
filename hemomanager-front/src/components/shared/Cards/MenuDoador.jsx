import { BarraOpcoes} from "../../PerfilUsuario/styles";

export function MenuDoador(props) {
    return (<div className="container">
       <BarraOpcoes>
        <button>MEU PERFIL</button>
        <button>MEUS AGENDAMENTOS</button>
        <button>NOVOS AGENDAMENTOS</button>
      </BarraOpcoes>
    </div>)
}
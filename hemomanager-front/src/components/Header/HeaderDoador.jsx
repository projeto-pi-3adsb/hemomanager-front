import bannerMeusAgend from '../../assets/meus-agend.png'
import "../../styles/styleMeusAgen.css";

export function HeaderDoador() {
    return (<div className="container">
        <header>
        <div>
          <strong>Cindy Kanashiro</strong>
          <img src="https://github.com/CindyKanashiro.png" alt="Foto de perfil" />
          <button type="button">Sair</button>
        </div>
        </header>
        <img className='banner' src={bannerMeusAgend} alt="Banner"/>
    </div>)
}
import { BorderlessButton } from "../../components/BorderlessButton";
import { Footer } from "../../components/Footer";
import { HeaderComponent } from "../../components/Header";
import { Container, About, FireImg } from "./styles";
import homeImg from "../../assets/home-img.png";
import fireImg from "../../assets/fire-img.png";
import aboutImg from "../../assets/about-img.png";
import bloodDrop from "../../assets/blood-drop.svg";

export function HomePage() {

  return (
    <>
      <HeaderComponent home="#home" about="#about" />
      <Container id="home">
        <FireImg>
          <img className="fire" src={fireImg} alt="" />
        </FireImg>
        <div>
          <strong>
            PARA QUEM DOA SÃO ALGUNS MINUTOS, PARA QUEM RECEBE É UMA VIDA
            INTEIRA.
          </strong>
          <p>
            Somos uma plataforma que visa facilitar a vida do doador na hora do
            seu agendamento, assim aumentando o nível de doadores no Brasil.
          </p>
          <BorderlessButton text="AGENDER AGORA" />
        </div>
        <div>
          <img src={homeImg} alt="" />
        </div>
      </Container>
      <About id="about">
        <div>
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <h1>
            <img src={bloodDrop} alt="" />
            <span>SOBRE NÓS</span>
          </h1>
          <strong>
            DOE SANGUE E SEJA O MOTIVO DO SORRISO DE MUITOS ROSTOS!
          </strong>
          <p>
            Você pode escolher o Hemocentro de sua preferência, saber os
            horários disponíveis, e a partir de então há o intermédio dos
            Hemocentros que estão dispostas a receber a doação, e à você,
            doador, que irá contribuir conosco.
          </p>
          <BorderlessButton text="SEJA UM DOADOR" />
        </div>
      </About>
      <Footer />
    </>
  );
}

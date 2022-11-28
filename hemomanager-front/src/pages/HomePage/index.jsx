import { Footer } from "../../components/Footer";
import { HeaderComponent } from "../../components/Header";
import { Container, About, FireImg, Orientation } from "./styles";
import homeImg from "../../assets/home-img.png";
import weight from "../../assets/weight.png";
import orientationImg from "../../assets/orientation-img.png";
import schaduleImg from "../../assets/schadule.png";
import health from "../../assets/health.png";
import spoon from "../../assets/spoon.png";
import aboutImg from "../../assets/about-img.png";
import comunication from "../../assets/comunication.png";
import bloodDrop from "../../assets/blood-drop.svg";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  function doGoToLogin() {
    navigate("/area-usuario");
    sessionStorage.setItem("page", 2);
  }

  function doGoToRegister() {
    navigate("/area-usuario");
    sessionStorage.setItem("page", 1);
  }

  return (
    <>
      <HeaderComponent
        home="#home"
        about="#about"
        orientation="#orientation"
        contact="#contact"
      />
      <Container id="home">
        <FireImg />
        <div>
          <strong>
            PARA QUEM DOA SÃO ALGUNS MINUTOS, PARA QUEM RECEBE É UMA VIDA
            INTEIRA.
          </strong>
          <p>
            Somos uma plataforma que visa facilitar a vida do doador na hora do
            seu agendamento, assim aumentando o nível de doadores no Brasil.
          </p>
          <BorderlessButton
            doSomething={() => doGoToLogin()}
            text="AGENDAR AGORA"
          />
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
          <BorderlessButton
            doSomething={() => doGoToRegister()}
            text="SEJA UM DOADOR"
          />
        </div>
      </About>
      <Orientation id="orientation">
        <div>
          <div className="content">
            <h1>
              <img src={bloodDrop} alt="" />
              ORIENTAÇÕES
            </h1>
            <strong>PARA DOAR SANGUE VOCÊ DEVE...</strong>
            <span>
              <img src={comunication} alt="" />
              <p>
                Portar documento oficial e original de identidade com foto e
                dentro do prazo de validade
              </p>
            </span>
            <span>
              <img src={schaduleImg} alt="" />
              <p>
                Ter entre 16 e 69 anos de idade* (sendo que a primeira doação
                deve ter sido feita até 60 anos incompletos)
              </p>
            </span>
            <span>
              <img src={weight} alt="" />
              <p>Pesar acima de 50 Kg</p>
            </span>
            <span>
              <img src={health} alt="" />
              <p>
                Portar documento oficial e original de identidade com foto e
                dentro do prazo de validade
              </p>
            </span>
            <span>
              <img src={spoon} alt="" />
              <p>
                Portar documento oficial e original de identidade com foto e
                dentro do prazo de validade
              </p>
            </span>
          </div>
          <div className="button-group">
            <BorderlessButton text="VÍDEO INFORMATIVO" />
            <BorderlessButton
              doSomething={() => navigate("/quiz")}
              text="RESPONDER QUIZ"
            />
          </div>
        </div>
        <div>
          <img src={orientationImg} alt="" />
        </div>
      </Orientation>
      <Footer id="contact" start="#home" />
    </>
  );
}

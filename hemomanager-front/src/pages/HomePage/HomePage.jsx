import { BorderlessButton } from "../../components/BorderlessButton";
import { Footer } from "../../components/Footer";
import { HeaderComponent } from "../../components/Header";
import { Container } from "./styles";
import homeImg from "../../assets/home-img.png"

export function HomePage() {
  return (
    <>
      <HeaderComponent />
      <Container>
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
      <Footer />
    </>
  );
}

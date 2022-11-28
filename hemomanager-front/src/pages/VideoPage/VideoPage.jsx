import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Title } from "./style";
import bloodDrop from "../../assets/blood-drop.svg";
import { Border } from "../../components/shared/Border/Border";

export function VideoPage() {

  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <HeaderComponent button={true} />
      <Container>
        <Header>
          <div>
            <img src={bloodDrop} alt="" />
            <span>QUIZ</span>
          </div>
          <Title>VÍDEO INFORMATIVO !</Title>
          <p>Saiba mais sobre a doação de sangue.</p>
        </Header>
        <Border />
      </Container>
    </>
  );
}

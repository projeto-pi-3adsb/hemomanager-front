import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { Container, InputGroup, Header, Title, BoxButton } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { Input } from "../../components/shared/Input";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { useNavigate } from "react-router-dom";

export function FormHotsitePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("XXXXXXXXXXXXXXXXXXXX");
  const [email, setEmail] = useState("XXXXXXXXXXXXXXXXXXXX");
  const [phone, setPhone] = useState("XXXXXXXXXXXXXXXXXXXX");
  const [sex, setSex] = useState("XXXXXXXXXXXXXXXXXXXX");

  const user = {
    name,
    email,
    phone,
    sex,
  };

  {
    console.log(user);
  }

  function doGoToRegister() {
    navigate("/upload-hotsite");
    sessionStorage.setItem("page", 1);
  }

  return (
    <>
      <HeaderComponent button={true} />
      <Container>
        <Header>
          <div>
            <img src={bloodDrop} alt="" />
            <span>DOAÇÃO DE PLAQUETAS</span>
          </div>
          <Title>DESEJA FAZER DOAÇÃO DE PLAQUETAS?</Title>
          <p>RESPONDA O FORMULÁRIO ABAIXO!!</p>
        </Header>
        <InputGroup>
          <div>
            <span>Nome Completo</span>
            <Input
              valueInput={name}
              doSomething={setName}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>Celular</span>
            <Input
              valueInput={phone}
              doSomething={setPhone}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>Idade de 18 a 69 anos</span>
            <Input
              valueInput={email}
              doSomething={setEmail}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>Tem mais de 50 quilos?</span>
            <Input
              valueInput={sex}
              doSomething={setSex}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>Fez doação de sangue nos últimos 6 meses?</span>
            <Input
              valueInput={sex}
              doSomething={setSex}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>Teve 3 ou mais gestações?</span>
            <Input
              valueInput={sex}
              doSomething={setSex}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>
              Fez o uso de ácido acetilsalicílico ou anti-inflamatórios?
            </span>
            <Input valueInput={sex} doSomething={setSex} />
          </div>
        </InputGroup>
        <BoxButton>
          <BorderlessButton
            doSomething={() => doGoToRegister()}
            text="ENVIAR"
          />
        </BoxButton>
      </Container>
    </>
  );
}

import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { Container,  InputGroup ,Header, Title } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { Border } from "../../components/shared/Border/Border";
import { Input } from "../../components/shared/Input";

export function HotsitePage() {
    const [name, setName] = useState(sessionStorage.getItem("user"));
    const [email, setEmail] = useState(sessionStorage.getItem("email"));
    const [phone, setPhone] = useState(sessionStorage.getItem("phone"));
    const [sex, setSex] = useState(sessionStorage.getItem("sex"));
  
    const user = {
      name,
      email,
      phone,
      sex,
    };
  
    {
      console.log(user);
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
          <Input valueInput={name} doSomething={setName} />
        </div>
        <div>
          <span>Email</span>
          <Input valueInput={email} doSomething={setEmail} />
        </div>
        <div>
          <span>Celular</span>
          <Input valueInput={phone} doSomething={setPhone} />
        </div>
        <div>
          <span>Sexo</span>
          <Input valueInput={sex} doSomething={setSex} />
        </div>
      </InputGroup>
      </Container>
    </>
  );
}

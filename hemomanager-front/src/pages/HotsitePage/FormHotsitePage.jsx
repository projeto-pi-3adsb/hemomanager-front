import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { Container, InputGroup, Header, Title, BoxButton } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { Input } from "../../components/shared/Input";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export function FormHotsitePage() {
  const navigate = useNavigate();

  const [name, setName] = useState("Digite seu nome completo aqui!");
  const [email, setEmail] = useState("Digite seu email aqui!");
  const [phone, setPhone] = useState("Digite seu telefone aqui!");
  const [sex, setSex] = useState("Digite seu gênero aqui!");
  const [cpf, setCpf] = useState("Digite seu CPF aqui!");
  const [birthDate, setBirthDate] = useState("Digite sua data de nascimento aqui!");
  const [password, setPassword] = useState("123");

  const [error, setError] = useState(false);

  const user = {
    name,
    email,
    phone,
    sex,
    cpf,
    birthDate,
    password
  };

  function doGoToRegister() {

    navigate("/upload-hotsite");

    sessionStorage.setItem("page", 1);
  }

  function validateError() {
    setError(true);
    setTimeout(() => setError(false), 3000);
  }

  function sendRegister() {
    api
      .post(
        "/donor",
        user
      )
      .then((resp) => {
        sessionStorage.setItem("donorId", resp.data.id);
        doGoToRegister();

      })
      .catch((erro) => {
        validateError();
      });
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
              placeholderInput={name}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              valueInput={email}
              doSomething={setEmail}
              placeholderInput={email}
            />
          </div>
          <div>
            <span>CPF</span>
            <Input
              valueInput={cpf}
              doSomething={setCpf}
              placeholderInput={cpf}
            />
          </div>
          <div>
            <span>Data de Nascimento</span>
            <Input
              valueInput={birthDate}
              doSomething={setBirthDate}
              placeholderInput={birthDate}
            />
          </div>
          <div>
            <span>Gênero</span>
            <Input
              valueInput={sex}
              doSomething={setSex}
              placeholderInput={sex}
            />
          </div>
          <div>
            <span>Telefone</span>
            <Input
              valueInput={phone}
              doSomething={setPhone}
              placeholderInput={phone}
            />
          </div>
        </InputGroup>
        <BoxButton>
          <BorderlessButton
            doSomething={() => sendRegister()}
            text="ENVIAR"
          />
        </BoxButton>
      </Container>
    </>
  );
}

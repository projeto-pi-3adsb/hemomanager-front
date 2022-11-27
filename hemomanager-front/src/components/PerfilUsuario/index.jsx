import { Header, InputGroup, Perfil } from "./styles";
import logoImg from "../../assets/logotypes/logo-2.png";
import mirian from "../../assets/mirian.svg";
import React, { useState } from "react";

import { MenuDoador } from "../shared/Cards/MenuDoador";

import { BorderlessButton } from "../shared/BorderlessButton";
import { Input } from "../shared/Input";

export function PerfilUsuario() {
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
      <Header>
        <img src={logoImg} alt="" />
        <BorderlessButton text="Sair" />
      </Header>
      <Perfil>
        <img src={mirian} alt="" />
        <h1>{name}</h1>
      </Perfil>
      <MenuDoador />

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
    </>
  );
}

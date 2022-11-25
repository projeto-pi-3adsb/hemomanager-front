import { BarraOpcoes, Button, Header, InputGroup, Perfil } from "./styles";
import logoImg from "../../assets/logotypes/logo-2.png";
import mirian from "../../assets/mirian.svg";
import React from "react";
import { Footer } from "../Footer";
import { MenuDoador } from "../shared/Cards/MenuDoador";

export function PerfilUsuario() {
  return (
    <>
      <Header>
        <img src={logoImg} alt="" />

        <Button> Sair </Button>
      </Header>

      <Perfil>
        <img src={mirian} alt="" />
        <h1>Mirian</h1>
        <h4>29 anos</h4>
      </Perfil>

      <MenuDoador/>

      <InputGroup></InputGroup>
    </>
  );
}

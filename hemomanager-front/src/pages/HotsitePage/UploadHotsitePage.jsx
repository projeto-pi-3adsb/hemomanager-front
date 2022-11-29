import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Title, BoxUpload, BoxList, BoxButton } from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { useNavigate } from "react-router-dom";
import { BorderlessButton } from "../../components/shared/BorderlessButton";


export function UploadHotsitePage() {
  const navigate = useNavigate();
  function doGoToRegister() {
    navigate("/area-usuario");
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
          <Title>BAIXE SEU FORMULÁRIO E LEVE AO HEMOCENTRO!!</Title>
          <p>VOCÊ TAMBÉM PODE FAZER O UPLOUD DO SEU FORMULÁRIO!</p>
        </Header>
        <BoxUpload>
          <div className="upload">
            <h2>FAÇA O UPLOUD DO SEU DOCUMENTO AQUI!!</h2>
          </div>
          <BoxList>
            <table>
              <thead>
                <tr>
                  <th>FORMULÁRIOS</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>CSDS
                  <BoxButton>
                    <div>
                    <BorderlessButton doSomething={() => doGoToRegister()}text="ENVIAR" />
                    <BorderlessButton doSomething={() => doGoToRegister()}text="ENVIAR" />
                    </div>
                  </BoxButton>
                </td>
                
                <td>SCSD</td>
              </tr>
          </tbody>
            </table>  
            </BoxList>
        </BoxUpload>
      </Container>
    </>
  );
}

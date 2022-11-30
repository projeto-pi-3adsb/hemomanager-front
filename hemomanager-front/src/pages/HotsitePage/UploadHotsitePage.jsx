import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import {
  Container,
  Header,
  Title,
  BoxUpload,
  BoxList,
  BoxButton,
  Upload,
} from "./styles";
import bloodDrop from "../../assets/blood-drop.svg";
import { useNavigate } from "react-router-dom";
import { BorderlessButton } from "../../components/shared/BorderlessButton";
import {
  Delete20Filled,
  Delete24Filled,
  Delete28Filled,
} from "@fluentui/react-icons";
import { UpdateDisabled, UploadFile } from "@mui/icons-material";

import upload from "../../assets/upload-img.png";

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
          <Upload>
            <h2>FAÇA O UPLOUD DO SEU DOCUMENTO AQUI!!</h2>
              <div></div>
          </Upload>
          <BoxList>
            <table>
              <thead>
                <tr>
                  <th>FORMULÁRIOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>DKASKDKASD</span>
                    <div>
                      <BorderlessButton
                        doSomething={() => doGoToRegister()}
                        text="BAIXAR COM CSV"
                      />
                      <BorderlessButton
                        doSomething={() => doGoToRegister()}
                        text="BAIXAR COM TXT"
                      />
                      <i>
                        <Delete28Filled />
                      </i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </BoxList>
        </BoxUpload>
      </Container>
    </>
  );
}

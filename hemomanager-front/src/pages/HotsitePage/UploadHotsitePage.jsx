import React, { useState } from "react";
import { HeaderComponent } from "../../components/Header";
import {api} from "../../api";
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

  function getCSV() {
    api
      .get(
        "/platelets/dowload-csv?donorId=" + sessionStorage.getItem("donorId"),
        {
          headers: {
            'Content-Type': 'application/txt',
          }
        }
      )
      .then((resp) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([resp.data]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `Donors.csv`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }

  function getTxt() {
    api
      .get(
        "/platelets/dowload-txt?donorId=" + sessionStorage.getItem("donorId"),
        {
          headers: {
            'Content-Type': 'application/txt',
          }
        }
      )
      .then((resp) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([resp.data]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `Donors.txt`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }

  // const handleUpload = (files) => {
  //   Papa.parse(files[0], {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: function (results) {
  //       console.log(results.data)
  //       salvarCSV(results.data)
  //     }
  //   })
  // }

  function salvarCSV(dados) {
    if (dados.length != 0) {
      api.post(`/upload-csv`, dados)
        .then(async function (respostaObtida) {
          console.log(respostaObtida)
        })
        .catch((errorOcorrido) => {
          console.log(errorOcorrido)
        });
    }
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
          <p>VOCÊ TAMBÉM PODE FAZER O UPLOAD DO SEU FORMULÁRIO!</p>
        </Header>
        <BoxUpload>
          {/* <Dropzone
            accept="text/csv"
            onDropAccepted={handleUpload}>
          <Upload>
            <h2>FAÇA O UPLOUD DO SEU DOCUMENTO AQUI!!</h2>
              <div></div>
          </Upload> {
            ({ getRootProps, getInputProps }) => (
              <div
              {...getRootProps()}
            >
              <input
                {...getInputProps()}
                type="file"
                name="file"
              />
            </div>
            )
          }
          </Dropzone> */}
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
                    <div>
                      <BorderlessButton
                        doSomething={() => getCSV()}
                        text="BAIXAR COM CSV"
                      />
                      <BorderlessButton
                        doSomething={() => getTxt()}
                        text="BAIXAR COM TXT"
                      />
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
import logoImg from "../../assets/logotypes/logo-2.png";

import React, { useState } from "react";

import { BorderlessButton } from "../shared/BorderlessButton";

import { EditProfile } from "../editProfile";
import { NewSchedule } from "../NewSchedule"
import { SchedulesUser } from "../ShedulesUser";
import { useNavigate } from "react-router-dom";
import { Content, Header, Perfil } from "./styles";
import { MenuDoador } from "../DonorMenu";

import { api } from "../../api";
import { MaxDialogHour } from "../shared/DialogHour";

export function PerfilUsuario() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const id = sessionStorage.getItem("id");
  const [name, setName] = useState(sessionStorage.getItem("user"));
  const [password, setPassword] = useState(sessionStorage.getItem("password"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [phone, setPhone] = useState(sessionStorage.getItem("phone"));
  const [birthDate, setBirthDate] = useState(sessionStorage.getItem("birth"));
  const [cpf, setCpf] = useState(sessionStorage.getItem("cpf"));
  const [sex, setSex] = useState(sessionStorage.getItem("sex"));
  const [validDonor, setValodDonor] = useState(
    sessionStorage.getItem("validDonor")
  );

  const [error, setError] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  function doIsOpenModalTrue() {
    console.log("TO aberto");
    setIsOpen(true);
  }

  function doIsOpenModalFalse() {
    console.log("TO FECHADO");
    setIsOpen(false);
  }

  function logOut() {
    sessionStorage.clear();
    sessionStorage.setItem("page", 2);
    navigate("/area-usuario");
  }

  function doFocused() {
    setIsFocused(true);
  }

  function doWithoutFocused() {
    setIsFocused(false);
  }

  function doEditData() {
    const user = {
      name,
      email,
      password,
      id,
      cpf,
      birthDate,
      sex,
      phone,
      validDonor,
    };

    api
      .put(`/donor/${id}`, user)
      .then(() => {
        sessionStorage.setItem("userType", 1);
        setIsEdit(false);
        doIsOpenModalTrue();
        setTimeout(() => {
          doIsOpenModalFalse();
        }, 2000);
      })
      .catch((error) => {
        console.log("Erro no edit:", error);
        console.log("User: ", user);
      });

    api.post(`/donor/current/`, { email, password }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="" />
        <BorderlessButton doSomething={() => logOut()} text="Sair" />
      </Header>
      <Perfil>
        <h4>
          <img
            src={
              sex === "MALE"
                ? "https://cdn-icons-png.flaticon.com/512/1340/1340619.png"
                : "https://cdn-icons-png.flaticon.com/512/866/866954.png"
            }
          />
        </h4>
        <h1>{name}</h1>
      </Perfil>
      <MenuDoador
        method1={() => setPage(1)}
        method2={() => setPage(2)}
        method3={() => setPage(3)}
        page={page}
      />

      <Content>
        <div>
          {page === 1 ? (
            <h1>
              <BorderlessButton
                doSomething={() => setIsEdit(true)}
                text="EDITAR"
              />
            </h1>
          ) : (
            ""
          )}
          {page === 1 ? (
            <EditProfile
              name={name}
              email={email}
              password={password}
              setPassword={setPassword}
              phone={phone}
              sex={sex}
              setEmail={setEmail}
              setName={setName}
              setPhone={setPhone}
              setSex={setSex}
              isEdit={!isEdit}
              focused={isFocused}
              setFocused={
                isFocused ? () => doWithoutFocused() : () => doFocused()
              }
              isPassword={isFocused ? "text" : "password"}
            />
          ) : (
            ""
          )}
          {page === 2 ? <SchedulesUser /> : ""}
          {page === 3 ? <NewSchedule /> : ""}
        </div>
        {isEdit && page === 1 ? (
          <div className="edit">
            <BorderlessButton doSomething={() => doEditData()} text="SALVAR" />
          </div>
        ) : (
          ""
        )}
        <MaxDialogHour isOpen={isOpen} isClose={doIsOpenModalFalse} />
      </Content>
    </>
  );
}

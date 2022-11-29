import logoImg from "../../assets/logotypes/logo-2.png";
import mirian from "../../assets/mirian.svg";
import React, { useState } from "react";

import { BorderlessButton } from "../shared/BorderlessButton";

import { EditProfile } from "../editProfile";
import { SchedulesUser } from "../ShedulesUser";
import { useNavigate } from "react-router-dom";
import { Content, Header, Perfil } from "./styles";
import { MenuDoador } from "../DonorMenu";
import { NewSchedule } from "../NewSchedule";

export function PerfilUsuario() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState(sessionStorage.getItem("user"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [phone, setPhone] = useState(sessionStorage.getItem("phone"));
  const [sex, setSex] = useState(sessionStorage.getItem("sex"));

  function logOut() {
    sessionStorage.clear();
    sessionStorage.setItem("page", 2);
    navigate("/area-usuario");
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="" />
        <BorderlessButton doSomething={() => logOut()} text="Sair" />
      </Header>
      <Perfil>
        <img src={mirian} alt="" />
        <h1>{name}</h1>
      </Perfil>
      <MenuDoador
        method1={() => setPage(1)}
        method2={() => setPage(2)}
        method3={() => setPage(3)}
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
              phone={phone}
              sex={sex}
              setEmail={setEmail}
              setName={setName}
              setPhone={setPhone}
              setSex={setSex}
              isEdit={!isEdit}
            />
          ) : (
            ""
          )}
          {page === 2 ? <SchedulesUser /> : ""}
          {page === 3 ? <NewSchedule /> : ""}
         
        </div>
        {isEdit ? (
            <div className="edit">
              <BorderlessButton
                doSomething={() => setIsEdit(false)}
                text="SALVAR"
              />
            </div>
          ) : (
            ""
          )}
      </Content>
    </>
  );
}

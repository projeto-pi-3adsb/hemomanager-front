import Modal from "react-modal";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Input } from "../shared/Input";

import { Container } from "./styles";

Modal.setAppElement("#root");

export function RegisterModal({ open, close }) {
  return (
    <>
      <Modal
        onRequestClose={close}
        isOpen={open}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <h2>Novo Funcionário</h2>
          <Input type="text" placeholder="Nome Completo" />
          <Input type="email" placeholder="Email" />
          <Input type="number" placeholder="Celular" />
          <select>
            <option value="MANAGER">Gerente</option>
            <option value="NURSE">Enfermeiro</option>
            <option value="RECEPTIONIST">Recepcionista</option>
          </select>
          <BorderlessButton type="type" text="Cadastrar" />
        </Container>
      </Modal>
    </>
  );
}

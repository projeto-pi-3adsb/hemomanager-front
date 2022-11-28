import Modal from "react-modal";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Input } from "../shared/Input";


import { Container } from "./styles";

Modal.setAppElement("#root");

export function RegisterModal({
  open,
  close,
  setTitle,
  selectSomething,
  setType,
  setText,
  setDate,
  setTime,
  bloodBag,
  doRegister,
  hourRegister,
}) {
  return (
    <>
      <Modal
        onRequestClose={close}
        isOpen={open}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <h2>{setTitle}</h2>
          <div>
            <Input doSomething={setDate} typeInput="date" />
            {hourRegister ? (
              <Input doSomething={setTime} typeInput="time" />
            ) : (
              ""
            )}
          </div>
          {bloodBag ? (
            <select onChange={(e) => selectSomething(e.target.value)}>
              <option value="">Selecionar opção</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          ) : (
            ""
          )}

          <BorderlessButton
            doSomething={doRegister}
            typeButton={setType}
            text={setText}
          />
        </Container>
      </Modal>
    </>
  );
}

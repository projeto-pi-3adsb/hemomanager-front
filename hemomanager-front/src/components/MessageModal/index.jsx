import Modal from "react-modal";

import { Container } from "./styles";

Modal.setAppElement("#root");

export function MessageModal({
  open,
  close,
  setTitle,
  message,
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
            <p>{message}</p>
          </div>
        </Container>
      </Modal>
    </>
  );
}

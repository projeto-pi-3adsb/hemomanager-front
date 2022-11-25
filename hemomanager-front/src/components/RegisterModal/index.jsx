import Modal from "react-modal";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Input } from "../shared/Input";

import { Container } from "./styles";

Modal.setAppElement("#root");

export function RegisterModal({
  open,
  close,
  setTitle,
  doSomething,
  selectSomething,
  placeholderDescription,
  setType,
  setText,
  bloodBag,
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
            <Input typeInput="date" />
            <Input typeInput="time" />
          </div>
          {bloodBag ? (
            <select  onChange={(e) => selectSomething(e.target.value)}>
              <option value="APos">A+</option>
              <option value="ANeg">A-</option>
              <option value="BPos">B+</option>
              <option value="ABPos">AB+</option>
              <option value="ABNeg">AB-</option>
              <option value="OPos">O+</option>
              <option value="ONeg">O-</option>
            </select>
          ) : (
            ""
          )}
          <textarea
            placeholder={placeholderDescription}
            onChange={(e) => doSomething(e.target.value)}
          ></textarea>

          <BorderlessButton typeButton={setType} text={setText} />
        </Container>
      </Modal>
    </>
  );
}

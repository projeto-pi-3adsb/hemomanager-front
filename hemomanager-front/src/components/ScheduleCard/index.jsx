import { Delete20Filled } from "@fluentui/react-icons";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function SchedulesCard({ title, description, doCancel }) {
  return (
    <>
      <Container>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Dia 24/06/2023 | Às 15:45H</span>
          <BorderlessButton
            icon={<Delete20Filled />}
            doSomething={doCancel}
            text="CANCELAR AGENDAMENTO"
          />
        </div>
      </Container>
    </>
  );
}

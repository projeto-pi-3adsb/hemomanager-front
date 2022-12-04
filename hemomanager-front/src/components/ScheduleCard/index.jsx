import { Delete20Filled } from "@fluentui/react-icons";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";



export function SchedulesCard({ title, description, doCancel, hour }) {
  return (
    <>
      <Container>
        <div>
          <h1>{title}</h1>
          <p>
            <span>{description}</span>
          </p>
          <span>{hour}</span>
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

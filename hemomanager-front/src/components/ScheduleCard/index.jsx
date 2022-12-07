import { Delete20Filled } from "@fluentui/react-icons";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function SchedulesCard({ title, description, doCancel, hour, date }) {
  return (
    <>
      <Container>
        <div>
          <h1>{title}</h1>
          <p>
            <span>{description}</span>
          </p>
          <span>
            Dia {new Intl.DateTimeFormat("pt-BR", {}).format(new Date(date))} às{" "}
            {hour}h
          </span>
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

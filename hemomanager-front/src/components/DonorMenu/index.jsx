import { CalendarLtr28Filled, Wrench24Filled } from "@fluentui/react-icons";

export function DonorMenu({ method1, method2 }) {
  return (
    <>
      <li>
        <button onClick={method1}>
          <i>
            <CalendarLtr28Filled />
          </i>
          <span>Agendamentos</span>
        </button>
        <button onClick={method2}>
          <i>
            <Wrench24Filled />
          </i>
          <span>Configurações</span>
        </button>
      </li>
    </>
  );
}

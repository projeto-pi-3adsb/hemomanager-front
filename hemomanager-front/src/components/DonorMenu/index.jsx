import {
  CalendarLtr28Filled,
  PeopleCommunity24Filled,
  Wrench24Filled,
} from "@fluentui/react-icons";

export function DonorMenu({ method1, method2 }) {
  return (
    <>
      <li>
        <button onClick={method1}>
          <i>
            <CalendarLtr28Filled />
          </i>
          <span>Configurações </span>
        </button>
        <button onClick={method2}>
          <i>
            <Wrench24Filled />
          </i>
          <span>Agendamentos</span>
        </button>
      </li>
    </>
  );
}

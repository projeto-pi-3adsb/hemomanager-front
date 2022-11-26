import {
  Board28Filled,
  CalendarLtr28Filled,
  Clock24Filled,
  PeopleCommunity24Filled,
  ReceiptBag24Filled,
  Wrench24Filled,
} from "@fluentui/react-icons";

export function ManagerMenu({
  method1,
  method2,
  method3,
  method4,
  method5,
  method6,
}) {
  return (
    <>
      <li>
        <button onClick={method1}>
          <i>
            <Board28Filled />
          </i>
          <span>Dashboard</span>
        </button>
        <button onClick={method2}>
          <i>
            <CalendarLtr28Filled />
          </i>
          <span>Agendamentos</span>
        </button>
      </li>
      <li>
        <button onClick={method3}>
          <i>
            <Clock24Filled />
          </i>
          <span>Disponibilizar Horários</span>
        </button>
        <button onClick={method4}>
          <i>
            <ReceiptBag24Filled />
          </i>
          <span>Estoque</span>
        </button>
      </li>
      <li>
        <button onClick={method6}>
          <i>
            <Wrench24Filled />
          </i>
          <span>Configurações</span>
        </button>
      </li>
    </>
  );
}

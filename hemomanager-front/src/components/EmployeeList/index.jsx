import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

const employes = [
  { name: "John", email: "james@gmail.com", role: "administrator" },
  { name: "Ana", email: "ana@gmail.com", role: "Manager" },
  { name: "Samuel", email: "tomimatu@gmail.com", role: "Developer" },
];

export function EmployeeList({ isOpen }) {
  return (
    <Container>
      <h1>
        <BorderlessButton method={isOpen } text="CADASTRAR FUNCIONARIO" />
      </h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {employes.map((employee) => (
            <tr key={employee.email}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
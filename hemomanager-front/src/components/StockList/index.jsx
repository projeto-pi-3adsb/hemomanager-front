import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function StockList({ isOpen }) {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    api
      .get(`/stock/bloodType/${sessionStorage.id}`)
      .then((data) => setBags(data.data));
  }, [setBags]);


  return (
    <Container>
      <h1>
        <BorderlessButton doSomething={isOpen} text="INSERIR BOLSA" />
      </h1>
      <table>
        <thead>
          <tr>
            <th>Tipo Sanguíneo</th>
            <th>Data da Coleta</th>
          </tr>
        </thead>
        <tbody>
          {bags.map((bag) => (
            <tr>
              <td>{bag.typeBlood}</td>
              <td>{bag.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

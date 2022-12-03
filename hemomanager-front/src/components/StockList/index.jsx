import { Delete20Filled } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Container } from "./styles";

export function StockList({ isOpen }) {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    api
      .get(`/stock/full/${sessionStorage.id}`)
      .then((data) => setBags(data.data));

    bags.map((bag) => console.log(bag));
  }, [setBags]);

  function handleUseBag(bagId) {
    api
      .delete(`/stock/${bagId}`)
      .then(() => setBags(prev => prev.filter(bag => bag.id !== bagId)));
  }

  return (
    <Container>
      <h1>
        <BorderlessButton doSomething={isOpen} text="INSERIR BOLSA" />
      </h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Tipo Sanguíneo</th>
              <th>Data da Coleta</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            {bags?.map((bag) => (
              <tr key={bag.counter}>
                <td>{bag.bloodType}</td>
                <td>{bag.collectionDate}</td>
                <td>
                  <Delete20Filled onClick={() => handleUseBag(bag.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
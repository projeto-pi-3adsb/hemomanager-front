import { Delete20Filled } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { MaxDialogBag } from "../shared/DialogBag";
import { Container } from "./styles";

export function StockList({ isOpen }) {
  const [bags, setBags] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    api
      .get(`/stock/full/${sessionStorage.id}`)
      .then((data) => setBags(data.data));
  }, [bags]);

  function validateDelete() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  function doRemoveBag(bagId) {
    api
      .delete(`/stock/${sessionStorage.id}/${bagId}`)
      .then(() => {
        setBags((prev) => prev.filter((bag) => bag.id !== bagId));
        validateDelete();
      })
      .catch((err) => {
        console.log("DELETE ERROR: ", err.response.status);
      });
  }

  function handleUseBag(bagId) {
    api
      .delete(`/stock/${bagId}`)
      .then(() => setBags(prev => prev.filter(bag => bag.id !== bagId)));
  }

  function getCSV() {
    api
      .get(
        "/stock/download-csv/" + sessionStorage.getItem("id"),
        {
          headers: {
            'Content-Type': 'application/txt',
          }
        }
      )
      .then((resp) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([resp.data]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `stock.csv`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }

  return (
    <Container>
      <h1>
        <BorderlessButton doSomething={() => getCSV()}text="BAIXAR COM CSV"/>
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
            {bags.length > 0
              ? bags.map((bag) => (
                  <tr key={bag.id}>
                    <td>{bag.bloodType}</td>
                    <td>
                      {new Intl.DateTimeFormat("pt-BR", {}).format(
                        new Date(bag.collectionDate)
                      )}
                    </td>
                    <td>
                      <Delete20Filled onClick={() => doRemoveBag(bag.id)} />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <MaxDialogBag isOpen={open} />
      </div>
    </Container>
  );
}
// Commonjs
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { api } from "../../api";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Input } from "../shared/Input";
import { Box, Confirm, Container } from "./styles";

export function NewSchedule() {
  const [hemocenters, setHemocenters] = useState([]);
  const [localAddress, setLocaAddress] = useState();
  const [selected, setSelected] = useState([]);

  function getLocalAddress(zipCode) {
    axios
      .get(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((data) => {
        setLocaAddress(data.data);
      })
      .catch((error) => {
        console.log("Erro :", error);
      });
  }

  useEffect(() => {
    getAllHemocenters();
  }, []);

  async function getAllHemocenters() {
    await api
      .get("/hemocenter")
      .then((data) => {
        setHemocenters(data.data);
        console.log(hemocenters);
      })
      .catch((error) => {
        console.error(error.status);
      });
  }

  function doSetLocalHemocenter(hemo) {
    api.post("/hemocenter/current/", hemo).then((data) => {
      setSelected(data.response);
    });
    getLocalAddress(selected.zipCode);
    setSelected(hemo);
    console.log("HEMO:", localAddress);
  }

  return (
    <>
      <Container>
        <div className="select-hemocenter">
          <div className="select">
            <h1>Selecione um Hemocentro para Realizar sua doação</h1>
            <select onChange={(e) => doSetLocalHemocenter(e.target.value)}>
              <option value="">Selecionar Hemocentro</option>
              {hemocenters.length > 0
                ? hemocenters.map((hemo) => {
                    return (
                      <option key={hemo.uuid} value={hemo.uuid}>
                        {hemo.name}
                      </option>
                    );
                  })
                : null}
              {console.log("Local :")}
              {console.log("Hemocentro :", selected)}
            </select>
          </div>
          <div className="info">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Local</th>
                  <th>Número</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selected?.name}</td>
                  <td>hdashd</td>
                  <td>777</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="schedule-avaliable">
          <OwlCarousel className="owl-theme" items="3" autoPlay nav dots>
            <Box>
              <h1>
                <span>Hemocentro da tia</span>
                <p>Quinta-Feira</p>
              </h1>
              <section>
                <h1>15:56H</h1>
                <Input typeInput="radio" />
              </section>
            </Box>
            <Box>
              <h1>
                <span>Hemocentro da tia</span>
                <p>Quinta-Feira</p>
              </h1>
              <section>
                <h1>15:56H</h1>
                <Input typeInput="radio" />
              </section>
            </Box>
            <Box>
              <h1>
                <span>Hemocentro da tia</span>
                <p>Quinta-Feira</p>
              </h1>
              <section>
                <h1>15:56H</h1>
                <Input typeInput="radio" />
              </section>
            </Box>
            <Box>
              <h1>
                <span>Hemocentro da tia</span>
                <p>Quinta-Feira</p>
              </h1>
              <section>
                <h1>15:56H</h1>
                <Input typeInput="radio" />
              </section>
            </Box>
          </OwlCarousel>
          <Confirm>
            <BorderlessButton text="AGENDAR" />
          </Confirm>
        </div>
      </Container>
    </>
  );
}

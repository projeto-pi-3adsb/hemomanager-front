// Commonjs
import OwlCarousel from "react-owl-carousel";
import { BorderlessButton } from "../shared/BorderlessButton";
import { Input } from "../shared/Input";
import { Box, Confirm, Container } from "./styles";

export function NewSchedule() {
  return (
    <>
      <Container>
        <div className="select-hemocenter">
          <div className="select">
            <h1>Selecione um Hemocentro para Realizar sua doação</h1>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
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
                  <td>Hemocentro da tia</td>
                  <td>Rua de sei la mais o que</td>
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

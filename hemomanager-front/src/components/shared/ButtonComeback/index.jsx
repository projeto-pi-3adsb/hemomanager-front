import { Button } from "./styles";
import arrow from "../../../assets/arrow-left.svg";
import arrowWhite from "../../../assets/arrow-left-white.svg";

export function ButtonComeback({ method, white }) {
  return (
    <Button onClick={method}>
      <img src={white ? arrowWhite : arrow} alt="Arrow left" />
    </Button>
  );
}

import { ButtonWithBorder } from "../shared/Buttons/ButtonWithBorder"
import { ButtonWithoutBorder } from "../shared/Buttons/ButtonWithoutBorder"

export function Header() {
    return (<>
        <div className="header-container">
            <ButtonWithoutBorder name="Home"/>
            <ButtonWithoutBorder name="Sobre Nós"/>
            <ButtonWithoutBorder name="Orientações"/>
            <ButtonWithoutBorder name="Perguntas Frequentes"/>
            <ButtonWithBorder name="Cadastro"/>
            <ButtonWithBorder name="Login"/>
        </div>
    </>)
}
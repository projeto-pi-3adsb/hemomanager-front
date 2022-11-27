import React from "react";
import {BoxButton, BoxImg} from "./style";
import ImgLateral from "../../assets/imgLateral.png"


export function CadastroDoador(){
    return(
        <>
        <BoxImg>
            <img src={ImgLateral} alt="ImgLateral" />
            <BoxButton>
                <button>CADASTRO</button>
                <button>LOGIN</button>
            </BoxButton>
        </BoxImg>
        </>
    )
}
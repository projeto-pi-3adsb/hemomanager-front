import React from "react";
import {
    BoxCard,
    BoxImg,
    BoxText,
    Title,
    SubTitle,
    BoxButton,
    Button
} from "./styles"

import Maps from "../../../assets/maps.png"

export function CardMeusAgend(props) {
    return (<>
        <BoxCard>
        <BoxImg>
            <img src={Maps} id="mapa" />
        </BoxImg>
        <BoxText>
            <Title>
                lalalaall
            </Title>
            <SubTitle>
                dhdhdhd
            </SubTitle>
        </BoxText>
        <BoxButton>
            <Button>
                dfgjfghjfg
            </Button>
        </BoxButton>
        </BoxCard>
     </>)
}
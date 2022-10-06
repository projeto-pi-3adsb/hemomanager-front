import React from "react";
import {
    BoxCard,
    BoxImg,
    BoxText,
    Title,
    SubTitle,
    Description,
    BoxButton,
    Button,
    ListCard
} from "./styles"

import Maps from "../../../assets/maps.png"

export function CardMeusAgend(props) {
    return (<>
        <ListCard>
        <BoxCard>
        <BoxImg>
            <img src={Maps} id="mapa" />
        </BoxImg>
        <BoxText>
            <Title>
                HEMOCENTRO FLOR DO CAMPO
            </Title>
            <SubTitle>
                SÃO PAULO - SP,  Rua Haddock Lobo 565, Vila Brasilândia
            </SubTitle>
            <Description>
                asdfghhgfdsadj
                asdfghgfdsaasd
                asdfggbfvdcsxs
            </Description>
        </BoxText>
        <BoxButton>
            <Button>
                CANCELAR AGENDAMENTO
            </Button>
        </BoxButton>
        </BoxCard>
        <BoxCard>
        <BoxImg>
            <img src={Maps} id="mapa" />
        </BoxImg>
        <BoxText>
            <Title>
                HEMOCENTRO FLOR DO CAMPO
            </Title>
            <SubTitle>
                SÃO PAULO - SP,  Rua Haddock Lobo 565, Vila Brasilândia
            </SubTitle>
            <Description>
                asdfghhgfdsadj
                asdfghgfdsaasd
                asdfggbfvdcsxs
            </Description>
        </BoxText>
        <BoxButton>
            <Button>
                CANCELAR AGENDAMENTO
            </Button>
        </BoxButton>
        </BoxCard>
        <BoxCard>
        <BoxImg>
            <img src={Maps} id="mapa" />
        </BoxImg>
        <BoxText>
            <Title>
                HEMOCENTRO FLOR DO CAMPO
            </Title>
            <SubTitle>
                SÃO PAULO - SP,  Rua Haddock Lobo 565, Vila Brasilândia
            </SubTitle>
            <Description>
                asdfghhgfdsadj
                asdfghgfdsaasd
                asdfggbfvdcsxs
            </Description>
        </BoxText>
        <BoxButton>
            <Button>
                CANCELAR AGENDAMENTO
            </Button>
        </BoxButton>
        </BoxCard>
        </ListCard>   
     </>)
}
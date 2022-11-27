import React from 'react';
import { HeaderDoador2 } from '../../components/Header/HeaderDoador2';
import { MenuDoador } from '../../components/shared/Cards/MenuDoador';
import { TituloNovoAgendamento } from '../../components/shared/Cards/TituleNovoAgendamento';
import { BoxAgend, BoxCalendario, BoxHemo, BoxHorario, BoxText, BoxTitulo, Container, Description, Titulo} from './style';

export function NovoAgendamento(){
    return(
        <>
        <HeaderDoador2 />
        <MenuDoador/>
        <TituloNovoAgendamento />
        <Container>
            <BoxAgend>
                <BoxTitulo>SELECIONE  QUAL DIA VOCÊ IRÁ REALIZAR SUA DOAÇÃO</BoxTitulo>
                <BoxCalendario />
                <BoxTitulo>SELECIONE UM HEMOCENTRO PARA REALIZAR SUA DOAÇÃO</BoxTitulo>
                <BoxHemo />
                <BoxTitulo>SELECIONE O HORÁRIO DA SUA DOÇÃO</BoxTitulo>
                <BoxHorario>
                    <BoxText>
                        <Description>
                           HEMOCENTRO FLOR DE LARANJA
                        </Description>
                        <BoxTitulo>
                            <Titulo>
                            18:20
                            </Titulo>
                        </BoxTitulo>
                    </BoxText>
                </BoxHorario>

            </BoxAgend>
        </Container>
        
        
       
        
        </>
    )
}
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { HiQuestionMarkCircle, HiCheckCircle, HiX } from 'react-icons/hi';
import { moneyFormatter } from '../helpers';

const Card = styled.div`
   background-color: #EFEFEF;
   min-width: 320px;
   max-width: 360px;
   height: 700px;
   border-radius: 6px;
   margin-right: 1rem;
   box-shadow: 2px 4px 8px #1A1C21;
   position:relative; 
`;

const CardHead = styled.div`
   background-color: #e2e2e2;
   padding-bottom: 1rem;
   border-radius: 6px 6px 0 0;
`;

const Title = styled.h3`
   font-size: 3.5rem;
   margin: 0;
   padding: 0;
   color: #0B0B15;
   text-align:center; 
   font-weight: 700;
`;

const Precio = styled.h4<any>`
    margin: 0;
    font-size: ${({ ars }) => (ars) ? '2rem' : '2.5rem'};
    font-weight: 500;
    color: ${({ ars }) => (ars) ? 'grey' : '#0B0B15'};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'IBM Plex Sans', sans-serif;

    span{
        font-size: ${({ ars }) => (ars) ? '2.2rem' : '2.8rem'};
        margin: 0 1rem;
    }
`;

const DivPrecioEnPesos = styled.div`
   width: 90%;
   margin:auto;
   border-bottom: 1px solid grey;
   color: grey;
   text-align: center;
   font-family: 'IBM Plex Sans', sans-serif;

   h4{
    margin: 2px 0;
    font-size: 1.8rem;
    color: #2F3239;
   }
   p{
    margin: 2px 0;
    font-size: 1.6rem;
   }
   span{
    margin-left: .5rem;
   }
`;

const Servicios = styled.div`
  padding: 0 2rem;
  margin:auto;
  height: 500px;
  overflow-y: auto;
  margin-bottom: 2rem;
`;

const ItemServicio = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    align-items:center;
    font-size: 1.6rem;
    color: #0B0B15;
    margin: 1rem 0;
    p{
        margin: 0;
    }
`;

const Button = styled.button`
   position:absolute;
   width: 90%;
   padding: 1rem 2rem;
   left: 0; right: 0; bottom: 1rem;
   margin:auto;
   border-style: none;
   border: 1.5px solid #0b0a20;
   border-radius: 6px;
   font-size: 2rem;
   font-weight: 700;

   &:hover{
    background-color: #0b0a20;
    color: #fff;
    transition: .3s;
   }
`;

interface Servicio {
    descripcion: string;
    ok: boolean;
}
interface Moneda{
    compra: number; venta: number; fecha: string;
}
interface Props {
    cotizacion: {blue: Moneda; oficial:Moneda;};
    plan: string;
    servicios: Servicio[];
    precio: number;
}
export const CardPlan: FC<Props> = ({ cotizacion, plan, servicios, precio }) => {

    const [priceIsActive, setPriceIsActive] = useState<boolean>(false);
    return (
        <Card>
            <CardHead>
                <Title>{plan}</Title>
                <Precio>US$:<span>{moneyFormatter(precio)}</span></Precio>
                <Precio ars={true}>ARS:<span>{moneyFormatter(precio * cotizacion.blue.venta)}</span>
                    <HiQuestionMarkCircle color='#6DAF69'
                        onClick={() => setPriceIsActive(!priceIsActive)}
                    />
                </Precio>

                {
                    (priceIsActive) &&
                    <DivPrecioEnPesos>
                        <h4>{cotizacion.blue.fecha}</h4>
                        <p>Dolar Blue: $<span>{cotizacion.blue.venta}</span></p>
                        <p>Dolar Oficial: $<span>{cotizacion.oficial.venta}</span></p>
                    </DivPrecioEnPesos>
                }
            </CardHead>
            <Servicios>
                {servicios.map((servicio, i) => (
                    <ItemServicio key={i}>
                        {
                            (servicio.ok) ? 
                            <HiCheckCircle size="2.5rem" />
                            :
                            <HiX size="2.5rem"/>
                        }
                        <p>{servicio.descripcion}</p>
                    </ItemServicio>
                ))}
            </Servicios>
            <Button>Contactar</Button>
        </Card>
    )
}

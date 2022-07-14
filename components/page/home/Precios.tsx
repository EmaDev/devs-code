import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCotizacionDolarBlue, getCotizacionDolarOficial } from '../../../api/cotizadorMoneda';
import { CardPlan } from '../../CardPlan';
import { Section, Title } from '../../Section.element';

const Container = styled.div`
   width: 100%;
   display:flex;
   align-items:center;
   padding: .5rem;
   padding-bottom: 3rem;
   margin: auto;
   overflow-x: auto;

   @media(min-width: 1000px){
    justify-content: center;
   }
`;

const basico = [
{ descripcion: 'HTML, CSS, Java Script', ok: true },
{ descripcion: 'Cerficado SSL', ok: true },
{ descripcion: 'Redireccion a Whats App personalizado', ok: true },
{ descripcion: 'Acceso a APIS', ok: true },
{descripcion: 'Dominio personalizado', ok: true},
{descripcion: 'Autenticacion de usuario con Google', ok:false},
{descripcion: 'Panel de administracion',ok:false},
{ descripcion: 'Acceso offline', ok: false },
]
const estandar = [
  {descripcion: 'Caracteristicas del plan Basico', ok:true},
  {descripcion: 'Autenticacion de usuario con Google', ok:true},
  {descripcion: 'Panel de administracion',ok:true},
  { descripcion: 'MERN', ok: true },
  {descripcion: 'Consumo de APIS propias y externas',ok:true},
  {descripcion: 'Base de datos ilimitada', ok:true},
  { descripcion: 'Acceso offline', ok: false },
  ]

  const prem = [
    {descripcion: 'Caracteristicas plan Basico y Estandar', ok:true},
    { descripcion: 'Acceso offline', ok: true },
    {descripcion: 'Marcado Pago API',ok:true},
    { descripcion: 'Paypal Api', ok: true },
    { descripcion: 'Mail empresarial', ok: true },
  ];
const PLANES = [
  { plan: 'Plan Basico', precio: 60, servicios: basico },
  { plan: 'Plan Estandar', precio: 98, servicios: estandar },
  { plan: 'Premium', precio: 500, servicios: prem },
]


export const Precios = () => {

  const [cotizacionMoneda, setCotizacionMoneda] = useState<any>();

  useEffect(() => {
    const monedaApi = async () => {
      const resp = await getCotizacionDolarBlue();
      const resp1 = await getCotizacionDolarOficial();
      setCotizacionMoneda({
        blue: resp,
        oficial: resp1
      });
    }

    monedaApi();
  }, []);


  return (
    <Section color='#fff' bg='#0b0a20'>
      <Title>Precios</Title>
      <Container>
        
          {
            (cotizacionMoneda) &&
            PLANES.map(plan => (
                <CardPlan
                key={plan.plan}
                  cotizacion={cotizacionMoneda}
                  plan={plan.plan}
                  servicios={plan.servicios}
                  precio={plan.precio}
                />

            ))
          }
      </Container>
    </Section>
  )
}

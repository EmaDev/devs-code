import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCotizacionDolarBlue, getCotizacionDolarOficial } from '../../../api/cotizadorMoneda';
import { getPlanes } from '../../../firebase/queries';
import { CardPlan } from '../../CardPlan';
import { Section, Title } from '../../Section.element';
import { Spinner } from '../../Spinner';

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


interface PlanProps {
  id:number;
  name:string;
  description: DescriptionPlan[];
  price:number;
}
interface DescriptionPlan{
  text: string;
  ok:boolean;
}

export const Precios = () => {

  const [cotizacionMoneda, setCotizacionMoneda] = useState<any>();
  const [planes, setPlanes] = useState<PlanProps[]>([]);

  useEffect(() => {
    const monedaApi = async () => {
      const resp = await getCotizacionDolarBlue();
      const resp1 = await getCotizacionDolarOficial();
      setCotizacionMoneda({
        blue: resp,
        oficial: resp1
      });
    }

    const getPlanesFromDB = async() => {
      const resp = await getPlanes();
      setPlanes(resp);
    }

    monedaApi();
    getPlanesFromDB();
  }, []);


  return (
    <Section color='#fff' bg='#0b0a20'>
      <Title>Precios</Title>
      <Container>
          {
            (planes.length > 0 && cotizacionMoneda) ?
            planes.map( plan => (
                <CardPlan
                  key={plan.name}
                  cotizacion={cotizacionMoneda}
                  plan={plan.name}
                  servicios={plan.description}
                  precio={plan.price}
                  id={plan.id}
                />
            )):
            <Spinner/>
          }
      </Container>
    </Section>
  )
}

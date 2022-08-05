import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Section, Title } from '../../Section.element';

const Container = styled.div`
   padding: 1.5rem;
   margin:auto;

   @media(min-width: 900px){
    width: 90%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    column-gap: 2rem;
   }
`;

const ImageCard = styled.div`  
    width: 100%; 
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #14141A;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;

    p{
        font-size: 2rem;
        text-align:center;
        margin-top: 0;
        font-weight: 500;
        max-width: 500px;
    }
`;
export const Servicios = () => {
    return (
        <Section color='#0B0B15'>
            <Title>Servicios</Title>
            <Container>
                <ImageCard>
                    <Image src={require('../../../assets/images/depliegue.svg')} width='250px' height='250px' alt="desplige"/>
                    <p>Diseños 100% responsivos y SEO friendly para un perfecto posicionamiento en los navegadores web.</p>
                </ImageCard>
                <ImageCard><Image src={require('../../../assets/images/responsive.svg')} width='210px' height='210px' alt="diseño responsive" />
                    <p>Alojaminto en servidores de alto rendiminto para el consumo de archivos sin demora y de acceso mundial.</p>
                </ImageCard>
                <ImageCard><Image src={require('../../../assets/images/server.svg')} width='250px' height='250px' alt="servidor alta velocidad"/>
                    <p>Panel de control de tu sitio web con roles de usuario autenticados.</p>
                </ImageCard>
            </Container>
        </Section>
    )
}

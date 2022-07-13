import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Section, TitleWithBorder } from '../../Section.element';

const Container = styled.div`
   margin:auto;
   justify-content: center;
   align-items: center;
   
   @media(min-width: 900px){
    display: grid;
    grid-template-columns: 45% 55%;
    column-gap: 1rem;
   }
`;
const TextosContainer = styled.div`
   margin: 2rem 0;
   @media(min-width: 700px){
    margin-bottom: 8rem;
   }
`;
const Texto = styled.div`
   font-size: 1.8rem;
   color: green;
   display: grid;
   grid-template-columns: 8% 92%;
   align-items: center;
   justify-content: center;
   margin: 1rem 0;
   p{
    margin: 0;
    color: white;
    margin-left: .5rem;
   }

   @media(min-width: 700px){
    font-size: 2.8rem;
   }
`;
export const Desarrollo = () => {
    return (
        <Section color='#000' gradient>
            <TitleWithBorder color='orange'>Desarrollo</TitleWithBorder>
            <Container>
                <TextosContainer>
                    <Texto><AiFillCheckCircle/><p>Basado en los estandares de la web</p></Texto>
                    <Texto><AiFillCheckCircle/><p>Utilizamos los frameworks mas populares</p></Texto>
                    <Texto><AiFillCheckCircle/><p>Codigo altamente escalable y reutilizable</p></Texto>
                </TextosContainer>
                <Image src={require('../../../assets/images/tools.svg')} alt="frameworks java script"/>
            </Container>
        </Section>
    )
}

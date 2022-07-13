import React from 'react'
import styled from 'styled-components';
import { Carrusel } from '../../Carrusel'
import { Section, SubTitle, Title } from '../../Section.element'

const Button = styled.button`
   padding: 1rem 2rem;
   margin: 2rem auto;
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
const images = [ 
    {key: 'vervrev', link:'https://swiperjs.com/get-started',
    img:'https://firebasestorage.googleapis.com/v0/b/landings-d1cb5.appspot.com/o/drink-app.jpg?alt=media&token=b5b243f2-41bc-4344-8f12-17217cf0fc94'},
    
    {key: 'cevrvo', link:'https://github.com/nolimits4web/Swiper/tree/master/demos/',
    img:'https://firebasestorage.googleapis.com/v0/b/landings-d1cb5.appspot.com/o/burger-app.jpg?alt=media&token=28acb40e-f4ed-4d59-a906-7c8504ec9659'},
    
    {key: 'cevrvrvvo',link:'https://www.udemy.com/', 
    img:'https://firebasestorage.googleapis.com/v0/b/landings-d1cb5.appspot.com/o/coffee-app.jpg?alt=media&token=5aef9d12-4a52-4774-8872-819247361368'},

    {key: 'vibbo', link: '',
    img:'https://firebasestorage.googleapis.com/v0/b/landings-d1cb5.appspot.com/o/menu-app.jpg?alt=media&token=69febbc3-96ea-4f75-982a-795d040ce316'},
    {key: 'evervmom', link: '',
   img:'https://firebasestorage.googleapis.com/v0/b/landings-d1cb5.appspot.com/o/gymapp.jpg?alt=media&token=85bce3c7-d0ec-40a9-821c-5881f6290feb'}
]
export const Proyectos = () => {
  return (
     <Section color='#0B0B15' >
        <Title>Proyectos</Title>
        <SubTitle color='grey'>Algunos proyectos de ejemplo</SubTitle>
        <Carrusel items={images}/>

        <Button>Ver mas</Button>
     </Section>
  )
}

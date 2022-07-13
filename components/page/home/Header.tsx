import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderContainer = styled.header`
   position:relative;
   width: 100%;
   height: 100vh;
   padding: 2rem;
   background-color: #2a2a73;
   background-image: url('/background.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const BackgrounHeader = styled.div`
   position:absolute;
   z-index: 1;
   width: 100%;
   height: 100%;
   background-color: rgba(10,12,23,0.7);
`;
const Textos = styled.div`
    z-index: 2;
    margin: 1rem auto;
    width: 90%;
    max-width: 500px;
    text-align: center;
    h1{
        font-size: 3rem;
        color: white;
        font-weight: 700;
    }
    h4{
        font-size: 2.2rem;
        color: #aaaaaa;
        font-weight: 400;
    }

    @media(min-width: 678px){
        h1{
            font-size: 4rem;
        }
        h4{
            font-size: 3rem;
        }
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <BackgrounHeader />
            <Image src={require('../../../assets/images/logo.png')}
                width={240} height={38}
                style={{zIndex: 2}}
                alt="logo empresa"
            />
            <Textos>
                <h1>Desarrollamos tu Pagina Web</h1>
                <h4>Sitios y aplicaciones Web de alto rendiemieto,
                    con un ecosistema completo de herramientas y
                    servicios modernos.</h4>
            </Textos>
        </HeaderContainer>
    )
}

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.footer`
   padding: 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: rgb(10,12,23);
   color: #fff;
   a{
    text-decoration: none;
    color: #fff;
   }
`;


export const Footer = () => {
    return (
        <Container>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Desarrollado por{' '}
                <span>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
            <p>Todos los derechos reservados ©2022</p>
        </Container>
    )
}

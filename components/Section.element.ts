import styled from 'styled-components';

interface SectionProps {
   bg?: string;
   color: string;
   gradient?: boolean;
}
export const Section = styled.section<SectionProps>`
   padding: 2rem 1rem;
   margin:auto;
   margin-top: -3px;
   background-color: ${({ bg }) => bg};
   color: ${({ color }) => color};
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
   ${({ gradient }) => gradient &&
      'background: rgb(9,8,28);background: linear-gradient(4deg, rgba(9,8,28,1) 0%, rgba(18,18,50,1) 35%, rgba(25,92,106,1) 100%);'
   } 
`;

export const Title = styled.h2`
   font-size: 3.5rem;
   margin: 1rem 0;
   text-transform: uppercase;
   text-align:center;
   font-weight: 700;
`;
export const SubTitle = styled.h4`
   font-size: 2rem;
   margin: 0;
   margin-bottom: 1rem;
   text-align:center;
   font-weight: 500;
   color: ${({ color }) => color};
`;
export const TitleWithBorder = styled.h2`
   font-size: 2.8rem;
   margin: 0;
   margin-top: 2rem;
   text-align:center;
   font-weight: 700;
   padding: .5rem 1.5rem;
   background-color: ${({ color }) => color};
   border-radius: 20px;
`;

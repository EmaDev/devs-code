import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Container = styled.div`
   width: 100%;
   max-width: 600px;
   margin:auto;
`;
const Card = styled.div`
   width: 100%;
   max-width: 800px;
   height: 500px;
   margin:auto;
   position: relative;

   @media(min-width: 768px){
    height: 750px;
   }

   img{
    position:absolute;
    object-fit: cover;
   }

   a{
    position: absolute;
    font-size: 3.5rem;
    color: green;
    left: 0; right: 0;top:0;
    margin:auto;
    text-align:center;
   }
   img{
    position:absolute;
    left: 0; right: 0; top: 0;
    margin:auto;
   }
`;


interface Item {
    key: string;
    img: string;
    link: string;
}
interface Props {
    items: Item[];
}

export const Carrusel: FC<Props> = ({ items }) => {

    return (
        <Container>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}

                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {
                    items.map(item => (
                        <SwiperSlide key={item.key}>
                            <Card>
                                <img
                                    src={item.img}
                                    width="350px"
                                    alt={item.key} />
                            </Card>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, Col } from 'antd';
import { Autoplay, EffectFlip, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IAdvertisement, INewsArticle } from '@/interfaces';
import { CardArticle } from '..';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import '../../styles/home/_carousel.scss';

interface ICarouselProps {
    articles?: INewsArticle[];
    advertisements?: IAdvertisement[];
}

export const Carousel = (props: ICarouselProps) => {
    const { articles, advertisements } = props;

    const result: any[] = [];

    // Hacer una copia del array de anuncios
    const copyAnuncios = [...advertisements!];

    // Iterar sobre los artículos y añadir anuncios cada 4 artículos
    for (let i = 0; i < articles!.length; i++) {
        result.push(articles![i]); // Agregar artículo actual

        // Si el índice es un múltiplo de 4 y hay anuncios disponibles, agregar un anuncio
        if ((i + 1) % 4 === 0 && copyAnuncios.length > 0) {
            result.push(copyAnuncios.shift()); // Agregar anuncio y eliminarlo de la lista de anuncios
        }
    }

    return (
        <div className="container-carousel">
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={ true }
                direction='horizontal'
                modules={[ Autoplay, EffectFlip, Pagination, Scrollbar ]}
                spaceBetween={ 1 }
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        initialSlide: 1
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        initialSlide: 1
                    },
                    380: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                        initialSlide: 1
                    },
                    390: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                        initialSlide: 1
                    },
                    485: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1500: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    }
                }}
            >
                {
                    result?.map((item, index) => (
                        <SwiperSlide key={ index }>
                            <Col xs={ 24 } key={ item.id } className="col-article-carousel">
                                {
                                    item.position == 'Carousel'
                                    ?
                                    <>
                                        {
                                            item.destinationUrl != null
                                            ? 
                                            <Link href={ item.destinationUrl! } target="_blank">
                                                <Card
                                                    className="card-ad-carousel"
                                                    cover={
                                                        <Image
                                                            className="img-article-carousel"
                                                            alt={ 'Ad carousel' }
                                                            src={ item.banneUrl ?? item.imagesOfAdvertisements[0].filePathUrl }
                                                            width={ 150 }
                                                            height={ 150 }
                                                        />
                                                    }
                                                >
                                                </Card>
                                            </Link>
                                            :
                                            <Card
                                                className="card-ad-carousel"
                                                cover={
                                                    <Image
                                                        className="img-article-carousel"
                                                        alt={ 'Ad carousel' }
                                                        src={ item.banneUrl ?? item.imagesOfAdvertisements[0].filePathUrl }
                                                        width={ 150 }
                                                        height={ 150 }
                                                    />
                                                }
                                            >
                                            </Card>
                                        }
                                    </>
                                    :
                                    <CardArticle article={ item } />
                                }                                    
                            </Col>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
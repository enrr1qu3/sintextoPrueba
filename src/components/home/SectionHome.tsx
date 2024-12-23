'use client';

import { useCallback, useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { EffectFlip, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const { Title } = Typography;
import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowLeftIcon, ArrowRightIcon } from '@/helpers/CustomIcons';
import { INewsArticle } from '@/interfaces';
import { CardArticle } from '..';

import '../../styles/home/_section-home.scss';
import { getArticlesFilterBySection } from '@/services';

interface ISectionHomeProps {
    sectionTitle?: string;
    sectionTitleURL?: string;
    articles?: INewsArticle[];
    currentPage?: number;
}

export const SectionHome = (props: ISectionHomeProps) => {
    const { articles, sectionTitle, sectionTitleURL, currentPage } = props;
    const [ swiperRef, setSwiperRef ] = useState<SwiperClass>();
    const [ isBeginning, setIsBeginning ] = useState(true);
    const [ isEnd, setIsEnd ] = useState<boolean>(false);
    // const [ loading, setLoading ] = useState<boolean>(true);

    const [ articlesTemp, setArticlesTemp ] = useState<any>(articles);
    const [ countCurrentPage, setCountCurrentPage ] = useState(currentPage);

    const handleSwiper = (swiper: SwiperClass) => {
        setSwiperRef(swiper);
        updateNavigationState(swiper);
    };

    const updateNavigationState = (swiper: SwiperClass) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [ swiperRef ]);
   
    const handleNext = useCallback(async () => {
        swiperRef?.slideNext();

        // Si el swiper llega al final del elemento
        if (swiperRef?.isEnd) {
            // setLoading(true);
            
            // Realiza la petición para cargar más artículos
            const response = await getArticlesFilterBySection({ SectionName: sectionTitleURL, PageSize: 6, PageNumber: countCurrentPage! + 1 });

            // Almacenamos el 'currentPage' del paginado para la próxima petición que se realice
            setCountCurrentPage(response.meta.currentPage);
            
            setArticlesTemp((prevArticles: any) => [ ...prevArticles, ...response.data ]);

            // setLoading(false);
        }

        // Habilita de nuevo el botón de 'Next' en el swiper
        setIsEnd(false);
    }, [ swiperRef, articlesTemp ]);

    return (
        <>
            {
                articles?.length == 0
                ? <></>
                : 
                <div style={{ marginBottom: 30 }}>
                    <Divider className="divider-home-section" />
                    <Title level={ 3 } className="section-title">{ sectionTitle }</Title>
                        <Row>
                            <Col xs={ 2 } sm={ 2 } md={ 1 } xl={ 1 } className="col-btn-arrow-left">
                                <Button type="link" disabled={ isBeginning } className="btn-arrow" onClick={ handlePrevious }>
                                    <ArrowLeftIcon />
                                </Button>
                            </Col>

                            <Col xs={ 20 } sm={ 20 } md={ 22 }  xl={ 22 }>

                                <Swiper
                                    onSwiper={ handleSwiper }
                                    onSlideChange={ (swiper) => updateNavigationState(swiper) }
                                    navigation={ true }
                                    modules={[EffectFlip, Navigation, Pagination, Scrollbar]}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 100,
                                        },
                                        400: {
                                            slidesPerView: 1,
                                            spaceBetween: 1,
                                        },
                                        600: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                        890: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1100: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        }
                                    }}
                                >
                                    {
                                        articlesTemp?.map((article: any) => (
                                            <SwiperSlide key={ article.id }>
                                                <Col className="col-home-section-article" span={ 24 } key={ article.id }>
                                                    <CardArticle article={ article } />
                                                </Col>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>                                
                            </Col>

                            <Col xs={ 2 } sm={ 2 } md={ 1 } xl={ 1 } className="col-btn-arrow-right">
                                <Button type="link" disabled={ isEnd } className="btn-arrow" onClick={ handleNext }>
                                    <ArrowRightIcon />
                                </Button>
                            </Col>
                        </Row>
                </div>
            }
        </>
    );
}
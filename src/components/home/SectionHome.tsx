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

interface ISectionHomeProps {
    sectionTitle?: string;
    articles?: INewsArticle[];
}

export const SectionHome = (props: ISectionHomeProps) => {
    const { articles, sectionTitle } = props;
    const [ swiperRef, setSwiperRef ] = useState<SwiperClass>();
    const [ isBeginning, setIsBeginning ] = useState(true);
    const [ isEnd, setIsEnd ] = useState(false);

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
   
    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [ swiperRef ]);

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
                                        articles?.map(article => (
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
'use client';

import { ISocialMediaArticle } from '@/interfaces';
import { Col, Divider, Typography } from 'antd';
const { Title } = Typography;

import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

import { CardSocialMediaArticle } from '..';
import '../../styles/home/_row-social-network.scss';

interface IRowSocialNetworkProps {
    sectionTitle?: string;
    articles?: ISocialMediaArticle[];
}

export const RowSocialNetwork = (props: IRowSocialNetworkProps) => {
    const { sectionTitle, articles } = props;
    
    return (
        <>
            {
                articles?.length == 0
                ? <></>
                : 
                <>
                    <Divider className="divider-home-section" />
                    <Title level={ 3 } className="section-title">{ sectionTitle }</Title>
   
                    <div className="container-social-network">
                        <Swiper
                            modules={[ EffectFlip, Pagination, Navigation ]}
                            pagination={{
                                clickable: true,
                                el: '.swiper-custom-pagination',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    initialSlide: 1,
                                },
                                400: {
                                    slidesPerView: 1,
                                    spaceBetween: 1,
                                    initialSlide: 1,
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
                                1400: {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                }
                            }}
                        >
                            {
                                articles?.filter(channel => channel.socialNetworkArticleURL != null).map((channel) => (
                                    <SwiperSlide key={ channel.id }>
                                        <Col xs={ 24 } key={ channel.id } className="col-social-network">
                                            <CardSocialMediaArticle socialMediaArticle={ channel } />
                                        </Col>
                                    </SwiperSlide>
                                ))
                            }
                            <div className="swiper-custom-pagination"/>
                        </Swiper>
                    </div>
                </>
            }
        </>
    );
}
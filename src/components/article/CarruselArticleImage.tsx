'use client'

import { Divider, Image, Typography } from "antd";
const { Title } = Typography;
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation,   } from 'swiper/modules';


export const CarruselArticleImage = ({ imagenesArticle }: { imagenesArticle: any }) => {

    return (
        <>
            <Divider className="separator" />

            <Title level={4} className="title-gallery">GALERÍA</Title>
            <Image.PreviewGroup>
                <Swiper
                    modules={[EffectFlip, Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {
                        imagenesArticle?.map((image: { id: number, filePathurl: string }) => (
                            <SwiperSlide key={image.id}>
                                <div className="container-gallery-image">
                                    <Image
                                        key={image.id}
                                        width="100%"
                                        height="100%"
                                        className="gallery-image"
                                        src={image.filePathurl}
                                     
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Image.PreviewGroup>
        </>
    )
}

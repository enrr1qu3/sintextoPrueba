"use client"
import React from 'react';
import { AdvertisementVertical } from "../advertisement/AdvertisementVertical";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
export default function AdvertisementCarousel({ advertisementV, numberInitial= 1 }: { advertisementV: any, numberInitial?:number }) {
    return (
        <div className="container-add-vertical" style={{ width: "100%", height: "100%" }}>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
              
               initialSlide={numberInitial}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="mySwiper">
                {
                    advertisementV?.map((publicidad: any) => (
                        <SwiperSlide key={publicidad.id} >
                            <AdvertisementVertical key={publicidad.id} imageUrl={publicidad.banneUrl || publicidad?.imagesOfAdvertisements[0]?.filePathUrl} urlToRedirect={publicidad.destinationUrl} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

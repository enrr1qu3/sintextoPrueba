'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { AdvertisementHorizontal } from '../advertisement/AdvertisementHorizontal';
export const AdvertisementHori = ({ advertisementH }: { advertisementH: any }) => {

    return (
        <div className="container-add-1" style={{ width: "100%", height: "100%" }}>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="mySwiper">
                {
                    advertisementH?.map((publicidad: any) => (
                        <SwiperSlide key={publicidad.id} >
                            <AdvertisementHorizontal key={publicidad.id} imageUrl={publicidad.banneUrl || publicidad?.imagesOfAdvertisements[0]?.filePathUrl} urlToRedirect={publicidad.destinationUrl} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

{/* {
                                                    adsHorizontal!.length > 0 
                                                    ? 
                                                        <AdvertisementHorizontal
                                                            imageUrl={
                                                                adsHorizontal![0].banneUrl! ?? adsHorizontal![0].imagesOfAdvertisements![0].filePathUrl!
                                                            }
                                                            urlToRedirect={ adsHorizontal![0].destinationUrl! }
                                                        />
                                                    : <></>
                                                } */}
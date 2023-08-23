import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselNavigation/CarouselRightNavigation";
import { useEffect } from "react";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  console.log("Data is: ", data)
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        {data ? (
          data.map((ele) => (
            <SwiperSlide key={ele.id}>{renderCardComponent(ele)}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>Loading...</SwiperSlide>
        )}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
};

export default Carousel;

import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styles from "../Carousel.module.css";
import Right from '../../../Assets/Right.png';

const CarouselRightNavigation = () => {
	const swiper = useSwiper();

	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
	}, []);

	return (
		<div className={styles.rightNavigation}>
			{!isEnd && <img src={Right} alt="logo" onClick={() => swiper.slideNext()} />}
		</div>
	);
};

export default CarouselRightNavigation;
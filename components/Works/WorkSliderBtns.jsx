"use client";
import { useSwiper } from "swiper/react";
import { icons_svg } from "../icons/icons_svgs";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <span className={iconStyles}>{icons_svg.leftArrow}</span>
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <span className={iconStyles}>{icons_svg.rightArrow}</span>
      </button>
    </div>
  );
};

export default WorkSliderBtns;

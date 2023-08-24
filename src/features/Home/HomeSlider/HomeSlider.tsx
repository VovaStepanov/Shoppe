"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from "swiper/modules";
import {Slide} from "./Slide";

import 'swiper/css';
import 'swiper/css/pagination';
import "./homeSlider.css";

import Image from "next/image";
import SlideImg1 from "@/assets/homeSlide1.png";

export const HomeSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                speed={700}
                pagination={{clickable: true}}
                autoplay={{
                    delay: 10_000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                className={"rounded-xl"}
            >
                <SwiperSlide>
                    <Slide productName={"Gold big hoops "} productPrice={"$ 68,00"} productUrl={"/"} image={<Image src={SlideImg1} alt={"slide"} />}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide productName={"Gold big hoops "} productPrice={"$ 68,00"} productUrl={"/"} image={<Image src={SlideImg1} alt={"slide"} />}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide productName={"Gold big hoops "} productPrice={"$ 68,00"} productUrl={"/"} image={<Image src={SlideImg1} alt={"slide"} />}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide productName={"Gold big hoops "} productPrice={"$ 68,00"} productUrl={"/"} image={<Image src={SlideImg1} alt={"slide"} />}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

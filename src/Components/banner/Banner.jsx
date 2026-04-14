import React, { useContext } from 'react'
import { useState } from 'react';
import { IsMobileContext } from '../../utilies/IsMobileContext';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { motion } from 'framer-motion';
export const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { ismobile } = useContext(IsMobileContext);
  return (
    <div className='banner'>
      <Swiper slidesPerView={1} modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
        <SwiperSlide>
          <div className="banner-image">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1 }} src="/src/assets/images/1039318-marvel-1943-rise-of-hydra-captain-america-et-black-panther-s-affrontent-dans-une-bande-annonce.jpg" alt="" />
            <div className="text-banner">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }}>Lorem ipsum dolor sit amet consectetur </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, esse. Ullam facilis numquam eum quaerat quis.</motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-image">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1 }} src="/src/assets/images/download.jfif" alt="" />
            <div className="text-banner">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }}>Lorem ipsum dolor sit amet consectetur</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, esse. Ullam facilis numquam eum quaerat quis.</motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-image">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1 }} src="/src/assets/images/marvel_characters_blog_cover.webp" alt="" />
            <div className="text-banner">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }}>Lorem ipsum dolor sit amet consectetur</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 1 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, esse. Ullam facilis numquam eum quaerat quis.</motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper className="banner-thumbs" modules={[Thumbs]} slidesPerView={3} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
        <SwiperSlide>
          <div className="thumbs ">
            <img src="/src/assets/images/1039318-marvel-1943-rise-of-hydra-captain-america-et-black-panther-s-affrontent-dans-une-bande-annonce.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="thumbs ">
            <img src="/src/assets/images/download.jfif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="thumbs ">
            <img src="/src/assets/images/marvel_characters_blog_cover.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

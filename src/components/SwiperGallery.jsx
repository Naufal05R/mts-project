/* eslint-disable react/prop-types */
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { galleryList } from '../constants';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const GallerySlides = ({ content, url }) => {
  return (
    <article className='overflow-clip relative w-full h-full'>
      <div className='w-full h-full bg-slate-400 absolute' />
      <img src={url} alt="" className='absolute' />
      <h5 className='absolute top-1/2 left-1/2 border border-black -translate-y-1/2 -translate-x-1/2'>{content}</h5>
    </article>
  );
};

const SwiperGallery = () => {
  return (
    <Swiper
      speed={300}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={false}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      }}
      pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }}
      autoplay={{ delay: 1800 }}
      className='mySwiper max-w-full w-[380px] pb-8 xl:w-[590px] md:w-[482px] md:h-[269px] h-[245px] xl:h-[365px] bg-transparent mx-auto mt-[65px]'
    >
      {galleryList.map((images, id) => {
        return (
          <SwiperSlide
            key={id}
            className=''
          >
            <GallerySlides {...images} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperGallery;

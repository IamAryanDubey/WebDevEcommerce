import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../components/db.json';
import Header from '../components/Header.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ItemPage = () => {
  const { id } = useParams();
  const item = db.find(item => item.id === parseInt(id));

  const filteredKeys = Object.keys(item).filter(key => key !== 'id' && key !== 'pictures' && key !== 'sellerId' && key !== 'searchKeywords' && key !== 'datePosted' && key !== 'negotiable' && key !== 'price' && key !== 'title' && key !== 'itemType' && key !== 'electronicsType');


  
  return (
    <div>
      <Header />
      <div className='PicturesCarousel'>
      <div className='w-[100%] md:w-[85%] mx-auto'>
        {/* Swiper Image Carousel */}
        {item.pictures && (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {item.pictures.map((picture, index) => (
              <SwiperSlide key={index}>
                <div className=' imageWrapper'>
                  <img 
                    src={picture} 
                    alt={`Picture ${index + 1}`} 
                    className='' 
                    onClick={() => handleImageClick(picture)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      
    </div>

      <div className='DescriptionBlocks py-[3vw]'>
        <div className='flex w-[80vw] md:w-[68vw] mx-auto justify-between gap-[2vw] md:gap-[1vw]'>
          <div className='infoBlock  w-full'> 
            <h2 className='font-bold text-primary text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px]'>{item.title}</h2>
          </div>
          <div className='infoBlock '> 
            <div className='flexCol h-full'>
              <h2 className='flex text-nowrap font-bold text-[26px] sm:text-[30px] lg:text-[36px] xl:text-[44px]'>$ {item.price}
              </h2>
              
            </div>
          </div>
        </div>

        <div className='sm:flex w-[80vw] md:w-[68vw] mx-auto justify-between gap-[2vw] md:gap-[1vw] mt-[2vw] md:mt-[1vw]'>
          <div className='infoBlock w-full h-fit'> 
            <h2 className='font-bold text-[18px] sm:text-[24px] md:text-[30px]'>Description</h2>
            <div className=''>
              {filteredKeys.map(key => (
                <p key={key}><span className='font-semibold text-[14px] sm:text-[16px] sm:text-[20px] '>
                  {key.replace(/_/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</span>: {item[key]}
                </p>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
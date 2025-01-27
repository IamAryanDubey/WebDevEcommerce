import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../components/db.json';
import Header from '../components/Header.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ItemPage = () => {
  const { id } = useParams();
  const item = db.find(item => item.id === parseInt(id));

  const filteredKeys = Object.keys(item).filter(key => key !== 'id' && key !== 'pictures' && key !== 'price' && key !== 'title');

// Updated ItemPage.js to add to cart functionality
const handleAddToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart!');
};


  
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

      <div className='descriptionBlocks'>
        <div className='priceandbtn'>
          <div className='infoBlock itemTitle'> 
            <h2 className=''>{item.title}</h2>
          </div>
          <div className='infoBlock '> 
            <div className='flexCol h-full'>
              <h2 className='flex '>$ {item.price}
              </h2>
              <button 
                type="button" 
                onClick={() => handleAddToCart(item)} 
                className=""
              >Add to Cart</button>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='infoBlock decriptionBlock'> 
            <h2 className='font-bold'>Description</h2>
            <div className=''>
              {filteredKeys.map(key => (
                <p key={key}><span className=''>
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



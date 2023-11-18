import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../Data/data';
 
 
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  
const Banner = () => {
  return (
     
 <Carousel responsive={responsive}  swipeable={false}
 draggable={false}  dotListClass="custom-dot-list-style"  infinite={true}
 itemClass="carousel-item-padding-40-px"   containerClass="carousel-container" autoPlay={true}
  autoPlaySpeed={3000} showDots={true} keyBoardControl={true}>
{
    bannerData.map((ele)=>(
        <img src={ele.url} alt="banner" width="100%" height="auto" />
    ))
}
 </Carousel>
 
  )
}

export default Banner
import React, { useState } from 'react';
import '../../styles/Carousel.css';
import carousel1 from '../../assets/1.png';
import carousel2 from '../../assets/2.png';
import carousel3 from '../../assets/3.png';
import carousel4 from '../../assets/4.png';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="w-100 rounded-circle"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 rounded-circle"
          src={carousel3}
          alt="Second slide"
        />{' '}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="  w-100 rounded-circle"
          src={carousel2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="  w-100 rounded-circle"
          src={carousel4}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

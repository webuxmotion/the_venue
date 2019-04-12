import React from 'react';
import Slider from 'react-slick';

import img_one from '../../resources/images/slide_one.jpg';
import img_two from '../../resources/images/slide_two.jpg';
import img_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500
  }

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}> 
        <div>
          <div
            className="carrousel_image" 
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${img_one})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image" 
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${img_two})`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image" 
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${img_three})`
            }}
          ></div>
        </div>

      </Slider>
    </div>
  );
};

export default Carrousel;

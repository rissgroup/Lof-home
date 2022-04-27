import React from "react";
import $ from 'jquery';
import Slider from "react-slick/lib/slider";
import li from '../../assets/be-slider/girl1.png';
import ls from '../../assets/be-slider/girl.png';
import la from '../../assets/be-slider/girl3.png';
class Sliderleft extends React.Component {
    componentDidMount(){
    }
    render() {
        const settings = {
            dots: false,
      infinite: true,
      autoplay: true,
      rtl: true,
      autoplaySpeed: 0,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '60px',
      pauseOnHover: false,
  cssEase: 'linear',
  arrows:'false'
    };
    const setting = {
      dots: false,
infinite: true,
autoplay: true,
rtl: true,
autoplaySpeed: 0,
speed: 2000,
slidesToShow: 2,
slidesToScroll: 1,
centerPadding: '60px',
pauseOnHover: false,
cssEase: 'linear',
arrows:'false'
};
    function initSlider(){
    }
        return (
   <>
<div className='slick-do1 d-none d-md-block'>
        <Slider {...settings}  >
          <div>
           <img src={li} className='img-fluid for-img ' alt="" />
          </div>
          <div>
           <img src={la} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={ls} className='img-fluid for-img' alt="" />
          </div>
        </Slider>
      </div>




      <div className='slick-do-mobile d-block d-md-none'>
        <Slider {...setting}  >
          <div>
           <img src={li} className='img-fluid for-img ' alt="" />
          </div>
          <div>
           <img src={la} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={ls} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={ls} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={ls} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={ls} className='img-fluid for-img' alt="" />
          </div>
        </Slider>
      </div>


            </>
        );
    }
}
export default Sliderleft;
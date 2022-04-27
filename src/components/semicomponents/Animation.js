import React from "react";
import $ from 'jquery';
import Slider from "react-slick/lib/slider";
import li from '../../assets/be-slider/girl.png';
import lg from '../../assets/be-slider/girl1.png';
import lf from '../../assets/be-slider/girl2.png';
import ld from '../../assets/be-slider/girl3.png';
import ls from '../../assets/be-slider/girl.png';
import la from '../../assets/be-slider/girl.png';
class Animation extends React.Component {
    componentDidMount(){
    }
    render() {
        const settings = {
            dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: '60px',
      pauseOnHover: false,
      cssEase: 'linear'
    };
    function initSlider(){
    }
        return (
   <>
<div className='slick-do d-none d-md-block'>
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
          <div>
           <img src={ld} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={lf} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={lg} className='img-fluid for-img'  alt="" />
          </div>
        </Slider>
      </div>


      <div className='slick-do-mobile2 d-block d-md-none'>
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
          <div>
           <img src={ld} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={lf} className='img-fluid for-img' alt="" />
          </div>
          <div>
           <img src={lg} className='img-fluid for-img'  alt="" />
          </div>
        </Slider>
      </div>
            </>
        );
    }
}
export default Animation;
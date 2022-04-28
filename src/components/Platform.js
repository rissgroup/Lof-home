import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import Platformslider from "./semicomponents/Platformslider";
import Mobile1 from "../assets/pl-slider/Mobile.png";
import Mobile2 from "../assets/pl-slider/Mobilehome3.png";
import Mobile3 from "../assets/pl-slider/Mobilehome4.png";
import Mobile4 from "../assets/pl-slider/Mobilehome5.png";
import Mobile5 from "../assets/pl-slider/Mobilehome6.png";
import Mobile6 from "../assets/pl-slider/Mobilehome7.png";
import Mobile7 from "../assets/pl-slider/Mobilehome8.png";
import MobileFrame from "../assets/pl-slider/frame.png";


export default function LoftPlatform() {

  const ImageOneClick = () => {
    SetTitlePart1("Lof 1");
    SetTitlePart2("Platform 1");
    SetImageText(
      " Image 1 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageTwoClick = () => {
    SetTitlePart1("Lof 2");
    SetTitlePart2("Platform 2");
    SetImageText(
      " Image 2 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageThreeClick = () => {
    SetTitlePart1("Lof 3");
    SetTitlePart2("Platform 3");
    SetImageText(
      " Image 3 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageFourClick = () => {
    SetTitlePart1("Lof 4");
    SetTitlePart2("Platform 4");
    SetImageText(
      " Image 4 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageFiveClick = () => {
    SetTitlePart1("Lof 5");
    SetTitlePart2("Platform 5");
    SetImageText(
      " Image 5 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageSixClick = () => {
    SetTitlePart1("Lof 6");
    SetTitlePart2("Platform 6");
    SetImageText(
      " Image 6 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageSevenClick = () => {
    SetTitlePart1("Lof 7");
    SetTitlePart2("Platform 7");
    SetImageText(
      " Image 7 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const [TitlePart1, SetTitlePart1] = useState("LOF");
  const [TitlePart2, SetTitlePart2] = useState("Platform");
  const [ImageText, SetImageText] = useState(
    "Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack."
  );
  return (
    <>
      {/* *****************calling class component****************** */}
      <Platformslider />
      {/* <!--        DISPLAY 5 ITENS        --> */}
      <MDBContainer fluid className="mainContainer ">
        <MDBRow>
          <MDBCol lg={12} className="mt-5 ">
            <h1 className="text-light text-center pl-heading"> {TitlePart1} <span className="platformSpan">{TitlePart2} </span>{" "}
            </h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg={2}></MDBCol>
          <MDBCol lg={8}>
            <p className="text-light text-center">{ImageText}</p>
          </MDBCol>
          <MDBCol lg={2}></MDBCol>
        </MDBRow>
        <div className="slider-rotate " id="slider">
          <div className=" frameContainer">
            <img src={MobileFrame} className="mobileFrame"  alt=""   />
          </div>
          <div className="slider-rotate__container">
            <div className="slider-rotate__item" onClick={ImageOneClick}>
              <span className="position">1</span>
              <img src={Mobile1} alt="" />{" "}
            </div>
            <div className="slider-rotate__item" onClick={ImageTwoClick}>
              <span className="position">2</span>
              <img src={Mobile2} alt="" />
            </div>
            <div className="slider-rotate__item" onClick={ImageThreeClick}>
              <span className="position">3</span>
              <img src={Mobile3} alt="" />
            </div>
            <div className="slider-rotate__item" onClick={ImageFourClick}>
              <span className="position">4</span>
              <img src={Mobile4} alt="" />
            </div>
            <div className="slider-rotate__item" onClick={ImageFiveClick}>
              <span className="position">5</span>
              <img src={Mobile5} alt="" />
            </div>
            <div className="slider-rotate__item" onClick={ImageSixClick}>
              <span className="position">6</span>
              <img src={Mobile7} alt="" />
            </div>
            {/* <div className="slider-rotate__item" onClick={ImageSevenClick}>
              <span className="position">7</span>
              <img src={Mobile7} alt="" />
            </div> */}
            <span
              className="slider-rotate__arrow slider-rotate__arrow--right js-slider-rotate-arrow "
              data-action="next"
            >
              <i className="fa fa-angle-right fa-3x rightarrow"></i>
            </span>
            <span
              className="slider-rotate__arrow slider-rotate__arrow--left js-slider-rotate-arrow "
              data-action="prev"
            >
              <i className="fa fa-angle-left fa-3x"></i>
            </span>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

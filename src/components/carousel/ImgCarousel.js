import React from "react";
import "./ImgCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";

function ImgCarousel() {
  return (
    <div className="container" name="carousel">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
          {/* <p className="legend">Havelock Island</p> */}
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
          {/* <p className="legend">Baga Beach</p> */}
        </div>
        <div>
          <img src={Maldives} alt="/" />
          {/* <p className="legend">Light House Beach</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;

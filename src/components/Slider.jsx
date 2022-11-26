import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Slider = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://m.media-amazon.com/images/I/41x99Vg1gAL._SX367_BO1,204,203,200_.jpg"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://m.media-amazon.com/images/I/41ZXAQ2lGOL.jpg"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://m.media-amazon.com/images/I/417ZhbvieeL.jpg"
        alt="..."
      />
    </MDBCarousel>
  );
};

export default Slider;

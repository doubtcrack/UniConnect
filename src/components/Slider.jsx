import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/item.css";
const Slider = ({ images }) => {
  // console.log(images);
  return (
    <>
      <Carousel style={{ background: "#fff" }} indicators={false}>
        {images.map((img) => {
          return (
            <Carousel.Item key={img}>
              <img
                className="d-block w-100"
                src={`../uploads/${img}`}
                alt="First slide"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;

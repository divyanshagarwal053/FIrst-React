import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./../Carousel/images/image0.jpg";
import image2 from "./../Carousel/images/image12.jpg";
import image3 from "./../Carousel/images/image13.jpg";
import "./CarouselContainer.css";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1350}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>
            "Outside of a dog, a book is a man’s best friend. Inside of a dog
            it’s too dark to read.”
          </h3>
          <p> – Groucho Marx</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={750}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>
            “The love of a dog is a pure thing. He gives you a trust which is
            total. You must not betray it.”
          </h3>
          <p> – Michel Houellebecq</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>
            “A dog will teach you unconditional love. If you can have that in
            your life, things won’t be too bad.”
          </h3>
          <p>– Robert Wagner</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;

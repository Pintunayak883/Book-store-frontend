import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { MyContext } from "../Context/MyContext";
const CardSection = () => {
  const { Books } = useContext(MyContext);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="my-5 px-6 ">
        <div className="text-black">
          <h3 className="text-xl font-bold">Free Offered Courses</h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            aperiam reiciendis id autem nemo non? Accusamus natus assumenda odit
            repudiandae!
          </p>
        </div>
        <div className="py-5">
          <div className="slider-container">
            <Slider {...settings}>
              {Books.map((book) => {
                return <Card key={book.id} book={book} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;

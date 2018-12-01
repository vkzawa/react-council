import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Parallax from "react-plx";
import Grid from "@material-ui/core/Grid";

// import ExploreButtonsContainer from './ExploreButtonsContainer';

const HeroSlideshow = ({ slides }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: "ease-in-out",
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          fade: false
        }
      }
    ]
  };

  const sliderParallaxSettings = [
    {
      start: "self",
      duration: "100vh",
      properties: [
        {
          property: "translateY",
          startValue: 0,
          endValue: -30,
          unit: "%"
        }
      ]
    }
  ];

  return (
    <Slider {...sliderSettings}>
      {slides.map(slide => (
        <SlideContainer>
          <Parallax
            className="HeroBlock-backgroundContainer"
            parallaxData={sliderParallaxSettings}
          >
            <img className="HeroBlock-backgroundImage" src={slide.slideImage} />
          </Parallax>
        </SlideContainer>
      ))}
    </Slider>
  );
};

const SlideContainer = styled.div`
  .HeroBlock-backgroundContainer {
    height: 70vh;

    @media (min-width: 600px) {
      height: 50vh;
    }

    @media (min-width: 700px) {
      height: 50vh;
    }
  }

  .HeroBlock-backgroundImage {
    display: block;
    height: 130%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export default HeroSlideshow;

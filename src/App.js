import React from 'react';
import { Navbar } from './components';
import ImageSliders from './components/ImageSliders';
import { images } from './constants';
import './App.scss';

const slide = [

  images.sign_up1,
  images.welcome_screen,
  images.log_in,
  images.onboarding_screen,
  images.onboarding_screen_1,
  images.start_page,
  images.start_page1,
  images.Frame,
  images.Frame1,
  images.profile,
  images.menu_setting,
  images.log_out,
  images.order_msg,
  images.order_msg1,
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ImageSliders autoSlide autoSlideInterval={5000}>
        {slide.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </ImageSliders>
    </div>
  );
}

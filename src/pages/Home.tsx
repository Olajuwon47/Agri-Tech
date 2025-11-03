"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Feature from "./Feature.tsx";
import ChooseUs from "./Choose us.tsx";
import Logo from "./Logo.tsx";
import Faq from "./Faq.tsx";
import { Hero } from "./Hero.tsx";
import Subscribe from "../pages/Subscribe.tsx";
import Testimonial from "../pages/Testimonial.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { Link } from "react-router";

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  const slides = [
    "/assets/elements.png",
    "/assets/2.png",
    "/assets/Group 1.png",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] max-md:h-[70vh] max-sm:h-[40vh]">
        {/* Carousel Background */}
        <Carousel
          plugins={[plugin.current]}
          className="absolute inset-0 w-full h-full"
        >
          <CarouselContent>
            {slides.map((src, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                    loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Overlay for readability 
        <div className="absolute inset-0 bg-black/50"></div>*/}

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 max-md:px-4 max-sm:px-2">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-200 tracking-tight max-md:text-3xl max-sm:text-sm">
              Empowering smallholder farmers with access to buyers, fair pricing, and modern agricultural insights.
            </h2>
            <p className="mt-6 text-lg  leading-relaxed max-md:text-base max-sm:text-sm">
              We connect Africa’s farmers to profitable markets, ensure transparency in pricing, and promote sustainable farming practices through technology.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/account"
                className="rounded-md bg-yellow-400 hover:bg-yellow-300 px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 max-md:px-5
                 max-md:py-2 max-md:text-sm max-sm:px-4 max-sm:py-2"
              >
                  Join Agro Farm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <Hero />
      <Feature />
      <Logo />
      <ChooseUs />
      <Subscribe />
      <Testimonial />
      <Faq />
    </>
  );
}

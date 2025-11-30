// Improved AgroPulse Homepage (HeroCarousel)
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
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );

  const slides = [
    "/assets/elements.png",
    "/assets/2.png",
    "/assets/Group 1.png",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] max-md:h-[75vh] max-sm:h-[55vh] overflow-hidden">
        {/* Carousel */}
        <Carousel plugins={[plugin.current]} className="absolute inset-0 w-full h-full">
          <CarouselContent>
            {slides.map((src, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover scale-105 animate-[slowZoom_10s_ease-in-out_infinite]"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-3xl text-white">
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight max-md:text-4xl max-sm:text-2xl">
              Connecting Farmers to Markets, Opportunities, and Growth
            </h1>

            <p className="mt-5 text-lg text-gray-200 leading-relaxed max-md:text-base max-sm:text-sm">
              AgroPulse bridges the gap between smallholder farmers and ready buyers, fostering transparency,
              fair pricing, and sustainable farming through modern technology.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/account"
                className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-lg font-semibold shadow-xl transition-all max-sm:text-sm max-sm:px-5 max-sm:py-2"
              >
                Join AgroPulse
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

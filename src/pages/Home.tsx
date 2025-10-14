"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Feature from "./Feature.tsx"
import ChooseUs from "./Choose us.tsx"
import Logo from "./Logo.tsx"
import Faq from "./Faq.tsx"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel"

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  )

  const slides = [
    "/assets/elements.png",
    "/assets/2.png",
    "/assets/Group 1.png",
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden">
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
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-lime-100 font-semibold tracking-tight sm:text-5xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-lg text-gray-200">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-200 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-200 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION — OUTSIDE HERO */}
      <section className="w-full flex flex-col sm:flex-row items-stretch justify-center mt-8 space-y-6 sm:space-y-0 sm:space-x-8 text-gray-800 text-left px-6 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition duration-300 shadow-md">
          <div className="text-3xl font-bold text-gray-900 mb-2">01</div>
          <h3 className="text-lg font-semibold">Fast & Easy Setup</h3>
          <p className="mt-2 text-sm text-gray-600">
            Get started in minutes with a seamless onboarding process and a
            clean interface designed for speed.
          </p>
             <img
                alt=""
                src="/assets/2c3d9eb900a5e5a76bda9c8222fd3c1da659e29f.png"
                className="h-8 w-auto"
              />
        </div>

        {/* Feature 2 */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition duration-300 shadow-md">
          <div className="text-3xl font-bold text-gray-900 mb-2">02</div>
          <h3 className="text-lg font-semibold">Cloud Sync</h3>
          <p className="mt-2 text-sm text-gray-600">
            Stay in sync across all your devices. Your work follows you
            everywhere, effortlessly.
          </p>
             <img
                alt=""
                src="/assets/2c3d9eb900a5e5a76bda9c8222fd3c1da659e29f.png"
                className="h-8 w-auto"
              />
        </div>

        {/* Feature 3 */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition duration-300 shadow-md">
          <div className="text-3xl font-bold text-gray-900 mb-2">03</div>
          <h3 className="text-lg font-semibold">Smart Analytics</h3>
          <p className="mt-2 text-sm text-gray-600">
            Track performance and gain insight into your workflow with simple,
            actionable data visualizations.
          </p>
             <img
                alt=""
                src="/assets/2c3d9eb900a5e5a76bda9c8222fd3c1da659e29f.png"
                className="h-8 w-auto"
              />
        </div>
      </section>
      <Feature />
      <Logo />
      <ChooseUs />
      <Faq />
    </>
  )
}

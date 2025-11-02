"use client";
import { } from 'react'
import { Link } from 'react-router-dom'

export default function WhyChooseUs() {
  return (
    <section className="relative mt-8 bg-gray-800 py-16 md:py-20 px-6 md:px-10 font-sans overflow-hidden">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-lime-600 leading-tight mb-4">
        Why Choose Agrios Market
      </h2>
      <h6 className="text-white text-center text-lg font-semibold mb-12">
        Our Farm Benefits
      </h6>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="/assets/sections (1).png" 
            alt="Hydroponics and urban farming system"
            className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              loading="lazy"
          />

          {/* Caption Overlay (optional, but looks elegant) */}
          <div className="absolute bottom-6 left-6 bg-lime-600 text-white px-5 py-3 rounded-lg shadow-md bg-opacity-90 backdrop-blur-sm">
            <h3 className="text-lg font-semibold leading-snug">
              Hydroponics & Urban Farming <br />
              <span className="text-sm font-normal text-gray-200">
                The Future of Food
              </span>
            </h3>
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            At Agrios, we blend time-tested farming traditions with modern
            sustainable practices. Our goal is simple — to cultivate food that’s
            pure, ethical, and nourishing for both people and the planet.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="bg-lime-500 text-white rounded-full p-2 mt-1 shadow-md">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Quality Organic Food
                </h4>
                <p className="text-gray-400 text-sm">
                  We grow our produce naturally — chemical-free, nutrient-rich,
                  and full of authentic farm flavor.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-yellow-400 text-black rounded-full p-2 mt-1 shadow-md">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Professional Farmers
                </h4>
                <p className="text-gray-400 text-sm">
                  Experienced hands and dedicated hearts — our team brings
                  passion and precision to every harvest.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full p-2 mt-1 shadow-md">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Sustainable Practices
                </h4>
                <p className="text-gray-400 text-sm">
                  From soil care to water recycling, every method we use honors
                  nature’s balance and future generations.
                </p>
              </div>
            </li>
          </ul>

          <Link
            to="#"
            className="inline-block mt-10 bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-md"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

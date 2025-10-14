"use client";
import { } from 'react'
export default function Feature() {
  return (
    <section className="max-w-6xl mx-auto font-sans mt-12 px-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-lime-800 mb-10 text-center">
        Latest in Agriculture 🌾
      </h2>

      {/* Article 1 */}
      <article className="border-t border-b border-gray-200 py-8 mb-8 hover:bg-lime-100 transition-all duration-300 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:pr-6 mb-6 md:mb-0 w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Modern sustainable farming in action"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Right Text */}
          <div className="w-full md:w-3/5 md:pl-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-3">
              Smart Farming Revolution: How Technology Is Transforming Crops
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Across the world, farmers are adopting IoT, drones, and data-driven
              insights to increase yield, conserve water, and build sustainable
              farming practices. Agriculture is becoming smarter — and greener —
              every single season.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-lime-200 px-5 py-3 text-sm font-semibold text-white hover:bg-yellow-200 transition-colors duration-200 shadow-md"
            >
              Read More
            </a>
          </div>
        </div>
      </article>

      {/* Article 2 */}
      <article className="border-b border-gray-200 py-8 mb-8 hover:bg-lime-100 transition-all duration-300 rounded-xl">
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Right Image */}
          <div className="md:pl-6 mb-6 md:mb-0 w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
              alt="Fresh produce from local farmers"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Left Text */}
          <div className="w-full md:w-3/5 md:pr-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-3">
              Local Farmers See Record Harvest After Rainfall Season
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              After a year of unpredictable weather, local farmers are celebrating
              record harvests thanks to improved soil management and
              community-supported agriculture. The green economy is thriving —
              from field to market.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-yellow-200 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-200 transition-colors duration-200 shadow-md"
            >
              Discover More
            </a>
          </div>
        </div>
      </article>

      {/* Article 3 */}
      <article className="border-b border-gray-200 py-8 mb-8 hover:bg-lime-100 transition-all duration-300 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:pr-6 mb-6 md:mb-0 w-full md:w-2/5">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.gfqNJe6wxyMg8ga50fWZhAHaEK?cb=12&w=474&h=474&c=7&p=0"
              alt="Hydroponic indoor farming system"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Right Text */}
          <div className="w-full md:w-3/5 md:pl-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-3">
              Hydroponics & Urban Farming: The Future of Food
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              As cities expand, hydroponics and vertical farming are helping solve
              food insecurity challenges. These soil-free systems grow fresh
              produce year-round, using 90% less water than traditional farming.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-lime-200 px-5 py-3 text-sm font-semibold text-white hover:bg-yellow-300 transition-colors duration-200 shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </article>

      {/* Article 4 */}
      <article className="border-b border-gray-200 py-8 mb-8 hover:bg-lime-100 transition-all duration-300 rounded-xl">
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Right Image */}
          <div className="md:pl-6 mb-6 md:mb-0 w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1528825871115-3581a5387919"
              alt="Agribusiness exports and market growth"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Left Text */}
          <div className="w-full md:w-3/5 md:pr-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-3">
              Agribusiness Exports Surge Amid Sustainable Market Reforms
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              With better trade policies and organic certification, farmers are
              tapping into global markets. Sustainable agribusiness is proving
              profitable — and environmentally responsible.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-yellow-200 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-200 transition-colors duration-200 shadow-md"
            >
              Explore Insights
            </a>
          </div>
        </div>
      </article>

      {/* Article 5 */}
      <article className="border-b border-gray-200 py-8 hover:bg-lime-100 transition-all duration-300 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:pr-6 mb-6 md:mb-0 w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Young farmers collaborating in a field"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Right Text */}
          <div className="w-full md:w-3/5 md:pl-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-3">
              Youth in Agriculture: Building the Next Generation of Farmers
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Young entrepreneurs are bringing innovation and energy to agriculture
              through agritech startups, community training, and climate-smart
              solutions. The future of farming is youthful and tech-driven.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-lime-200 px-5 py-3 text-sm font-semibold text-white hover:bg-yellow-200 transition-colors duration-200 shadow-md"
            >
              Read Story
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

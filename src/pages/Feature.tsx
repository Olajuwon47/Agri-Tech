"use client";
import { Link } from "react-router-dom";

export default function Feature() {
  // Reusable CTA style
  const btnClass =
    "inline-block rounded-md px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300";

  return (
    <section className="max-w-6xl mx-auto font-sans mt-16 px-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-12 text-center">
        Latest in Agriculture 🌾
      </h2>

      {/** ARTICLE BLOCK COMPONENT */}
      {[
        {
          title:
            "Smart Farming Revolution: How Technology Is Transforming Crops",
          desc: `Across the world, farmers are adopting IoT, drones, and data-driven insights 
          to increase yield, conserve water, and promote sustainable farming practices.`,
          img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
          link: "#",
          reverse: false,
          cta: "Read More",
        },
        {
          title: "Local Farmers Celebrate Record Harvest After Rainfall Season",
          desc: `Thanks to improved soil management and community-backed agriculture, 
          farmers are recording higher yields and stronger market demand.`,
          img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
          link: "#",
          reverse: true,
          cta: "Discover More",
        },
        {
          title: "Hydroponics & Urban Farming: The Future of Food",
          desc: `Hydroponics and vertical farming are reshaping how cities grow food — 
          producing fresh crops year-round with 90% less water.`,
          img: "https://tse2.mm.bing.net/th/id/OIP.gfqNJe6wxyMg8ga50fWZhAHaEK?cb=12&w=474&h=474&c=7&p=0",
          link: "#",
          reverse: false,
          cta: "Learn More",
        },
        {
          title: "Agribusiness Exports Surge Amid Global Market Reforms",
          desc: `With improved trade policies and organic certification, smallholder farmers 
          are expanding into international markets sustainably and profitably.`,
          img: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
          link: "#",
          reverse: true,
          cta: "Explore Insights",
        },
        {
          title:
            "Youth in Agriculture: Building the Next Generation of Innovators",
          desc: `Young entrepreneurs are driving change with agritech solutions, 
          climate-smart practices, and digital market access for farmers.`,
          img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
          link: "#",
          reverse: false,
          cta: "Read Story",
        },
      ].map((item, index) => (
        <article
          key={index}
          className="border-b border-gray-200 py-10 mb-10 rounded-xl hover:bg-lime-50 transition-colors duration-300"
        >
          <div
            className={`flex flex-col items-center ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/** IMAGE */}
            <div
              className={`w-full md:w-2/5 ${
                item.reverse ? "md:pl-6" : "md:pr-6"
              } mb-6 md:mb-0`}
            >
              <img
                src={item.img}
                loading="lazy"
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/** TEXT */}
            <div
              className={`w-full md:w-3/5 ${
                item.reverse ? "md:pr-3" : "md:pl-3"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {item.desc}
              </p>

              <Link
                to={item.link}
                className={`${btnClass} bg-green-700 hover:bg-green-600`}
              >
                {item.cta}
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

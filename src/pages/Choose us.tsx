"use client";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2 } })
  };

  const benefits = [
    {
      title: 'Premium Organic Produce',
      desc: 'Naturally grown, nutrient-rich, and full of authentic farm flavor.',
      color: 'bg-lime-500 text-white'
    },
    {
      title: 'Expert Farmers',
      desc: 'Skilled professionals committed to excellence in every harvest.',
      color: 'bg-yellow-400 text-black'
    },
    {
      title: 'Sustainable & Ethical',
      desc: 'Practices that protect the environment and ensure a resilient future.',
      color: 'bg-green-500 text-white'
    }
  ];

  return (
    <section className="relative mt-8 bg-gray-900 py-16 md:py-20 px-6 md:px-10 font-sans">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-lime-500 leading-tight mb-4">
        Why Choose AgroPulse
      </h2>
      <h6 className="text-gray-200 text-center text-lg font-semibold mb-12">
        Unlocking Benefits for Modern Farmers
      </h6>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/assets/sections (1).png"
            alt="Hydroponics and urban farming system"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-lime-600 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg shadow-md bg-opacity-90 backdrop-blur-sm transition-all duration-500 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            <h3 className="text-base md:text-lg font-semibold leading-snug">
              Hydroponics & Urban Farming <br />
              <span className="text-sm font-normal text-gray-200">
                Innovating Agriculture for Tomorrow
              </span>
            </h3>
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            At AgroPulse, we combine traditional farming wisdom with modern
            technology to empower smallholder farmers, improve crop quality,
            and create sustainable, profitable outcomes for communities.
          </p>

          <ul className="space-y-6">
            {benefits.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
              >
                <span className={`${item.color} rounded-full p-2 mt-1 shadow-md`}>✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <Link
            to="#"
            className="inline-block mt-10 bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discover Our Approach
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  const steps = [
    {
      title: "1. Join as a Farmer or Buyer",
      description:
        "Create your free AgroPulse account. Farmers gain modern tools, while buyers discover verified produce sources.",
    },
    {
      title: "2. Create Your Digital Farm Profile",
      description:
        "List your crops, farm size, and location. AgroPulse uses this information to connect you with buyers and provide smart insights.",
    },
    {
      title: "3. Access Smart Insights",
      description:
        "Receive weather forecasts, soil health tips, and IoT-driven analytics to optimize your yields and planning.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Organic Farmer",
      quote:
        "AgroPulse has transformed how I manage my farm, increasing my yield by 30%.",
      image: "/assets/farmer1.jpg",
    },
    {
      name: "Mike Chen",
      role: "Buyer",
      quote:
        "Finding verified sustainable farms is now effortless. AgroPulse is an excellent platform for conscious buyers.",
      image: "/assets/buyer1.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="relative mt-5 sm:mb-32 md:mb-16 group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-deoFxM4uZNUSsGcVeisFdqIe5PGBas5kLQ&s"
            alt="Service Banner"
            className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-3 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              About AgroPulse
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-100">
              Dedicated to advancing agriculture through innovation, expertise,
              and sustainable solutions.
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-7 sm:mb-16">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <img
              src="/assets/sections (1).png"
              alt="Hydroponics system"
              className="w-full h-64 sm:h-72 md:h-full object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-lime-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow-md bg-opacity-90 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-semibold leading-snug">
                Hydroponics & Urban Farming <br />
                <span className="text-xs sm:text-sm font-normal text-gray-200">
                  The Future of Food
                </span>
              </h3>
            </div>
          </motion.div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-600 leading-tight mb-4 sm:mb-6">
              The Best Choice for Your Farming Needs
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              At AgroPulse, we revolutionize agriculture through innovation and sustainable solutions.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Bridging the gap between farmers and buyers.",
                "Empowering farmers with tools to thrive.",
                "Harnessing data for smarter decisions.",
                "Building conscious consumer communities.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                >
                  <span className="text-yellow-200 text-sm mt-0.5">✓</span>
                  <p className="text-gray-600 text-xs sm:text-sm">{item}</p>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="bg-lime-600 hover:bg-lime-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold transition-all duration-300 shadow-md text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              Discover More
            </motion.button>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16">
          {[
            {
              title: "Our Vision",
              text: "To be the leading platform driving sustainable agriculture with technology.",
            },
            {
              title: "Our Mission",
              text: "To empower farmers and provide buyers with verified produce.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-lime-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-lime-600 mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
              See Our Farming Process
            </h2>
            <motion.div
              className="rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                className="w-full aspect-video"
                loading="lazy"
                src="https://www.youtube.com/embed/x2lK-fvOyXI"
                title="AgroPulse Farming Process"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 bg-lime-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-gray-800">
              What They Say
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {t.name}
                      </h4>
                      <p className="text-lime-600 text-xs sm:text-sm">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm sm:text-base">
                    "{t.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-gray-800">
              How AgroPulse Works
            </h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center bg-lime-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-lime-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lime-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

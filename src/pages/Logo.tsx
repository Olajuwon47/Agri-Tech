"use client";
import { motion } from "framer-motion";

export default function PartnerLogos() {
  const logos = [
    { name: "FAO", src: "https://upload.wikimedia.org/wikipedia/en/7/70/FAO_logo.png" },
    { name: "IFAD", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/IFAD_logo.svg" },
    { name: "World Food Programme", src: "https://cdn.wfp.org/libraries/wfpui/v0.14.0/assets/logos/dark/svg/en-standard.svg" },
    { name: "USAID", src: "https://worldvectorlogo.com/logos/usaid-2.svg" },
    { name: "UNESCO", src: "https://upload.wikimedia.org/wikipedia/commons/5/57/UNESCO_logo.svg" },
  ];

  return (
    <section className="bg-lime-100 py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight"
        >
          Trusted by global agricultural and development partners 🌾
        </motion.h2>

        {/* Auto-scroll marquee container */}
        <div className="relative mt-12 overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap animate-marquee"
            style={{ willChange: 'transform' }}
          >
            {logos.concat(logos).map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center w-40"
                whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                initial={{ filter: 'grayscale(100%)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-14 w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Add CSS for marquee animation */}
      <style suppressHydrationWarning>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 4rem;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

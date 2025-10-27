'use client'
import { motion } from 'framer-motion'

export default function Example() {
  const logos = [
    {
      name: 'FAO (Food and Agriculture Organization)',
      src: 'https://upload.wikimedia.org/wikipedia/en/7/70/FAO_logo.png',
    },
    {
      name: 'IFAD (International Fund for Agricultural Development)',
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/IFAD_logo.svg',
    },
    {
      name: 'World Food Programme',
      src: 'https://cdn.wfp.org/libraries/wfpui/v0.14.0/assets/logos/dark/svg/en-standard.svg',
    },
    {
      name: 'USAID',
      src: 'https://worldvectorlogo.com/logos/usaid-2.svg',
    },
    {
      name: 'UNESCO',
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/UNESCO_logo.svg',
    },
  ]

  return (
    <div className="bg-lime-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight"
        >
          Trusted by global agricultural and development partners 🌾
        </motion.h2>

        <motion.div
          className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.img
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                className="max-h-14 w-auto object-contain drop-shadow-sm hover:drop-shadow-md transition-all"
                  loading="lazy"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

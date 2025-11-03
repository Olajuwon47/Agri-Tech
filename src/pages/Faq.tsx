'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'What should I do if I have an issue with crops or harvest?',
    answer:
      'If you encounter any problems during your farming activities, reach out to our agricultural support team immediately. We provide expert guidance on crop health, irrigation, pest management, and sustainable farming practices to ensure your yield is optimal.',
  },
  {
    question: 'Do you provide agricultural training or workshops?',
    answer:
      'Yes! We offer regular training sessions, workshops, and webinars on modern farming techniques, soil health, smart irrigation, and sustainable practices. Check our events calendar or contact us to enroll.',
  },
  {
    question: 'Can I access microloans or financial support for farming?',
    answer:
      'Absolutely. We partner with local and international development banks to provide flexible agricultural loans, grants, and financial guidance. Eligibility depends on farm size, crop type, and project plan.',
  },
  {
    question: 'Do you offer crop insurance?',
    answer:
      'Yes, we recommend crop insurance to protect your investment against weather uncertainties, pests, and natural disasters. Our team will guide you through the application process and coverage options.',
  },
  {
    question: 'How do I get personalized farming advice?',
    answer:
      'Our experts provide one-on-one consultations for farm planning, crop rotation, pest management, and yield optimization. Simply book a session through our platform or contact support.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-3 py-12 justify-center">
      <h1 className="font-extrabold text-center text max-sm:text-xl text-lime-900 mt-6 mb-10">
        Farming FAQs 
      </h1>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-md border border-lime-200 bg-white shadow hover:shadow-lg transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 font-semibold text-lime-800 text-left focus:outline-none"
            >
              <span>{item.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 py-4 text-gray-700 bg-lime-50 text-sm max-sm:text-xs"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

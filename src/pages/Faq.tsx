'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiCheckCircle } from 'react-icons/fi';

const faqs = [
  {
    question: 'What should I do if I have an issue with crops or harvest?',
    answer:
      'Our agricultural support team is available to provide guidance on crop health, irrigation, pest management, and sustainable farming practices to help you optimize your yield.',
    highlights: ['crop health', 'irrigation', 'pest management', 'sustainable farming'],
  },
  {
    question: 'Do you provide agricultural training or workshops?',
    answer:
      'Yes, we host regular workshops, webinars, and training sessions on modern farming techniques, soil health, smart irrigation, and sustainable practices. Check our events calendar or reach out to enroll.',
    highlights: ['workshops', 'webinars', 'soil health', 'smart irrigation'],
  },
  {
    question: 'Can I access microloans or financial support for farming?',
    answer:
      'We collaborate with local and international partners to offer flexible agricultural loans, grants, and financial guidance tailored to your farm’s needs.',
    highlights: ['loans', 'grants', 'financial guidance'],
  },
  {
    question: 'Do you offer crop insurance?',
    answer:
      'We provide crop insurance options to protect your investment from weather uncertainties, pests, and natural events, guiding you through coverage and application.',
    highlights: ['crop insurance', 'weather uncertainties', 'coverage'],
  },
  {
    question: 'How do I get personalized farming advice?',
    answer:
      'Book a one-on-one consultation with our experts for farm planning, crop rotation, pest management, and yield optimization via our platform.',
    highlights: ['consultation', 'crop rotation', 'yield optimization'],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const highlightText = (text: string, highlights: string[]) => {
    let parts = [text];
    highlights.forEach((word) => {
      parts = parts.flatMap((part) =>
        typeof part === 'string' ? part.split(new RegExp(`(${word})`, 'gi')) : [part]
      );
    });
    return parts.map((part, i) =>
      highlights.some((h) => part.toLowerCase() === h.toLowerCase()) ? (
        <span key={i} className="font-semibold text-green-700">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="font-extrabold text-center text-3xl text-green-900 mb-10 max-sm:text-2xl">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            layout
            className="bg-white border border-green-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-green-800 focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                <span className="transition-colors duration-300 hover:text-green-600">{item.question}</span>
              </div>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown size={22} className="text-green-600" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="px-6 py-4 text-gray-700 bg-green-50 text-sm max-sm:text-xs"
                >
                  <p className="leading-relaxed">
                    {highlightText(item.answer, item.highlights)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

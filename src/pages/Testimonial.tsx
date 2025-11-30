import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { Link } from 'react-router-dom';

interface TestimonialType {
  name: string;
  title: string;
  image: string;
  quote: string;
}
const testimonials: TestimonialType[] = [
  {
    name: "Chinedu Okafor",
    title: "Small-Scale Farmer",
    image: "https://images.unsplash.com/photo-1560250096-2f946a01e6f9?w=150&h=150&fit=crop&crop=face",
    quote: "Using precision farming tools, I increased my maize yield by 40% and reduced water usage. Truly transformative!",
  },
  {
    name: "Fatima Bello",
    title: "Organic Farm Owner",
    image: "https://images.unsplash.com/photo-1551833997-03d414fd58f2?w=150&h=150&fit=crop&crop=face",
    quote: "Soil sensors let me optimize nutrients in real-time. Managing my organic vegetables has never been easier.",
  },
  {
    name: "David Johnson",
    title: "Agricultural Consultant",
    image: "https://images.unsplash.com/photo-1564564244667-61f2637bb00a?w=150&h=150&fit=crop&crop=face",
    quote: "I recommend this platform to all my clients. It empowers farmers to make informed decisions confidently.",
  },
  {
    name: "Aisha Mohammed",
    title: "Greenhouse Manager",
    image: "https://images.unsplash.com/photo-1585478259645-0356b8042ae8?w=150&h=150&fit=crop&crop=face",
    quote: "Automated climate control reduced our energy costs by 25% while keeping growing conditions perfect year-round.",
  },
  {
    name: "Emeka Uchenna",
    title: "Coffee Grower",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Early crop disease detection saved my harvest. Immediate alerts helped me act before it spread.",
  },
  {
    name: "Grace Okafor",
    title: "Sustainable Farmer",
    image: "https://images.unsplash.com/photo-1494790108755-2616c113a1c1?w=150&h=150&fit=crop&crop=face",
    quote: "From soil health to market prices, this platform gives me everything to run a profitable, sustainable farm.",
  },
  {
    name: "Mohammed Ibrahim",
    title: "Livestock Farmer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Livestock monitoring helps track herd health and optimize feeding. Milk production rose by 30%.",
  },
  {
    name: "Chiamaka Nwosu",
    title: "Hydroponics Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote: "Water analytics cut consumption by 60% and boosted my hydroponic lettuce production.",
  },
  {
    name: "James Adekunle",
    title: "Agricultural Educator",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    quote: "I use this platform to teach modern farming techniques. Real-time data keeps students engaged.",
  },
  {
    name: "Bisi Adeyemi",
    title: "Fruit Orchard Owner",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    quote: "Pest prediction helped protect my citrus trees. I reduced pesticide use by 45% while keeping yields high.",
  },
];


function TestimonialItem({ t, index }: { t: TestimonialType; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <CarouselItem className="pl-4 md:pl-6 max-sm:pl-2 max-md:pl-4 max-sm:basis-full max-md:basis-1/2 lg:basis-1/3">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 max-sm:p-4 border border-green-100 hover:border-green-200 group"
      >
        <div className="text-green-500 text-2xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">"</div>
        <p className="text-gray-700 text-base leading-relaxed mb-6 max-sm:text-sm max-sm:leading-snug max-sm:mb-4">
          {t.quote}
        </p>
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
          <img
            src={t.image}
            alt={`${t.name} Avatar`}
            className="w-14 h-14 rounded-full object-cover border-2 border-green-200 max-sm:w-12 max-sm:h-12"
            loading="lazy"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm max-sm:text-xs">{t.name}</h3>
            <p className="text-green-600 text-xs max-sm:text-[11px] font-medium">{t.title}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-yellow-400 text-sm max-sm:text-xs">★</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </CarouselItem>
  );
}

export default function Testimonial() {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <div className="py-16 bg-gradient-to-b from-emerald-50 via-white to-green-50 px-4 max-sm:px-3">
      <div className="text-center mb-12 max-sm:mb-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4 max-sm:text-xs">Success Stories</span>
          <h1 className="font-bold text-4xl max-sm:text-2xl max-md:text-3xl text-gray-900 mb-4">What Farmers Say</h1>
          <p className="text-gray-600 text-lg max-sm:text-sm max-md:text-base max-w-2xl mx-auto leading-relaxed">
            Join thousands of farmers transforming agriculture with smart technology. Discover how our solutions make farming more efficient, profitable, and sustainable.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative group">
        <Carousel setApi={setApi} opts={{ align: "start", loop: true, dragFree: false }} className="w-full">
          <CarouselContent className="max-sm:-ml-2 max-md:-ml-4">
            {testimonials.map((t, i) => (<TestimonialItem key={i} t={t} index={i} />))}
          </CarouselContent>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 max-sm:hidden">
            <CarouselPrevious className="border-2 border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 p-2 rounded-full transition" />
            <CarouselNext className="border-2 border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 p-2 rounded-full transition" />
          </div>
        </Carousel>

        <div className="flex justify-center items-center gap-3 mt-8 max-sm:mt-6">
          {testimonials.slice(0, Math.ceil(testimonials.length / 3)).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index * 3)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-110 ${Math.floor(current / 3) === index ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mt-12 max-sm:mt-8">
        <p className="text-gray-600 mb-6 max-sm:text-sm">Ready to transform your farming operations?</p>
        <Link to="/Community" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-md max-sm:py-2 max-sm:px-6 max-sm:text-sm">
          Join Our Farming Community
        </Link>
      </motion.div>
    </div>
  );
}
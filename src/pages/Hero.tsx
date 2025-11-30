"use client";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Improved Hero Section for AgroPulse — Debugged and Clean
export function Hero() {
  const steps = [
    {
      title: "1. Join as a Farmer or Buyer",
      description:
        "Create your free AgroPulse account and unlock direct access to trusted markets and modern agricultural tools.",
    },
    {
      title: "2. Build Your Digital Farm Profile",
      description:
        "Share your crops, location, and farm details. AgroPulse matches you with real-time demand and actionable insights.",
    },
    {
      title: "3. Access Smart Insights",
      description:
        "Receive weather alerts, soil care recommendations, and analytics powered by modern AgriTech systems.",
    },
    {
      title: "4. Connect and Trade Transparently",
      description:
        "Negotiate prices, chat directly with verified buyers, and complete transactions securely.",
    },
    {
      title: "5. Track Your Growth",
      description:
        "Monitor sales, logistics, and performance from a clear, farmer-friendly dashboard.",
    },
    {
      title: "6. Scale with Confidence",
      description:
        "Explore funding options, expert insights, and resources designed to support long-term agricultural growth.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-lime-50 via-white to-lime-100 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl">
          How AgroPulse Works
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          One platform designed to simplify agriculture — smarter farming, fairer markets, and stronger communities.
        </p>

        {/* Steps */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-lime-100"
            >
              <CheckCircle className="h-10 w-10 text-lime-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-24 bg-gradient-to-r from-lime-700 to-green-900 py-12 px-8 rounded-3xl text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to transform your agricultural journey?</h2>
          <p className="text-base sm:text-lg text-lime-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Thousands of farmers and buyers are already using AgroPulse to access better markets, real-time insights, and sustainable opportunities.
          </p>

          <Link
            to="/Community"
            className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold px-8 py-4 rounded-xl transition-all shadow-lg inline-block text-base"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </section>
  );
}

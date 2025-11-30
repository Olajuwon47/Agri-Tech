"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notification, setNotification] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setNotification("Please enter a valid email 🌾");
      return;
    }
    setIsSubscribed(true);
    setNotification("You’ve successfully subscribed to AgroPulse 🌿");
    setEmail("");
    setTimeout(() => setNotification(""), 4000);
  };

  const handleUnsubscribe = () => {
    setIsSubscribed(false);
    setNotification("You’ve unsubscribed from our newsletter 🌻");
    setTimeout(() => setNotification(""), 4000);
  };

  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-12 bg-gray-50">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto text-center rounded-lg p-8 border border-lime-500 bg-white shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-lime-600 mb-4">
          Stay Connected with AgroPulse
        </h2>
        <p className="text-gray-700 mb-8 text-base sm:text-lg">
          Receive exclusive farming insights, marketplace updates, and digital tips
          directly in your inbox. Join a growing community of farmers and supporters.
        </p>

        {/* Illustration */}
        <div className="mb-6">
          <img
            src="/assets/subscribe-illustration.png"
            alt="Farmers connecting digitally"
            className="mx-auto w-3/4 sm:w-1/2 rounded-xl shadow-md object-cover"
            loading="lazy"
          />
        </div>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-4 py-3 rounded-xl border border-lime-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          />

          <button
            onClick={!isSubscribed ? handleSubscribe : handleUnsubscribe}
            className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md text-white transform hover:-translate-y-1 hover:scale-105 duration-300 ${
              !isSubscribed ? 'bg-lime-600 hover:bg-lime-700' : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
          >
            {!isSubscribed ? 'Subscribe' : 'Unsubscribe'}
          </button>
        </div>
      </div>
    </section>
  );
}

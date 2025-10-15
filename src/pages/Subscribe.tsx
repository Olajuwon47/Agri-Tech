"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notification, setNotification] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setNotification("Please enter your email 🌾");
      return;
    }
    setIsSubscribed(true);
    setNotification("You’ve successfully subscribed to AgroPulse 🌿");
    setEmail("");
    setTimeout(() => setNotification(""), 3000);
  };

  const handleUnsubscribe = () => {
    setIsSubscribed(false);
    setNotification("You’ve unsubscribed from our newsletter 🌻");
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <section className="relative py-16 px-3 mt-3.5  Ssm:px-8 lg:px-12  overflow-hidden">
      {/* Background texture (optional)
      <div
        className="absolute inset-0 bg-[url('/assets/leaves-pattern.png')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      /> */}

      {/* Notification (Toast) */}
      {notification && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-fadeIn">
          {notification}
        </div>
      )}

      <div className="relative max-w-4xl rounded-lg p-6 border border-lime-500 mx-auto text-center">
        <h2 className="text-2xl sm:text-5xl font-bold text-lime-200 mb-4">
          Stay Connected with AgroPulse 
        </h2>
        <p className="text-md text-gray-700 max-w-2xl mx-auto mb-10">
          Get exclusive insights, digital farming tips, and marketplace updates
          directly to your inbox. Join a community that grows together.
        </p>

        {/* Input + Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-4 py-3 rounded-xl border border-lime-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          />

          {!isSubscribed ? (
            <button
              onClick={handleSubscribe}
              className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Subscribe
            </button>
          ) : (
            <button
              onClick={handleUnsubscribe}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Unsubscribe
            </button>
          )}
        </div>

        {/* Illustration or decorative image 
        <div className="mt-12 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524594224036-9d3db1e564fd?auto=format&fit=crop&w=900&q=80"
            alt="Farmers connecting digitally"
            className="rounded-2xl shadow-md w-full sm:w-3/4 lg:w-2/3 object-cover"
          />
        </div>*/}
      </div>
    </section>
  );
}

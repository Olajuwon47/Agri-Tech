import { useState } from "react";
import { motion } from "framer-motion";

export default function Account() {
  const [selectedRole, setSelectedRole] = useState<"farmer" | "buyer" | null>(
    null
  );

  const handleRoleSelection = (role: "farmer" | "buyer") => {
    setSelectedRole(role);
    localStorage.setItem("userRole", role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-lime-700 to-green-900">
      <div className="max-w-3xl mx-auto py-28 sm:py-20 px-4">
        {/* Hero Section */}
        <header className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-xl"
          >
            Welcome to AgroPulse
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-gray-100 max-w-xl mx-auto"
          >
            Choose your role to join our marketplace and unlock tailored experiences.
          </motion.p>
        </header>

        {/* Role Buttons */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelection("farmer")}
            className="rounded-xl bg-lime-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-lime-500 transition-all duration-200"
          >
            🌾 I'm a Farmer
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelection("buyer")}
            className="rounded-xl bg-yellow-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-yellow-500 transition-all duration-200"
          >
            🛒 I'm a Buyer
          </motion.button>
        </div>

        {/* Role Details Card */}
        {selectedRole && (
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-12 p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg mx-auto border border-white/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              {selectedRole === "farmer" ? "🌾 Farmer Profile" : "🛒 Buyer Profile"}
            </h3>

            <p className="text-gray-200 text-base leading-relaxed">
              {selectedRole === "farmer"
                ? "Sell your harvest directly to verified buyers. Manage inventory, track demand, and get insights to grow your farming business."
                : "Access fresh produce directly from trusted farmers. Compare prices, source easily, and maintain transparency in every transaction."}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href={`/signup-form?role=${selectedRole}`}
                className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 transition-all duration-200"
              >
                Sign Up as {selectedRole === "farmer" ? "Farmer" : "Buyer"}
              </a>

              <a
                href={`/login-form?role=${selectedRole}`}
                className="rounded-lg border border-white px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-white/10 transition-all duration-200"
              >
                Login
              </a>
            </div>
          </motion.section>
        )}

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 shadow-xl"
        >
          <h4 className="text-xl font-semibold text-white mb-2">
            🚀 Why Join AgroPulse?
          </h4>
          <p className="text-gray-100 max-w-xl mx-auto text-sm">
            We connect farmers and buyers with transparency, trust, and modern tools to make agriculture smarter, faster, and more rewarding.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

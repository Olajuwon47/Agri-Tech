import { ArrowRight } from "lucide-react";
import Subscribe from "../pages/Subscribe.tsx"

export default function Service() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-16">
          {/* Background Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-deoFxM4uZNUSsGcVeisFdqIe5PGBas5kLQ&s"
            alt="Service Banner"
            className="w-full h-52"
              loading="lazy"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Agricultural Solutions
            </h2>
            <p className="max-w-2xl text-lg text-gray-100">
              Empowering farmers, buyers, and agribusinesses with technology-driven
              tools for sustainable growth and fair trade.
            </p>
          </div>
        </div>

       

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left Sidebar */}
          <aside className="space-y-6 lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Digital Agriculture</li>
                <li>Farm Management</li>
                <li>Smart Irrigation</li>
                <li>Market Access</li>
                <li>Agro Advisory</li>
              </ul>
            </div>

            <div className="bg-lime-500 text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-sm mb-4">
                Speak with our support team or request a demo of AgroPulse tools.
              </p>
              <a href="/Contact" className="bg-lime-200 text-white font-semibold px-4 py-2 rounded-xl hover:bg-yellow-200 transition">
                Contact Support
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <img
                src="data:image/jpeg;base64,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"
                alt="Farmers working"
                className="rounded-xl w-full h-64 object-cover mb-6"
                  loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agriculture Products & Digital Tools
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AgroPulse provides farmers and agribusinesses with digital solutions
                that make agriculture smarter, data-driven, and more profitable.
                From connecting farmers directly to buyers to offering IoT-based
                insights, we ensure every step of the agricultural value chain is
                transparent and efficient.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our platform supports smart farming, yield prediction, and logistics
                tracking, giving farmers a competitive edge in modern agriculture.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <img
                alt="Company Logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTr8DpgTcqhRml1Wt5NV34TbKkE7HU77uNQ&s"
                className="h-28 w-100 transition-transform hover:scale-105"
                  loading="lazy"
              />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Data-driven insights
                </h4>
                <p className="text-sm text-gray-600">
                  Get smart analytics on soil health, weather, and crop yield powered by IoT sensors and predictive models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <img
                alt="Company Logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYv0WULoCTVIl_0JBWSxw6v-1b6GRYURXcQ&s"
                className="h-28 w-100 transition-transform hover:scale-105"
                  loading="lazy"
              />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Market access & logistics
                </h4>
                <p className="text-sm text-gray-600">
                  Connect directly with trusted buyers and streamline logistics to reduce post-harvest losses.
                </p>
              </div>
            </div>

            {/* CTA Links */}
            <div className="mt-10 space-y-3">
              {[
                "What’s next in smart digital farming?",
                "Let’s grow naturally, and sustainably.",
                "Get vegetables for your healthy life.",
              ].map((text, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between bg-lime-100 hover:bg-lime-200 text-lime-700 px-6 py-4 rounded-xl font-medium transition"
                >
                  {text} <ArrowRight className="w-5 h-5" />
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
      <><Subscribe /></>
    </section>
  );
}

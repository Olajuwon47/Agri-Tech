import { CheckCircle } from "lucide-react";

export function Hero() {
  const steps = [
    {
      title: "1. Join as a Farmer or Buyer",
      description:
        "Create your free AgroPulse account. Farmers gain modern tools, while buyers discover verified produce sources.",
    },
    {
      title: "2. Create Your Digital Farm Profile",
      description:
        "List your crops, farm size, and location. AgroPulse uses this data to match you with market demand and insights.",
    },
    {
      title: "3. Access Smart Insights",
      description:
        "Receive weather forecasts, soil health tips, and IoT-powered analytics to improve your yields and planning.",
    },
    {
      title: "4. Connect and Trade Securely",
      description:
        "Buyers and farmers interact directly, negotiate prices, and close transparent transactions with ease.",
    },
    {
      title: "5. Monitor Growth and Performance",
      description:
        "Track sales, logistics, and performance with your personalized dashboard built for clarity and growth.",
    },
    {
      title: "6. Scale with Data Support",
      description:
        "Access funding options, expert recommendations, and learning resources to grow sustainably.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-lime-50 via-white to-lime-100 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Title and Intro */}
        <h2 className="text-2xl font-extrabold tracking-tight text-green-900 sm:text-3xl">
          How AgroPulse Works
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Making farming smarter, markets fairer, and agriculture more connected —
          all through one intelligent digital ecosystem.
        </p>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <CheckCircle className="h-10 w-10 text-lime-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-20 bg-gradient-to-r from-yellow-300 to-lime-900 py-5 px-8 rounded-2xl text-center shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to transform your agricultural journey?
          </h2>
          <p className="text-base sm:text-lg text-lime-100 max-w-2xl mx-auto mb-8">
            Join thousands of farmers and buyers across Africa already using
            AgroPulse to access fair markets, data-driven insights, and
            sustainable growth opportunities.
          </p>
          <a
            href="/Community"
            className="bg-lime-200 hover:bg-yellow-100 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md inline-block"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
}

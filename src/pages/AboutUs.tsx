import { } from 'react';
// import Team from '../Pages/Team.tsx';
export default function AboutUs() {
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
  ];

   const farmers = [
    {
      name: "Sarah Johnson",
      role: "Organic Farmer",
      quote: "AgroPulse transformed how I manage my farm. The insights helped increase my yield by 30%.",
      image: "/assets/farmer1.jpg"
    },
    {
      name: "Mike Chen",
      role: "Buyer",
      quote: "Finding verified sustainable farms has never been easier. Great platform for conscious buyers.",
      image: "/assets/buyer1.jpg"
    }
  ];
  return (
    <>
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

         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="/assets/sections (1).png" 
            alt="Hydroponics and urban farming system"
            className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              loading="lazy"
          />

          {/* Caption Overlay (optional, but looks elegant) */}
          <div className="absolute bottom-6 left-6 bg-lime-600 text-white px-5 py-3 rounded-lg shadow-md bg-opacity-90 backdrop-blur-sm">
            <h3 className="text-lg font-semibold leading-snug">
              Hydroponics & Urban Farming <br />
              <span className="text-sm font-normal text-gray-200">
                The Future of Food
              </span>
            </h3>
          </div>
        </div>

        {/* Right Text Section */}
         <div>
              <h2 className="text-3xl md:text-4xl font-bold text-lime-600 leading-tight mb-6">
                The best choice for your farming needs
              </h2>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                At AgroPulse, we are dedicated to revolutionizing agriculture through
                innovative, sustainable, and community-focused solutions. Our mission is to
                empower smallholder farmers and connect them with fair markets, modern
                insights, and growth opportunities.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Bridging the gap between farmers and buyers with our trusted digital marketplace.",
                  "Empowering farmers with the tools and knowledge they need to thrive.",
                  "Harnessing data and technology for smarter farming decisions.",
                  "Building a community of conscious consumers and ethical producers."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-200 text-sm  mt-0.5">✓</span>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>

              <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-md">
                Discover More
              </button>
            </div>
       
      </div>
      </div>

         {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 mt-8 gap-12 mb-16">
            <div className="bg-lime-50 p-10 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-lime-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading platform connecting farmers and buyers, driving sustainable agriculture, and creating a smarter, tech-enabled farming ecosystem.
              </p>
            </div>
            <div className="bg-lime-50 p-10 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-lime-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower farmers with modern tools and insights, provide buyers with verified produce, and foster growth, innovation, and sustainability in agriculture.
              </p>
            </div>
          </div>

         {/* Video Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            See Our Farming Process
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full aspect-video"
              loading='lazy'
              src="https://youtu.be/x2lK-fvOyXI?si=oPs8qaQOb0egT2pZ"
              title="AgroPulse Farming Process"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/*  What They Say */}
      <section className="py-20 bg-lime-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What They Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {farmers.map((farmer, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                      loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{farmer.name}</h4>
                    <p className="text-lime-600 text-sm">{farmer.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{farmer.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How AgroPulse Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-lime-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-lime-100"
              >
                <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
      {/* <Team /> */}
    </>
  );
}

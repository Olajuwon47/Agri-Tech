import { FaTelegram, FaWhatsapp, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

function Community() {
  const telegramLink = "https://t.me/agropulsecommunity";
  const whatsappLink = "https://chat.whatsapp.com/your-group-link";

  const mentors = [
    { name: "Agent Jay", number: "2348012345678" },
    { name: "Agent Sarah", number: "2348098765432" },
  ];

  const getRandomMentor = () => mentors[Math.floor(Math.random() * mentors.length)];

  const handleMentorChat = () => {
    const mentor = getRandomMentor();
    const whatsappUrl = `https://wa.me/${mentor.number}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-20 sm:h-64 md:h-72 lg:h-96 flex items-center justify-center text-center bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: "url('/assets/images.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Join the AgroPulse Community 🌾</h1>
          <p className="text-lg sm:text-xl md:text-lg">
            Connect with farmers, agri-entrepreneurs, and mentors transforming agriculture through technology.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6">
        {[
          {
            icon: <FaTelegram className="text-blue-500 text-6xl mx-auto mb-4" />, 
            title: "Telegram Group", 
            description: "Join live conversations with innovators, farmers, and agri-tech enthusiasts across Africa.", 
            link: telegramLink, 
            color: "bg-blue-500 hover:bg-blue-600",
            type: "a"
          },
          {
            icon: <FaWhatsapp className="text-green-500 text-6xl mx-auto mb-4" />, 
            title: "WhatsApp Hub", 
            description: "Network with farmers, buyers, and agri-experts for support and shared market insights.", 
            link: whatsappLink, 
            color: "bg-green-500 hover:bg-green-600",
            type: "a"
          },
          {
            icon: <FaComments className="text-purple-500 text-6xl mx-auto mb-4" />, 
            title: "Chat with a Mentor", 
            description: "Get one-on-one guidance from experienced agronomists and agri-tech mentors to grow your idea.", 
            color: "bg-purple-500 hover:bg-purple-600",
            type: "button",
            action: handleMentorChat
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md transition p-8 text-center border-t-4 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {card.icon}
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-5">{card.description}</p>
            {card.type === "a" ? (
              <a href={card.link} target="_blank" rel="noopener noreferrer" className={`inline-block ${card.color} text-white px-6 py-2 rounded-full font-medium transition-all duration-300`}>Join Now</a>
            ) : (
              <button onClick={card.action} className={`inline-block ${card.color} text-white px-6 py-2 rounded-full font-medium transition-all duration-300`}>Chat Now</button>
            )}
          </motion.div>
        ))}
      </div>

      {/* About & Vision Section */}
      <div className="max-w-4xl mx-auto mt-16 px-6 space-y-6">
        <motion.div className="bg-white p-8 rounded-xl shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">About Our Community</h2>
          <p className="text-gray-600 leading-relaxed">
            AgroPulse connects farmers, buyers, and innovators. We foster shared learning, mentorship, and collaborative problem-solving to empower agripreneurs across Africa.
          </p>
        </motion.div>

        <motion.div className="bg-white p-8 rounded-xl shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Stand For</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Empowering smallholder farmers through technology</li>
            <li>Fostering digital literacy and inclusion in agriculture</li>
            <li>Encouraging sustainability and fair market access</li>
            <li>Building bridges between farmers and agri-businesses</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Community;

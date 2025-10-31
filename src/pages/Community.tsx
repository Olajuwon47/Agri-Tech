import { FaTelegram, FaWhatsapp, FaComments } from "react-icons/fa";

function Community() {
  const telegramLink = "https://t.me/agropulsecommunity";
  const whatsappLink = "https://chat.whatsapp.com/your-group-link";

  const mentors = [
    { name: "Agent Jay", number: "2348012345678" },
    { name: "Agent Sarah", number: "2348098765432" },
  ];

  const getRandomMentor = () => {
    const randomIndex = Math.floor(Math.random() * mentors.length);
    return mentors[randomIndex];
  };

  const handleMentorChat = () => {
    const mentor = getRandomMentor();
    const whatsappUrl = `https://wa.me/${mentor.number}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-44  object-fill bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/assets/images.jpeg')",
          backgroundSize: "fit",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white px-4">
          <h1 className="text-4xl font-bold mb-3">Join the AgroPulse Community 🌾</h1>
          <p className="text-lg">
            Connect with farmers, agri-entrepreneurs, and mentors transforming
            agriculture through technology.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6">
        {/* Telegram */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center border-t-4 border-blue-500 hover:scale-105">
          <FaTelegram className="text-blue-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Telegram Group</h2>
          <p className="text-gray-600 mb-5">
            Join live conversations with innovators, farmers, and agri-tech
            enthusiasts across Africa.
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
          >
            Join Telegram
          </a>
        </div>

        {/* WhatsApp */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center border-t-4 border-green-500 hover:scale-105">
          <FaWhatsapp className="text-green-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">WhatsApp Hub</h2>
          <p className="text-gray-600 mb-5">
            Network with farmers, buyers, and agri-experts for quick support and
            shared market insights.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium"
          >
            Join WhatsApp
          </a>
        </div>

        {/* Mentorship */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center border-t-4 border-purple-500 hover:scale-105">
          <FaComments className="text-purple-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Chat a Mentor</h2>
          <p className="text-gray-600 mb-5">
            Get one-on-one guidance from experienced agronomists and agri-tech
            mentors to scale your idea.
          </p>
          <button
            onClick={handleMentorChat}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium"
          >
            Chat Now
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto mt-16 px-6">
        <div className="bg-white p-8 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            About Our Community
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At AgroPulse, our community bridges the gap between farmers, buyers,
            and innovators. We foster shared learning, peer mentorship, and
            collaborative problem-solving that empowers rural and urban
            agripreneurs alike.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What We Stand For
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Empowering smallholder farmers through technology</li>
            <li>Fostering digital literacy and inclusion in agriculture</li>
            <li>Encouraging sustainability and fair market access</li>
            <li>Building bridges between farmers and agri-businesses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Community;

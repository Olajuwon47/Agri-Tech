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
        className="relative w-full h-44 object-fill bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')"
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

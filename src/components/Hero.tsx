import profile from "../assets/profile.jpg"; // ✅ Corrected import

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center h-full max-w-7xl mx-auto px-6">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Hemant Arya
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-md drop-shadow-md">
            MERN Stack Developer | React.js | Node.js | MongoDB
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 bg-indigo-600 rounded-full text-white font-semibold hover:bg-indigo-700 transition"
          >
            Let’s Connect
          </a>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:ml-20 md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Hemant Arya"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-white shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

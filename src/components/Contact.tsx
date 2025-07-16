import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/918586918598?text=${fullMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')", // 💡 Change this to your desired background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to darken image for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6">Contact Me</h2>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:hemantarya7860@gmail.com"
              className="underline hover:text-fuchsia-300"
            >
              hemantarya7860@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaPhone className="text-xl" />
            <a
              href="tel:+918586918598"
              className="underline hover:text-fuchsia-300"
            >
              +91 8586918598
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleWhatsAppSubmit}
          className="bg-white/10 p-6 rounded-lg shadow space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded px-4 py-2 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded px-4 py-2 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded px-4 py-2 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-secondary text-white font-bold rounded transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

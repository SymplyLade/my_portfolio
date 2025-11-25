import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { submitMessage } from "../services/api";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/SymplyLade", label: "GitHub", color: "hover:text-black" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/gbemisola-victoria-458715382", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
  { icon: <FaTwitter />, url: "https://twitter.com/MirahJosh4", label: "Twitter", color: "text-blue-500 hover:text-blue-600" },
  { icon: <FaInstagram />, url: "https://instagram.com/mhiz_lade", label: "Instagram", color: "text-pink-500 hover:text-pink-600" },
  { icon: <FaFacebook />, url: "https://facebook.com/GbemisolaVictoriaOluwabusolami", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
  { icon: <SiTiktok />, url: "https://tiktok.com/@Sympli_Moren", label: "TikTok", color: "text-black hover:text-gray-800" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: "", error: "" });
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const sendMessage = async () => {
      setSubmitting(true);
      setStatus({ success: "", error: "" });
      try {
        await submitMessage(formData);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus({ success: "Message sent successfully!", error: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } catch (err) {
        setStatus({ success: "", error: err.message || "Something went wrong." });
      } finally {
        setSubmitting(false);
      }
    };

    sendMessage();
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-gray-700">Feel free to reach out for collaborations or just a chat!</p>

        <form className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6" onSubmit={handleSubmit}>
          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="col-span-2 sm:col-span-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />
          </div>

          <div className="col-span-2">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`border rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`col-span-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status.success && <p className="text-green-600 mb-4">{status.success}</p>}
        {status.error && <p className="text-red-500 mb-4">{status.error}</p>}

        <div className="flex justify-center items-center gap-6 mb-6 text-gray-700 text-lg">
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-700" />
            <span>07059464193</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <span>0903362020</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-2xl text-gray-700 mb-6">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative ${link.color} transition transform hover:scale-125 group`}
            >
              {link.icon}
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        {showPopup && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up z-50">
            Message Sent Successfully!
          </div>
        )}

        <a
          href="https://wa.me/0903362020"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.5s ease forwards; }
      `}</style>
    </section>
  );
};

export default Contact;






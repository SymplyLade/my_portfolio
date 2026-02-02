// import React, { useState } from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
// import { SiTiktok } from "react-icons/si";
// import { submitMessage } from "../services/api";

// const socialLinks = [
//   { icon: <FaGithub />, url: "https://github.com/SymplyLade", label: "GitHub", color: "hover:text-black" },
//   { icon: <FaLinkedin />, url: "https://linkedin.com/in/gbemisola-victoria-458715382", label: "LinkedIn", color: "text-blue-700 hover:text-blue-800" },
//   { icon: <FaTwitter />, url: "https://twitter.com/MirahJosh4", label: "Twitter", color: "text-blue-500 hover:text-blue-600" },
//   { icon: <FaInstagram />, url: "https://instagram.com/mhiz_lade", label: "Instagram", color: "text-pink-500 hover:text-pink-600" },
//   { icon: <FaFacebook />, url: "https://facebook.com/GbemisolaVictoriaOluwabusolami", label: "Facebook", color: "text-blue-600 hover:text-blue-700" },
//   { icon: <SiTiktok />, url: "https://tiktok.com/@Sympli_Moren", label: "TikTok", color: "text-black hover:text-gray-800" },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState({ success: "", error: "" });
//   const [submitting, setSubmitting] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.message) newErrors.message = "Message is required";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     const sendMessage = async () => {
//       setSubmitting(true);
//       setStatus({ success: "", error: "" });
//       try {
//         await submitMessage(formData);
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setStatus({ success: "Message sent successfully!", error: "" });
//         setShowPopup(true);
//         setTimeout(() => setShowPopup(false), 3000);
//       } catch (err) {
//         setStatus({ success: "", error: err.message || "Something went wrong." });
//       } finally {
//         setSubmitting(false);
//       }
//     };

//     sendMessage();
//   };

//   return (
//     <section id="contact" className="py-20 bg-white relative">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//         <p className="mb-6 text-gray-700">Feel free to reach out for collaborations or just a chat!</p>

//         <form className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6" onSubmit={handleSubmit}>
//           <div className="col-span-2 sm:col-span-1">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div className="col-span-2 sm:col-span-1">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div className="col-span-2 sm:col-span-1">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
//             />
//           </div>

//           <div className="col-span-2">
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               className={`border rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//           </div>

//           <button
//             type="submit"
//             disabled={submitting}
//             className={`col-span-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
//           >
//             {submitting ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {status.success && <p className="text-green-600 mb-4">{status.success}</p>}
//         {status.error && <p className="text-red-500 mb-4">{status.error}</p>}

//         <div className="flex justify-center items-center gap-6 mb-6 text-gray-700 text-lg">
//           <div className="flex items-center gap-2">
//             <FaPhone className="text-green-700" />
//             <span>07059464193</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaWhatsapp className="text-green-500" />
//             <span>0903362020</span>
//           </div>
//         </div>

//         <div className="flex justify-center gap-6 text-2xl text-gray-700 mb-6">
//           {socialLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`relative ${link.color} transition transform hover:scale-125 group`}
//             >
//               {link.icon}
//               <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                 {link.label}
//               </span>
//             </a>
//           ))}
//         </div>
//         {showPopup && (
//           <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up z-50">
//             Message Sent Successfully!
//           </div>
//         )}

//         <a
//           href="https://wa.me/0903362020"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
//         >
//           <FaWhatsapp size={24} />
//         </a>
//       </div>

//       <style>{`
//         @keyframes slide-up {
//           0% { transform: translateY(50px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         .animate-slide-up { animation: slide-up 0.5s ease forwards; }
//       `}</style>
//     </section>
//   );
// };

// export default Contact;





// import { useState } from "react";
// import API_URL from "../config";
// import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import { SiMedium } from "react-icons/si";
// import { 
//   Mail, 
//   MapPin, 
//   Clock, 
//   Download, 
//   ChevronDown, 
//   FileText, 
//   File, 
//   Check, 
//   X, 
//   Loader2 
// } from "lucide-react";

// function Contacts() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (
//       !form.name.trim() ||
//       !form.email.trim() ||
//       !form.subject.trim() ||
//       !form.message.trim()
//     ) {
//       setError("All fields are required");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/api/messages`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to send message");
//       }

//       setForm({ name: "", email: "", subject: "", message: "" });
//       setSuccess(true);
//       setTimeout(() => setSuccess(false), 5000);
//     } catch (err) {
//       setError(err.message);
//       console.error("Error sending message:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleDownload = async (type) => {
//     try {
//       const response = await fetch(`${API_URL}/api/resume/download/${type}`);
//       if (!response.ok) throw new Error("Resume not available");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `Tunji_Paul_${type.toUpperCase()}.pdf`;
//       document.body.appendChild(a);
//       a.click();
//       window.URL.revokeObjectURL(url);
//       document.body.removeChild(a);
//       setDropdownOpen(false);
//     } catch (err) {
//       alert("Failed to download resume. Please try again.");
//       console.error("Download error:", err);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
//           Get In Touch
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-8 items-start">
//           {/* Left Side - Contact Info & Download */}
//           <div className="space-y-6">
//             {/* Contact Info Card */}
//             <div className="bg-linear-to-br from-orange-600 to-orange-700 p-8 rounded-xl shadow-xl text-white">
//               <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start gap-3">
//                   <Mail className="w-6 h-6 mt-1 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Email</p>
//                     <p className="text-orange-100">vgbemisola3@gmail.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-6 h-6 mt-1 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Location</p>
//                     <p className="text-orange-100">Abeokuta, Nigeria</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <Clock className="w-6 h-6 mt-1 shrink-0" />
//                   <div>
//                     <p className="font-semibold">Contact</p>
//                     <p className="text-orange-100">+2347059464193</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Download Resume Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
//                 >
//                   <Download className="w-5 h-5" />
//                   Hire me!
//                   <ChevronDown
//                     className={`w-4 h-4 transition-transform duration-300 ${
//                       dropdownOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {dropdownOpen && (
//                   <div className="absolute w-full mt-2 bg-white rounded-lg shadow-2xl overflow-hidden z-10 animate-fadeIn">
//                     <button
//                       onClick={() => handleDownload("resume")}
//                       className="w-full px-6 py-4 text-left hover:bg-orange-50 transition-colors duration-200 flex items-center gap-3 group"
//                     >
//                       <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
//                         <FileText className="w-5 h-5 text-orange-600" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-800">Resume</p>
//                         <p className="text-xs text-gray-500">
//                           Download full resume (PDF)
//                         </p>
//                       </div>
//                     </button>

//                     <button
//                       onClick={() => handleDownload("cv")}
//                       className="w-full px-6 py-4 text-left hover:bg-orange-50 transition-colors duration-200 flex items-center gap-3 group border-t"
//                     >
//                       <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
//                         <File className="w-5 h-5 text-orange-600" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-800">
//                           Curriculum Vitae
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           Download detailed CV (PDF)
//                         </p>
//                       </div>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="bg-orange-50 p-6 rounded-xl">
//               <h4 className="font-semibold text-gray-800 mb-3">
//                 Connect on Social Media
//               </h4>
//               <div className="flex gap-3">
//                 <a
//                   href="https://x.com/MirahJosh4_"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                   className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                 >
//                   <FaTwitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/mhiz_lade/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                 >
//                   <FaInstagram className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/gbemisola-victoria-458715382"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                 >
//                   <FaLinkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://github.com/SymplyLade"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                 >
//                   <FaGithub className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://medium.com/@vgbemisola3"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                 >
//                   <SiMedium className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div>
//             <form
//               onSubmit={handleSubmit}
//               className="bg-orange-50 p-8 rounded-xl shadow-xl space-y-6"
//             >
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Send Me a Message
//               </h3>

//               {success && (
//                 <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
//                   <Check className="w-5 h-5" />
//                   Message sent successfully! I'll get back to you soon.
//                 </div>
//               )}

//               {error && (
//                 <div className="p-4 bg-red-100 text-red-800 rounded-lg flex items-center gap-2">
//                   <X className="w-5 h-5" />
//                   {error}
//                 </div>
//               )}

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300"
//                   placeholder="Your full name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300"
//                   placeholder="What's this about?"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300 resize-none"
//                   placeholder="Tell me more about your project or inquiry..."
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-all duration-300 disabled:opacity-50 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 {loading ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <Loader2 className="w-5 h-5 animate-spin" />
//                     Sending...
//                   </span>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Contacts;





import { useState } from "react";
import API_URL from "../config";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Download, 
  Check, 
  X, 
  Loader2 
} from "lucide-react";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to send message");
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Info & CV Download */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-orange-100">vgbemisola3@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-orange-100">Abeokuta, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Contact</p>
                    <p className="text-orange-100">+2347059464193</p>
                  </div>
                </div>
              </div>

              {/* Download CV */}
              <div>
                <a
                  href="/cv.pdf" // Place your CV in public/cv.pdf
                  download="SymplyLade_CV.pdf"
                  className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download My CV
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-3">
                Connect on Social Media
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://x.com/MirahJosh4_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/mhiz_lade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gbemisola-victoria-458715382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/SymplyLade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://medium.com/@vgbemisola3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <SiMedium className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-orange-50 p-8 rounded-xl shadow-xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Send Me a Message
              </h3>

              {success && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 text-red-800 rounded-lg flex items-center gap-2">
                  <X className="w-5 h-5" />
                  {error}
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me more about your project or inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-all duration-300 disabled:opacity-50 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

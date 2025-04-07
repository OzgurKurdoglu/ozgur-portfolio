import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from "emailjs-com"
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_USER_ID
            )
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="px-4 w-full md:w-[800px] lg:w-[1000px]">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-blue-500 to-purple-600  bg-clip-text text-transparent text-center">Contact Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-gray-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-semibold text-white mb-4">Get In Touch</h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your Message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded font-medium  relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-gray-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-gray-200 hover:text-indigo-500 transition-transform transform hover:scale-110 text-2xl" />
                                <p className="text-gray-300 text-lg">kurdogluzogur23@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-gray-200 hover:text-indigo-500 transition-transform transform hover:scale-110 text-2xl" />
                                <p className="text-gray-300 text-lg">Phone:+90 507 517 26 70</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-gray-200 hover:text-indigo-500 transition-transform transform hover:scale-110 text-2xl" />
                                <p className="text-gray-300 text-lg">Location: Istanbul, Türkiye</p>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <a
                                    href="https://www.linkedin.com/in/ozgurkurdoglu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-indigo-500 text-5xl transition-all duration-300 transform hover:scale-110"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/OzgurKurdoglu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-indigo-500 text-5xl transition-all duration-300 transform hover:scale-110"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>

        </section>
    )
}
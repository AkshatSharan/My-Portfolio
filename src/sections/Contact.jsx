import SectionTitle from "../components/SectionTitle";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section className="site-section bg-gray-200" id="contact">
            <SectionTitle title="Get in Touch" />

            <div className="flex flex-col md:flex-row gap-10 mt-10">
                {/* Left - Contact Info */}
                <div className="md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-secondary font-semibold text-site-gold">
                        Let’s connect and collaborate!
                    </h3>
                    <p className="text-gray-400">
                        Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's create something amazing together.
                    </p>

                    <div className="space-y-3 text-sm text-gray-400">
                        <p className="flex items-center gap-2">
                            <Mail size={18} className="text-site-gold" />
                            <a href="mailto:akshat.sharan2004@gmail.com" className="hover:underline">
                                akshat.sharan2004@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={18} className="text-site-gold" />
                            <a href="tel:+919971113634" className="hover:underline">
                                +91 9971113634
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <Linkedin size={18} className="text-site-gold" />
                            <a
                                href="https://www.linkedin.com/in/akshatsharan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                linkedin.com/in/akshatsharan
                            </a>
                        </p>
                    </div>

                    {/* Resume Button */}
                    <div className="pt-2">
                        <h4 className="text-md text-gray-400 mb-5 font-semibold">Grab a copy of my resume:</h4>
                        <a
                            href="/Akshat_Sharan_Resume.pdf"
                            download="Akshat_Sharan_Resume.pdf"
                            className="site-button text-sm md:text-base"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right - Contact Form */}
                <form
                    className="md:w-1/2 space-y-5"
                    action="https://formspree.io/f/mjkrwkdv"
                    method="POST"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="contact-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="contact-input"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows="5"
                        className="contact-input"
                    ></textarea>
                    <button type="submit" className="site-button text-sm font-medium">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

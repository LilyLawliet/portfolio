import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function SectionFive() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };


  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black py-36 px-6"
    >
      {/* Headline */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h4 className="uppercase tracking-[0.4em] text-white/50 text-sm mb-6">
          Contact
        </h4>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 relative">
          Let’s Create Something Legendary
          <span className="absolute inset-0 blur-3xl bg-purple-500/10 -z-10" />
        </h2>
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          Whether it’s a luxury website, a billion-dollar SaaS suite, or
          a brand-defining product — we’re here to make it iconic.
        </p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition"
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell us about your vision..."
            rows="5"
            required
            className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium tracking-wide text-lg text-white bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] transition"
          >
            Book a Call <Send className="w-5 h-5" />
          </motion.button>
        </form>

        {/* Status Message */}
        {status === "success" && (
          <div className="mt-6 flex items-center justify-center gap-2 text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <span>Your message has been sent successfully!</span>
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 flex items-center justify-center gap-2 text-pink-400">
            <AlertCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again.</span>
          </div>
        )}

        {/* Extra direct contact */}
      {/* Extra direct contact */}
<div className="mt-10 text-center">
  <p className="text-white/60 text-sm">
    Prefer direct contact? Email us at{" "}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=rimeunjee@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-300 hover:text-purple-200 transition"
    >
      rimeunjee@gmail.com
    </a>
  </p>
</div>

      </motion.div>
    </section>
  );
}

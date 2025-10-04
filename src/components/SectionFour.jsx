import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FlowerIcon from "../assets/flower.png"

export default function SectionFour() {
  return (
    <section
      id="products"
      className="relative min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black py-36 px-6"
    >
      {/* Headline */}
      <div className="max-w-5xl mx-auto text-center mb-28">
        <h4 className="uppercase tracking-[0.4em] text-white/50 text-sm mb-6">
          Products
        </h4>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 relative">
          Introducing IrsaIQ
          <span className="absolute inset-0 blur-3xl bg-purple-500/10 -z-10" />
        </h2>
      </div>

      {/* Product Spotlight */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Product Image / Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <img
            src={FlowerIcon}
            alt="IrsaIQ AI Tool"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="px-4 py-1 bg-purple-500/20 text-purple-200 text-xs font-semibold uppercase rounded-full tracking-wide">
              Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            AI-Powered Lead Generation that <span className="text-purple-300">Closes for You</span>
          </h3>
          <p className="text-white/70 text-lg leading-relaxed">
            Meet <span className="text-purple-200 font-semibold">IrsaIQ</span> — our upcoming
            flagship product. An intelligent lead generation tool that not only
            finds opportunities but also nurtures and closes them
            automatically. Designed for modern enterprises that want precision,
            speed, and scale without compromise.
          </p>
          <p className="text-white/50">
            Built with custom AI models and refined strategies, IrsaIQ adapts to
            your brand’s voice, ensuring every interaction feels uniquely
            tailored.
          </p>
          {/* <motion.a
            href="#"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400/40 text-purple-200 rounded-full tracking-wide text-sm md:text-base font-medium hover:border-purple-300 hover:text-purple-100 transition"
          >
            Join the Waitlist <ArrowUpRight className="w-5 h-5" />
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
}

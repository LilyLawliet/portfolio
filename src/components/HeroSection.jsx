import { motion, useMotionValue, useSpring } from "framer-motion";
import { Diamond } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  // Magnetic button effect
  function MagneticButton({ children, href, className }) {
    const [hovered, setHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 200, damping: 15 });
    const springY = useSpring(y, { stiffness: 200, damping: 15 });

    function handleMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);
      x.set(offsetX * 0.2);
      y.set(offsetY * 0.2);
    }

    function reset() {
      setHovered(false);
      x.set(0);
      y.set(0);
    }

    return (
      <motion.a
        href={href}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={reset}
        style={{ x: springX, y: springY }}
        className={`relative overflow-hidden group px-6 py-2 sm:px-10 sm:py-3 border uppercase tracking-wide rounded-md transition-colors duration-300 text-sm sm:text-base ${className}`}
      >
        {/* Shimmer gradient */}
        <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/10 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700" />
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-neutral-950 to-black text-white overflow-hidden px-4"
    >
      {/* Floating aura with subtle motion */}
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 sm:right-32 w-[20rem] sm:w-[32rem] h-[20rem] sm:h-[32rem] bg-purple-700/40 rounded-full blur-[180px] sm:blur-[220px]"
      />

      <div className="relative z-10 max-w-5xl text-center">
        {/* Tagline */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 bg-white/5 border border-white/20 backdrop-blur-lg rounded-md text-xs sm:text-sm font-light tracking-wider uppercase"
        >
          <Diamond className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
          Digital Luxury, Redefined
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-8 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          We Shape{" "}
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 text-transparent bg-clip-text">
            Timeless
          </span>{" "}
          Digital Icons
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-2"
        >
          We don’t just launch products—we craft{" "}
          <span className="text-white">digital legends</span>. From SaaS suites
          to cultural-grade websites, every pixel embodies{" "}
          <span className="text-purple-300">precision, elegance, and soul</span>.
        </motion.p>

      {/* CTA */}
<motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
  className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 sm:gap-8 w-full max-w-2xl mx-auto px-2"
>
  <MagneticButton
    href="#projects"
    className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-semibold hover:bg-white/5"
  >
    Explore Work
  </MagneticButton>

  <MagneticButton
    href="#contact"
    className="w-full sm:w-auto bg-transparent border border-white/20 text-white/70 font-medium hover:bg-white/5"
  >
    Collaborate
  </MagneticButton>
</motion.div>

      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const navItems = ["HOME", "PROJECTS", "ABOUT", "PRODUCT", "CONTACT"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-white hover:text-purple-300 transition-colors"
        >
          IRSA STUDIO
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm font-medium tracking-widest transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/70 hover:text-white text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-start space-y-4 px-6 py-6">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)} // close on click
                  className="text-white/80 hover:text-purple-300 text-base font-medium tracking-wider transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

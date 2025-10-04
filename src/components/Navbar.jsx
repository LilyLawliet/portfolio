import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

export default function Navbar() {
  const navItems = ["HOME", "PROJECTS", "ABOUT", "PRODUCT", "CONTACT"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand / Studio Name */}
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-white hover:text-purple-300 transition-colors"
        >
           IRSA STUDIO
        </a>

        {/* Nav Links */}
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
          <button className="text-white/70 hover:text-white">☰</button>
        </div>
      </div>
    </motion.nav>
  );
}

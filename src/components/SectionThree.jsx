import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import heartIcon from "../assets/heart.png"

export default function SectionThree() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="about"
            ref={ref}
            className="relative min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black py-36 px-6 overflow-hidden"
        >
            {/* Floating Aura */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-purple-700/40 rounded-full blur-[280px] pointer-events-none"
            />

            {/* Headline */}
            <motion.div
                className="max-w-5xl mx-auto text-center mb-28"
            >
                <h4 className="uppercase tracking-[0.4em] text-white/50 text-sm mb-6">
                    About
                </h4>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 relative">
                    The Studio Vision
                    <span className="absolute inset-0 blur-3xl bg-purple-500/10 -z-10" />
                </h2>
            </motion.div>

            {/* About Content */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative rounded-3xl overflow-hidden flex justify-center items-center 
             bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-6"
                >
                    <img
                        src={heartIcon}
                        alt="Studio Vision"
                        className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] 
               h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] 
               object-contain mx-auto"
                    />
                </motion.div>



                {/* Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Crafting Digital Icons That Last
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                        I’m Irsa, a full-stack developer, AI automation builder, and
                        designer. At IRSA Studio, we don’t just make websites — we craft{" "}
                        <span className="text-purple-300">timeless digital experiences</span>{" "}
                        that feel like they belong in culture, not just online. Our mission
                        is simple: deliver work that feels <em>expensive, futuristic, and
                            unforgettable</em>.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6">
                        <div>
                            <p className="text-4xl font-extrabold text-white">30+</p>
                            <p className="text-sm text-white/60">Projects Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-extrabold text-white">2+</p>
                            <p className="text-sm text-white/60">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-extrabold text-white">12</p>
                            <p className="text-sm text-white/60">Global Brands</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

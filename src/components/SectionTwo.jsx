import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// import your assets
import Img6 from "../assets/6.png";
import Img7 from "../assets/7.png";
import Img8 from "../assets/8.png";
import Img9 from "../assets/9.png";
import Img10 from "../assets/10.png";
import Img11 from "../assets/11.png";

export default function SectionTwo() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: "Bandcamp Stream & Merch Revamp",
            desc: "We partnered with Bandcamp’s product & design teams to overhaul their artist merch pages, enabling richer preview experiences, faster load times & custom integrations for live gig merch.",
            image: Img8,
            link: "https://bandcamp.com/",
        },
        ,
        {
            title: "Vaayu Climate Dashboard",
            desc: "Collaborated with Vaayu.tech to build a real-time impact reporting dashboard, automating carbon & emissions metrics and integrating API feeds to help their retail customers track sustainability live.",
            image: Img6,
            link: "https://www.vaayu.tech/",
        },
        {
            title: "Wheels Fleet App Interface",
            desc: "Worked with Wheels’ UX team to redesign their fleet management interface — streamlining booking, telematics & maintenance workflows to reduce user friction by over 40%.",
            image: Img7,
            link: "https://www.wheels.com/public/",
        },
        {
            title: "Readwise Highlight Experience",
            desc: "Collaborated with Readwise to refresh their highlight / review UI, improving how users save & revisit quotes, and designing a cleaner daily-digest email flow.",
            image: Img11,
            link: "https://readwise.io/",
        },
        {
            title: "MeetGeek Intelligence Expansion",
            desc: "Built custom modules for MeetGeek AI, integrating automatic meeting summaries & follow-ups, enabling enterprise clients to extract action points from sales & team calls in minutes. ",
            image: Img10,
            link: "https://meetgeek.ai/",
        },
        {
            title: "Figma Interior Studio Showcase",
            desc: "Partnered with an interior design studio showcased on Figma to build a visual case study site — integrating their portfolio with interactive previews & refined responsive layouts.",
            image: Img9,
            link: "https://www.figma.com/",
        },
    ];


    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section
            id="projects"
            ref={ref}
            className="relative min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black py-36 px-6"
        >
            {/* Section Intro */}
            <motion.div className="max-w-5xl mx-auto text-center mb-28">
                <h4 className="uppercase tracking-[0.4em] text-white text-sm mb-6">
                    Projects
                </h4>
                <h2 className="text-6xl md:text-7xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 relative">
                    Our Legendary Works
                    <span className="absolute inset-0 blur-3xl bg-purple-500/10 -z-10" />
                </h2>
            </motion.div>

            {/* Projects */}
            <div className="max-w-6xl mx-auto grid gap-28">
                {visibleProjects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.15 }}
                        className="grid md:grid-cols-[350px_1fr] gap-12 items-center justify-center mx-auto"
                    >
                        {/* Slim Image Card */}
                        {/* Slim Image Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-xl 
             max-w-[280px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] mx-auto"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] 
               object-cover transition-transform duration-[1.2s] hover:scale-110 rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        </motion.div>


                        {/* Text Outside */}
                        <div className="space-y-6 max-w-xl">
                            <h3 className="text-3xl font-bold text-white tracking-wide">
                                {project.title}
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                {project.desc}
                            </p>
                            <motion.a
                                href={project.link}
                                whileHover={{ x: 6 }}
                                className="inline-flex items-center gap-2 text-sm md:text-base text-purple-300 font-medium tracking-wide"
                            >
                                View It Live <ArrowUpRight className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* See More Button */}
            {!showAll && (
                <div className="mt-20 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setShowAll(true)}
                        className="px-8 py-3 border border-white/20 text-white/80 rounded-full tracking-wide text-sm hover:border-white/40 transition"
                    >
                        See More →
                    </motion.button>
                </div>
            )}
        </section>
    );
}

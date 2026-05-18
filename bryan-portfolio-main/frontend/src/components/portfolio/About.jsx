import { motion } from "framer-motion";
import pfp from "../../assets/Screenshot 2026-05-08 160050.png";

const stats = [
  { label: "Projects shipped", value: "13" },
  { label: "Years designing", value: "1" },
    { label: "Happy clients", value: "12" },
    { label: "Cups of coffee", value: "∞" },
];

export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-[4/5] max-w-[420px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#141414]">
                        <img
                            src={pfp}
                            alt="Bryan Delgado portrait"
                         className="w-full h-full object-cover transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    {/* Decorative accents */}
                    <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-white/[0.04]" />
                </motion.div>

                {/* Text */}
                <div className="lg:col-span-7">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-xs uppercase tracking-[0.3em] text-[#0066FF] mb-4"
                    >
                        About Me
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display font-black tracking-tighter text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
                        data-testid="about-heading"
                    >
                        A self‑taught creative
                        <br />
                        building{" "}
                        <span className="text-white/40">premium</span> web
                        experiences.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl"
                    >
                        I’m a self‑taught creative focused on modern web design,
                        responsive UI/UX, branding, and digital experiences. I
                        enjoy creating visually polished websites for businesses
                        in need — or wanting an upgrade.
                    </motion.p>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15 + i * 0.08,
                                }}
                                className="bg-[#0c0c0c] p-5 md:p-6 hover:bg-[#141414] transition-colors"
                                data-testid={`about-stat-${i}`}
                            >
                                <div className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                                    {s.value}
                                </div>
                                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/40">
                                    {s.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { motion } from "framer-motion";
import {
    Monitor,
    Layers,
    Code2,
    Palette,
    ShoppingBag,
    Film,
    Sparkles,
} from "lucide-react";

const skills = [
    {
        title: "Responsive Web Design",
        desc: "Pixel-perfect layouts that adapt across every breakpoint.",
        icon: Monitor,
    },
    {
        title: "UI / UX Design",
        desc: "Clear hierarchy, intentional spacing, premium feel.",
        icon: Layers,
    },
    {
        title: "HTML & CSS",
        desc: "Clean, semantic, maintainable foundations.",
        icon: Code2,
    },
    {
        title: "Branding",
        desc: "Identity systems with confident type and tight color.",
        icon: Palette,
    },
    {
        title: "Ecommerce Layouts",
        desc: "Conversion-driven product, cart and checkout flows.",
        icon: ShoppingBag,
    },
    {
        title: "Motion Graphics",
        desc: "Subtle motion that adds clarity, not noise.",
        icon: Film,
    },
    {
        title: "Digital Creativity",
        desc: "Concept-first design that turns brand into experience.",
        icon: Sparkles,
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            data-testid="skills-section"
            className="relative py-24 md:py-32"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">
                    <div className="md:col-span-7">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs uppercase tracking-[0.3em] text-[#0066FF] mb-4"
                        >
                            Skills
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="font-display font-black tracking-tighter text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
                            data-testid="skills-heading"
                        >
                            The toolkit
                            <br />
                            <span className="text-white/40">behind the work.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {skills.map((s, i) => {
                        const Icon = s.icon;
                        const featured = i === 0 || i === 6;
                        return (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`group relative p-6 md:p-7 rounded-2xl border border-white/5 bg-[#0f0f0f] hover:bg-[#141414] hover:border-[#0066FF]/30 hover:-translate-y-1 transition-all duration-300 ${
                                    featured ? "lg:col-span-2" : ""
                                }`}
                                data-testid={`skill-card-${i}`}
                            >
                                <div className="flex items-start justify-between mb-12">
                                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/30 transition-all">
                                        <Icon className="w-5 h-5 text-white/80 group-hover:text-[#7aa6ff] transition-colors" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="font-display font-bold text-white text-lg md:text-xl">
                                    {s.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                                    {s.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

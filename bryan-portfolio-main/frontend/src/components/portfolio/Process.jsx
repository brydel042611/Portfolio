import { motion } from "framer-motion";
import { Lightbulb, LayoutGrid, MousePointer2, Smartphone, Sparkles } from "lucide-react";

const steps = [
    {
        title: "Research & Inspiration",
        desc: "Understanding context, audience and references that fit the brand.",
        icon: Lightbulb,
    },
    {
        title: "Layout & Structure",
        desc: "Wireframes, hierarchy and the skeleton that holds it all together.",
        icon: LayoutGrid,
    },
    {
        title: "UI / UX Design",
        desc: "Visual system, components and the details that feel premium.",
        icon: MousePointer2,
    },
    {
        title: "Responsive Optimization",
        desc: "Every breakpoint tuned, mobile-first and snappy.",
        icon: Smartphone,
    },
    {
        title: "Final Polish",
        desc: "Micro-interactions, typography passes and the last 5% that matters.",
        icon: Sparkles,
    },
];

export default function Process() {
    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative py-24 md:py-32 bg-[#080808]"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs uppercase tracking-[0.3em] text-[#0066FF] mb-4"
                        >
                            Creative Process
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
                            data-testid="process-heading"
                        >
                            From idea
                            <br />
                            <span className="text-white/40">to launch.</span>
                        </motion.h2>
                    </div>
                    <p className="max-w-md text-sm md:text-base text-white/50 leading-relaxed">
                        A five-step approach to designing websites that feel
                        considered, distinctive and built for real users.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical/horizontal line decoration */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-4">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative p-6 md:p-5 lg:p-6 rounded-2xl border border-white/5 bg-[#0f0f0f] hover:border-[#0066FF]/30 hover:-translate-y-1 transition-all duration-300 group"
                                    data-testid={`process-step-${i + 1}`}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center font-display font-bold text-sm text-white/70 group-hover:border-[#0066FF]/50 group-hover:text-white transition-all">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <Icon className="w-5 h-5 text-white/40 group-hover:text-[#7aa6ff] transition-colors" />
                                    </div>
                                    <h3 className="font-display font-bold text-white text-base md:text-lg leading-tight">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 text-xs md:text-sm text-white/50 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

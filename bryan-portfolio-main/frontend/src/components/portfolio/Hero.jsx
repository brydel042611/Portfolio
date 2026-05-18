import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Hero() {
    const handleScroll = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-[100svh] w-full overflow-hidden flex items-end pb-16 md:pb-24 pt-32"
        >
            {/* Background layers */}
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

            {/* Glow accents */}
            <div className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-[#0066FF]/20 blur-[140px]" />
            <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] rounded-full bg-[#0066FF]/10 blur-[160px]" />

            {/* Cinematic image overlay */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-screen"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1762017740727-86f6ad9eab18?auto=format&fit=crop&w=2000&q=70')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maskImage:
                        "linear-gradient(to bottom, black 30%, transparent 100%)",
                }}
            />
            <div className="noise-overlay" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                {/* Left col */}
                <div className="lg:col-span-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={1}
                        data-testid="hero-heading"
                        className="font-display font-black tracking-tighter text-white text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95]"
                    >
                        Modern Web Design
                        <br />
                        <span className="text-white/30">&</span>{" "}
                        <span className="relative inline-block">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#7aa6ff]">
                                Digital Creativity
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={2}
                        className="mt-8 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed"
                    >
                        I create responsive websites, modern user experiences,
                        and premium digital designs built to stand out.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={3}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <button
                            onClick={() => handleScroll("#projects")}
                            data-testid="hero-view-projects-btn"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0066FF] text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-300"
                        >
                            View Projects
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                        <button
                            onClick={() => handleScroll("#contact")}
                            data-testid="hero-contact-btn"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-sm font-medium"
                        >
                            Contact Me
                        </button>
                    </motion.div>
                </div>

                {/* Right col — Floating shapes */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={4}
                    className="lg:col-span-4 hidden lg:flex flex-col items-end gap-6"
                >
                    <div className="relative w-full aspect-square max-w-sm">
                        {/* Orbit */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-0 rounded-full border border-white/5"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 80,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-6 rounded-full border border-white/[0.03]"
                        />

                        {/* Center card */}
                        <div className="absolute inset-12 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between glow-blue">
                            <div className="flex items-center justify-between">
                                <Sparkles className="w-5 h-5 text-[#0066FF]" />
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                                    v2.5
                                </span>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">
                                    Current Focus
                                </div>
                                <div className="font-display font-bold text-white text-2xl leading-tight">
                                    Premium
                                    <br />
                                    Pitch
                                </div>
                                <div className="text-xs text-white/50 mt-2">
                                    Ecommerce · Football
                                </div>
                            </div>
                        </div>

                        {/* Floating chips */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -top-3 -left-3 px-3 py-1.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] text-white/70"
                        >
                            UI / UX
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] text-[#7aa6ff]"
                        >
                            Responsive
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => handleScroll("#about")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
                aria-label="Scroll down"
                data-testid="hero-scroll-down"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                >
                    <ArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.button>
        </section>
    );
}

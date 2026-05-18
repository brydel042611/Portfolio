import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const tags = ["Ecommerce", "Responsive Design", "UI/UX", "Branding"];

export default function Projects() {
    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-24 md:py-32 bg-[#080808]"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs uppercase tracking-[0.3em] text-[#0066FF] mb-4"
                        >
                            Featured Projects
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="font-display font-black tracking-tighter text-white text-4xl md:text-5xl lg:text-6xl leading-[1]"
                            data-testid="projects-heading"
                        >
                            Selected
                            <br />
                            <span className="text-white/40">work</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-md text-white/50 text-sm md:text-base leading-relaxed"
                    >
                        A focused look at concepts and live work. More case
                        studies coming soon — handpicked, premium, and built
                        with care.
                    </motion.p>
                </div>

                {/* Featured Card — Premium Pitch */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[2rem] border border-white/5 bg-gradient-to-br from-[#0f0f0f] via-[#0a0a0a] to-[#080808] overflow-hidden group"
                    data-testid="project-card-premium-pitch"
                >
                    {/* Glow */}
                    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0066FF]/10 blur-[120px] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
                        {/* Visual area */}
                        <div className="lg:col-span-7 relative min-h-[420px] md:min-h-[560px] overflow-hidden">
                            {/* Cinematic football image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1602472097151-72eeec7a3185?auto=format&fit=crop&w=1600&q=80')",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.15),transparent_60%)]" />

                            {/* Floating desktop mockup */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute right-6 top-10 md:right-10 md:top-14 w-[68%] md:w-[60%] aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] group-hover:-translate-y-2 transition-transform duration-700"
                            >
                                <div className="absolute top-0 left-0 right-0 h-6 bg-[#0c0c0c] border-b border-white/5 flex items-center gap-1.5 px-3">
                                    <span className="w-2 h-2 rounded-full bg-white/15" />
                                    <span className="w-2 h-2 rounded-full bg-white/15" />
                                    <span className="w-2 h-2 rounded-full bg-white/15" />
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1636777530577-a075553f4520?auto=format&fit=crop&w=1400&q=80"
                                    alt="Premium Pitch desktop UI"
                                    className="w-full h-full object-cover pt-6"
                                />
                            </motion.div>

                            {/* Mobile mockup */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute left-6 bottom-8 md:left-10 md:bottom-10 w-[34%] md:w-[26%] aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.9)] group-hover:translate-y-2 transition-transform duration-700"
                            >
                                <div className="absolute top-0 left-0 right-0 h-5 flex items-center justify-center">
                                    <span className="w-12 h-1 bg-black rounded-full mt-1" />
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1602472097151-72eeec7a3185?auto=format&fit=crop&w=500&q=80"
                                    alt="Premium Pitch mobile UI"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <div className="text-[8px] uppercase tracking-[0.15em] text-[#7aa6ff]">
                                        Shop
                                    </div>
                                    <div className="text-[10px] font-display font-bold text-white">
                                        Premium Pitch
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Content area */}
                        <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                                        Concept · 2025
                                    </span>
                                    <span className="h-px flex-1 bg-white/10" />
                                </div>

                                <h3 className="font-display font-black tracking-tight text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                                    Premium Pitch
                                </h3>

                                <p className="mt-5 text-white/55 leading-relaxed text-sm md:text-base">
                                    Premium Pitch is a modern football
                                    ecommerce concept focused on responsive UI,
                                    premium branding, smooth shopping
                                    experiences, and modern ecommerce design.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {tags.map((t) => (
                                        <span
                                            key={t}
                                            data-testid={`project-tag-${t.toLowerCase().replace(/[\s/]+/g, "-")}`}
                                            className="px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] text-white/70 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#0066FF]/40 hover:text-white transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap items-center gap-3">
                               <a
  href="https://premium-pitch.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  data-testid="project-live-preview-btn"
  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0055DD] transition-colors"
>
  Live Preview
  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
</a>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    data-testid="project-view-btn"
                                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all text-sm font-medium"
                                >
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.article>

                {/* Placeholder for more projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-8 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.015] p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                    data-testid="projects-more-soon"
                >
                    <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                            In the studio
                        </div>
                        <div className="mt-2 font-display font-bold text-white text-2xl md:text-3xl">
                            More case studies coming soon.
                        </div>
                    </div>
                    <div className="text-sm text-white/40">
                        Want to be the next one?{" "}
                        <a
                            href="#contact"
                            className="text-[#7aa6ff] hover:underline underline-offset-4"
                        >
                            Let’s talk →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

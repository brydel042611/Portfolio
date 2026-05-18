import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
    {
        name: "Angel Martinez",
        role: "Retired Photographer",
        avatar: "AM",
        quote: "Very strong with communication and overall a great person to work with.",
    },
    {
        name: "Daniel Pérez",
        role: "Reseller",
        avatar: "DP",
        quote: "Great with design and let me change anything I suggested. Also good with changes that appeal to the client.",
    },
    {
        name: "Mike Grimes",
        role: "Barber",
        avatar: "MG",
        quote: "Fast, communicative, and good with the details. The result feels premium without being heavy or overdone. Prices are also affordable.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-24 md:py-32"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-16 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs uppercase tracking-[0.3em] text-[#0066FF] mb-4"
                        >
                            Testimonials
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
                            data-testid="testimonials-heading"
                        >
                            Words from
                            <br />
                            <span className="text-white/40">collaborators.</span>
                        </motion.h2>
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 fill-[#0066FF] text-[#0066FF]"
                                />
                            ))}
                        </div>
                        <span>5.0 average rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={r.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative p-8 rounded-2xl border border-white/5 bg-[#0f0f0f] hover:border-[#0066FF]/30 hover:-translate-y-1 transition-all duration-300"
                            data-testid={`testimonial-${i}`}
                        >
                            <Quote className="w-8 h-8 text-[#0066FF]/30 mb-6" />
                            <p className="text-white/75 text-base leading-relaxed">
                                “{r.quote}”
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center font-display font-bold text-white text-sm">
                                    {r.avatar}
                                </div>
                                <div>
                                    <div className="font-display font-semibold text-white text-sm">
                                        {r.name}
                                    </div>
                                    <div className="text-xs text-white/40">
                                        {r.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

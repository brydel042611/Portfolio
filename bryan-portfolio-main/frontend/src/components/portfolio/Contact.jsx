import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/api";

const EMAIL = "bryandelgado.web.design@gmail.com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const onChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = (e) => {
  e.preventDefault();

  if (!form.email || !form.message) {
    toast.error("Please fill in your email and message.");
    return;
  }

  const subject = encodeURIComponent(`New website inquiry from ${form.name || "Someone"}`);
  const body = encodeURIComponent(
    `Name: ${form.name || "Not provided"}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  );

  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
};

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32 bg-[#080808] overflow-hidden"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-[#0066FF]/10 blur-[140px]" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left */}
                <div className="lg:col-span-5">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs uppercase tracking-[0.3em] text-[#0066FF] mb-4"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display font-black tracking-tighter text-white text-4xl md:text-5xl lg:text-6xl leading-[1.02]"
                        data-testid="contact-heading"
                    >
                        Let’s work
                        <br />
                        <span className="text-white/40">together.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 text-white/55 leading-relaxed text-base max-w-md"
                    >
                        Interested in modern websites, ecommerce concepts, or
                        creative digital work? Let’s connect.
                    </motion.p>

                    <a
                        href={`mailto:${EMAIL}`}
                        data-testid="contact-email-link"
                        className="mt-10 inline-flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#0066FF]/30 transition-all group max-w-md"
                    >
                        <span className="w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-[#7aa6ff]" />
                        </span>
                        <span className="flex-1 min-w-0">
                            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
                                Email
                            </span>
                            <span className="block font-display font-semibold text-white text-sm md:text-base truncate">
                                {EMAIL}
                            </span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </a>
                </div>

                {/* Right form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onSubmit={onSubmit}
                    data-testid="contact-form"
                    className="lg:col-span-7 p-7 md:p-10 rounded-3xl border border-white/5 bg-[#0f0f0f]/80 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-[10px] uppercase tracking-[0.2em] text-white/50"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                placeholder="Your name"
                                data-testid="contact-input-name"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#0066FF]/50 focus:ring-2 focus:ring-[#0066FF]/15 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-[10px] uppercase tracking-[0.2em] text-white/50"
                                htmlFor="email"
                            >
                                Email *
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={onChange}
                                placeholder="you@studio.com"
                                data-testid="contact-input-email"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#0066FF]/50 focus:ring-2 focus:ring-[#0066FF]/15 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-5">
                        <label
                            className="text-[10px] uppercase tracking-[0.2em] text-white/50"
                            htmlFor="message"
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={form.message}
                            onChange={onChange}
                            placeholder="Tell me about your project, goals and timeline…"
                            data-testid="contact-input-message"
                            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#0066FF]/50 focus:ring-2 focus:ring-[#0066FF]/15 transition-all resize-none"
                        />
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-xs text-white/40">
                            I usually reply within 24 hours.
                        </p>
                        <button
                            type="submit"
                            disabled={submitting}
                            data-testid="contact-submit-btn"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0066FF] text-white text-sm font-medium hover:shadow-[0_0_28px_rgba(0,102,255,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}

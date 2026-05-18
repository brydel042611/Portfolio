import { Instagram, Twitter, Linkedin, Github, Dribbble, ArrowUpRight } from "lucide-react";

const socials = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Dribbble", icon: Dribbble, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
];

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid="footer"
            className="relative pt-20 pb-10 border-t border-white/5 bg-[#080808] overflow-hidden"
        >
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#0066FF]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Top — giant name */}
                <div className="text-center mb-16">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                        Designer · Creator
                    </div>
                    <h2 className="font-display font-black tracking-tighter text-white text-[clamp(3rem,12vw,11rem)] leading-[0.85]">
                        Bryan
                        <br />
                        <span className="text-white/20">Delgado</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
                    <div className="md:col-span-5">
                        <div className="font-display font-bold text-white text-lg">
                            Let’s create something premium.
                        </div>
                        <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-sm">
                            Available for select projects and creative
                            collaborations. Reach out and let’s talk details.
                        </p>
                        <a
                            href="#contact"
                            data-testid="footer-cta"
                            className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-[#7aa6ff] transition-colors"
                        >
                            Start a project
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="md:col-span-3">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Navigation
                        </div>
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Elsewhere
                        </div>
<div className="hidden">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        onClick={(e) => e.preventDefault()}
                                        aria-label={s.name}
                                        data-testid={`footer-social-${s.name.toLowerCase()}`}
                                        className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#0066FF]/40 hover:bg-[#0066FF]/10 transition-all"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="mt-6 text-xs text-white/40">
                            bryandelgado.web.design@gmail.com
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
                    <div>© {year} Bryan Delgado. All rights reserved.</div>
                    <div className="flex items-center gap-4">
                        <span>Designed & built with intention.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

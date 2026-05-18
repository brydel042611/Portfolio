import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href) => {
        setOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-black/60 border-b border-white/5"
                    : "bg-transparent"
            }`}
            data-testid="navbar"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleNav("#home")}
                    className="flex items-center gap-3 group"
                    data-testid="navbar-logo"
                >
                    <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#0066FF] to-[#001a4d] flex items-center justify-center">
                        <span className="font-display font-black text-white text-sm">
                            BD
                        </span>
                        <div className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-[#0066FF]/40 transition-all" />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                        <span className="font-display font-semibold text-white text-sm tracking-tight">
                            Bryan Delgado
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                            Web · Design
                        </span>
                    </div>
                </button>

                {/* Desktop Links */}
                <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/5">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleNav(l.href)}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="relative px-5 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/[0.04]"
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                {/* Right: Contact button & mobile toggle */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleNav("#contact")}
                        data-testid="navbar-contact-btn"
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0066FF] rounded-full hover:shadow-[0_0_24px_rgba(0,102,255,0.45)] transition-all duration-300 group"
                    >
                        Contact Me
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white"
                        aria-label="Toggle menu"
                        data-testid="navbar-mobile-toggle"
                    >
                        {open ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden backdrop-blur-xl bg-black/85 border-t border-white/5"
                        data-testid="navbar-mobile-menu"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
                            {links.map((l) => (
                                <button
                                    key={l.href}
                                    onClick={() => handleNav(l.href)}
                                    data-testid={`nav-link-mobile-${l.label.toLowerCase()}`}
                                    className="flex items-center justify-between text-left py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors font-display text-xl"
                                >
                                    <span>{l.label}</span>
                                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                                </button>
                            ))}
                            <button
                                onClick={() => handleNav("#contact")}
                                data-testid="navbar-contact-btn-mobile"
                                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#0066FF] rounded-full"
                            >
                                Contact Me <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

import { useEffect } from "react";
import "@/App.css";
import { Toaster } from "sonner";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Process from "@/components/portfolio/Process";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { api } from "@/lib/api";

function App() {
    useEffect(() => {
        // Warm up backend connection (non-blocking)
        api.get("/").catch(() => {});
    }, []);

    return (
        <div className="App" data-testid="portfolio-root">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <Toaster
                theme="dark"
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#141414",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#ffffff",
                    },
                }}
            />
        </div>
    );
}

export default App;

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBoy from "../hero/AnimatedBoy";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => setMounted(true), []);

  // 🔹 Active section on scroll
  useEffect(() => {
    const handler = () => {
      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!mounted) return null;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 w-full z-50
        backdrop-blur
        bg-background/80
        border-b border-border
      "
    >
      <AnimatedBoy />
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="font-bold text-xl tracking-tight text-amber-700">
          Amarjeet<span className="text-primary">.dev</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 ">
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;

            return (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="
                  relative text-sm font-medium
                  text-muted hover:text-foreground
                  transition
                  cursor-pointer
                  hover:text-amber-600
                "
              >
                {link.name}
                {/* underline */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 w-full
                    bg-primary transition-transform duration-300
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                    origin-left
                  `}
                />
              </button>
            );
          })}

          {/* Theme toggle */}
          <button
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              p-2 rounded-lg
              border border-border
              hover:bg-surface transition
              cursor-pointer
              hover:text-amber-600
            "
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              bg-background border-t border-border
              px-6 py-6 space-y-4
            "
          >
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="
                  block w-full text-left
                  text-muted hover:text-foreground
                  transition
                "
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="
                mt-4 w-full flex items-center gap-3
                border border-border rounded-xl px-4 py-3
                hover:bg-surface transition
              "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              Toggle Theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#areas", label: "Áreas" },
  { href: "#diferenciais", label: "Atuação" },
  { href: "#sobre", label: "Advogado" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logoImg} alt="Junio Souza - Advogado Trabalhista" className="h-10 sm:h-12 md:h-14 w-auto max-w-[190px] object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-gold text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-sm shadow-gold hover:scale-105 transition-transform"
        >
          Entrar em contato
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden shrink-0 text-primary text-2xl leading-none p-2 -mr-2"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-gold/20 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-wider text-foreground/80 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-5 py-2.5 bg-gradient-gold text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-sm"
          >
            Entrar em contato
          </a>
        </div>
      )}
    </header>
  );
}

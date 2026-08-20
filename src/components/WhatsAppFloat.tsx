import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5522999999999?text=" +
  encodeURIComponent("Olá, gostaria de entender melhor minha situação trabalhista empresarial");

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.18_145)] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-elegant group-hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" />
      </span>
    </a>
  );
}

export { WA_LINK };

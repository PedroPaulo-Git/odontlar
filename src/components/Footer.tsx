import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-brown to-taupe-dark text-peach py-10 px-4 flex flex-col items-center gap-4 mt-10 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-serif text-2xl font-bold tracking-tight drop-shadow select-none">Odont'lar</span>
        <span className="font-body text-base opacity-80">| Odontologia Domiciliar Humanizada</span>
      </div>
      <div className="flex gap-5 mt-2">
        <a href="https://instagram.com/odontlar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition">
          <Instagram size={26} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
          <Facebook size={26} />
        </a>
        <a href="mailto:contato@odontlar.com" aria-label="E-mail" className="hover:opacity-80 transition">
          <Mail size={26} />
        </a>
      </div>
      <div className="font-body text-xs opacity-70 mt-2 text-center">
        © {new Date().getFullYear()} Odont'lar. Todos os direitos reservados.
      </div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-peach/10 rounded-full blur-2xl opacity-60" />
    </footer>
  );
} 
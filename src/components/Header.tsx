"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialistas", label: "Especialistas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-peach/80 via-peach-light/80 to-sand/80 backdrop-blur-md border-b border-taupe/30 shadow-[0_2px_12px_0_rgba(174,159,138,0.06)] transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        <div className="flex flex-col items-start gap-1 select-none">
          <span className="font-serif text-3xl font-bold tracking-tight text-brown leading-none drop-shadow-sm">
            Odont<span className="text-taupe-dark">'lar</span>
          </span>
          <span className="font-body text-sm text-taupe-dark opacity-90 mt-1 ml-0.5">Odontologia Domiciliar Humanizada e Especializada</span>
        </div>
        <nav className="hidden md:flex gap-10 text-brown font-body font-medium text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-2 py-1 transition-colors duration-200 hover:text-taupe-dark after:content-[''] after:block after:h-[2px] after:bg-taupe-dark after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:rounded-full after:mt-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded text-brown hover:bg-taupe-light/30 transition shadow"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={30} />
        </button>
      </div>
      {/* Drawer Mobile */}
      {open && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-peach/90 via-peach-light/90 to-sand/90 backdrop-blur flex flex-col items-end p-6 md:hidden animate-fade-in-down">
          <button
            className="mb-8 p-2 rounded text-brown hover:bg-taupe-light/30 transition shadow"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col gap-8 w-full items-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brown font-body text-2xl font-semibold hover:text-taupe-dark transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 
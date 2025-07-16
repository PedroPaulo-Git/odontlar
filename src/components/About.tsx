import { HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-peach-light/60 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        {/* Coluna texto */}
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="bg-taupe/20 rounded-full p-3 mb-2 shadow">
            <HeartHandshake size={36} className="text-taupe-dark" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-1 drop-shadow-sm">Sobre a Odont'lar</h2>
          <p className="font-body text-lg text-brown/80 max-w-xl">
            A Odont'lar nasceu do desejo de levar atendimento odontológico humanizado, seguro e acolhedor para quem mais precisa, no conforto do lar. Nossa missão é proporcionar saúde bucal com empatia, profissionalismo e carinho, especialmente para idosos e pessoas com necessidades especiais.
          </p>
        </div>
        {/* Coluna imagem */}
        <div className="flex justify-center md:justify-end w-full">
          <img
            src="/about-image.jpg"
            alt="Equipe Odont'lar"
            className="rounded-2xl shadow-2xl border-4 border-peach-light object-cover max-w-xs md:max-w-md w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-sand/30 rounded-full blur-2xl opacity-60" />
    </section>
  );
} 
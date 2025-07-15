import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  "/galeria1.jpg",
  "/galeria2.jpg",
  "/galeria3.jpg",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-peach flex items-center justify-center px-4 border-y-2 border-sand/30 relative overflow-hidden" id="galeria">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        {/* Coluna texto */}
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="bg-taupe/20 rounded-full p-3 shadow mb-2">
            <ImageIcon size={32} className="text-taupe-dark" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown drop-shadow-sm">Galeria de Pacientes</h2>
          <p className="font-body text-lg text-brown/80 max-w-xl">
            Veja alguns dos nossos atendimentos e resultados. Cuidamos de cada sorriso com dedicação e carinho!
          </p>
        </div>
        {/* Coluna galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {galleryImages.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg bg-taupe/20 flex items-center justify-center aspect-square border border-taupe-light/40 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
              <Image
                src={src}
                alt={`Paciente ${i + 1}`}
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-sand/30 rounded-full blur-2xl opacity-60" />
    </section>
  );
} 
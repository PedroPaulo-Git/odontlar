"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { UserCheck, Medal, HeartPulse, PawPrint, Smile } from "lucide-react";

const specialists = [
  {
    name: "Drª. Brenda Maia",
    bio: "A Odont’lar surgiu do desejo de duas profissionais que se uniram para ofertar o melhor em odontologia domiciliar. Uma delas é @drabrendamaia, especialista em Ortodontia, Implantes e Odontologia Hospitalar. Mas ela é bem mais que isso. Inclusive, você sabia que ela é forrozeira de carteirinha? Venha conhecer um pouco mais da profissional que está pronta para cuidar do seu sorriso no conforto da sua casa!",
    image: "/brenda.jpg",
    icons: [<Medal key="implante" size={26} />, <Smile key="ortodontia" size={26} />, <HeartPulse key="hospitalar" size={26} />],
  },
  {
    name: "Drª. Renata Lindoso",
    bio: "Hoje vamos conhecer a outra idealizadora da Odont’lar, a @dra.renatalindoso, especialista em Odontologia hospitalar, com mais de 16 anos de vivência com PNE - Paciente com Necessidades Especiais e uma viajante de carteirinha. O destino que ela mais amou visitar a gente não sabe, mas sabemos que amar mesmo ela ama pets e odontologia. 😊 🐶🦷",
    image: "/renata.jpg",
    icons: [<HeartPulse key="hospitalar" size={26} />, <PawPrint key="pets" size={26} />],
  },
];

export default function Specialists() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % specialists.length);
  const prev = () => setIndex((i) => (i - 1 + specialists.length) % specialists.length);
  const spec = specialists[index];

  return (
    <section id="especialistas" className="py-20  flex items-center justify-center px-4 border-y-2 border-taupe/30 relative overflow-hidden">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Imagem grande */}
        <div className="flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full flex justify-center"
            >
              <Image
                src={spec.image}
                alt={spec.name}
                width={320}
                height={320}
                className="rounded-2xl object-cover border-4 border-sage shadow-2xl max-w-xs md:max-w-sm w-full h-auto"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Texto e detalhes */}
        <div className="flex-1 flex flex-col items-start gap-4 text-left">
          <span className="bg-taupe-dark/20 rounded-full p-3 shadow mb-2">
            <UserCheck size={36} className="text-taupe-dark" />
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-brown mb-1 drop-shadow-sm flex items-center gap-3">
            {spec.name}
            <span className="flex gap-2 ml-2">{spec.icons}</span>
          </h3>
          <p className="font-body text-brown/80 text-lg leading-relaxed mb-2">{spec.bio}</p>
          <div className="flex gap-4 mt-4">
            <button onClick={prev} aria-label="Anterior" className="bg-taupe/30 hover:bg-taupe-dark/30 text-brown rounded-full p-2 shadow transition">
              &#8592;
            </button>
            <button onClick={next} aria-label="Próxima" className="bg-taupe/30 hover:bg-taupe-dark/30 text-brown rounded-full p-2 shadow transition">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
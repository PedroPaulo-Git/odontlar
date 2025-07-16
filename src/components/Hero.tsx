"use client";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-12 md:py-20" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        {/* Coluna texto */}
        <div className="flex flex-col items-start gap-6 text-left">
          {/* <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-brown/10 rounded-full p-4 shadow mb-2">
            <Home size={44} className="text-brown" />
          </motion.span> */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brown drop-shadow-sm">
            Sorrisos cuidados no conforto do seu lar
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="font-body text-lg sm:text-xl text-brown/80 max-w-xl">
            Atendimento odontológico domiciliar humanizado, seguro e acolhedor para todas as idades. Profissionais experientes, tecnologia portátil e carinho em cada detalhe. Descubra uma nova experiência em saúde bucal, sem sair de casa.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            href="https://wa.me/5581982528366"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brown text-peach font-serif text-lg px-8 py-3 rounded-full shadow-lg hover:bg-taupe-dark transition-all duration-200 mt-2 ring-2 ring-brown/20 hover:ring-taupe-dark/40 focus:ring-4 focus:ring-sand/40 animate-pulse-slow"
          >
            Agende sua avaliação <ArrowRight size={22} />
          </motion.a>
        </div>
        {/* Coluna imagem */}
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="flex justify-center md:justify-end w-full">
          <img
            src="/hero.jpg"
            alt="Odontologia Profissional em Casa"
            className="object-cover max-w-xs md:max-w-md w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
      {/* Gradiente decorativo sutil */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-peach-muted rounded-full blur-3xl opacity-80 pointer-events-none select-none" />
    </section>
  );
} 
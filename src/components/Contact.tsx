import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-sage/30 flex items-center justify-center px-4  relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        {/* Coluna texto */}
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="bg-taupe/20 rounded-full p-3 shadow mb-2">
            <MapPin size={32} className="text-taupe-dark" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-1 drop-shadow-sm">Contato & Localização</h2>
          <p className="font-body text-lg text-brown/80 max-w-xl">Atendemos em <b>Caruaru-PE e região</b> no conforto da sua casa 🏡</p>
          <a
            href="https://wa.me/5581982528366"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brown text-peach font-serif text-lg px-7 py-3 rounded-full shadow-lg hover:bg-taupe-dark transition-all duration-200 mt-2"
          >
            <Phone size={22} /> WhatsApp: (81) 98252-8366
          </a>
        </div>
        {/* Coluna mapa */}
        <div className="flex justify-center md:justify-end w-full">
          <iframe
            title="Mapa Odont'lar Caruaru"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.073964479836!2d-35.972833!3d-8.2845501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98a1e7e2e2e2b%3A0x1e7e2e2e2e2e2e2e!2sCaruaru%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="260"
            style={{ border: 0, borderRadius: '16px', minWidth: '220px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-sand/30 rounded-full blur-2xl opacity-60" />
    </section>
  );
} 
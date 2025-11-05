import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-sky-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-700 via-sky-600 to-teal-500 grid place-items-center text-white font-bold">RH</div>
          <span className="font-semibold text-sky-900 tracking-tight">Rumah Hama Care</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sky-900/80">
          <a href="#services" className="hover:text-sky-900 transition-colors">Layanan</a>
          <a href="#about" className="hover:text-sky-900 transition-colors">Tentang</a>
          <a href="#contact" className="hover:text-sky-900 transition-colors">Kontak</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-700 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400">
          <Phone className="h-4 w-4" />
          Hubungi Kami
        </a>
      </nav>
    </header>
  );
}

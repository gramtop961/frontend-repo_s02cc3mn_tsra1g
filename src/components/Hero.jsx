import { Shield, Bug, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-sky-700 to-teal-600" />
      <div className="absolute -top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sky-50 ring-1 ring-white/20 mb-5">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs">Bersih, Aman, dan Terpercaya</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Solusi Pengendalian Hama Profesional
              <span className="block text-teal-200">untuk Rumah & Bisnis Anda</span>
            </h1>
            <p className="mt-6 text-lg text-sky-50/90 max-w-2xl">
              Rumah Hama Care melindungi properti Anda dari serangga, tikus, dan hama lainnya dengan metode yang aman, ramah lingkungan, dan efektif.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-sky-900 px-6 py-3 font-semibold shadow hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-white/60">
                Jadwalkan Inspeksi
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-sky-800/60 text-white px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-sky-800/80 focus:outline-none focus:ring-2 focus:ring-white/40">
                Layanan Kami
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sky-50/90">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-200" />
                <span>Teknisi Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2">
                <Bug className="h-5 w-5 text-teal-200" />
                <span>Metode Ramah Lingkungan</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/10 ring-1 ring-white/20 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                alt="Teknisi pengendalian hama sedang melakukan inspeksi di rumah"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 w-56">
              <p className="text-sm font-semibold text-sky-900">Respon Cepat 24/7</p>
              <p className="text-xs text-sky-700/80">Tim siap membantu kapan pun dibutuhkan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

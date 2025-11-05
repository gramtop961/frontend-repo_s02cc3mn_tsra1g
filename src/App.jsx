import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-sky-100">
          <img
            src="https://images.unsplash.com/photo-1582719478250-5cbe9b3b87d9?q=80&w=2070&auto=format&fit=crop"
            alt="Teknisi melakukan penyemprotan pengendalian hama"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sky-900">Tentang Rumah Hama Care</h2>
          <p className="mt-4 text-sky-700/80">
            Kami adalah tim profesional pengendalian hama dengan pendekatan modern dan ramah lingkungan. Misi kami adalah memberikan rasa aman dan nyaman dengan layanan yang efektif, cepat, dan transparan.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sky-900">
            <li className="rounded-xl bg-white border border-sky-100 p-4 shadow-sm">Garansi Layanan</li>
            <li className="rounded-xl bg-white border border-sky-100 p-4 shadow-sm">Inspeksi Menyeluruh</li>
            <li className="rounded-xl bg-white border border-sky-100 p-4 shadow-sm">Bahan Aman Bersertifikat</li>
            <li className="rounded-xl bg-white border border-sky-100 p-4 shadow-sm">Harga Transparan</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-sky-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sky-700/80">© {new Date().getFullYear()} Rumah Hama Care. All rights reserved.</p>
          <div className="text-sm text-sky-700/80">Warna: biru laut tua, biru muda, putih, dan hijau kebiruan.</div>
        </div>
      </footer>
    </div>
  );
}

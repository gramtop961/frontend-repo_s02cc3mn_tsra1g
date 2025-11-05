import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Permintaan Inspeksi - Rumah Hama Care");
    const body = encodeURIComponent(
      `Nama: ${form.name}\nTelepon: ${form.phone}\nAlamat: ${form.address}\n\nPesan:\n${form.message}`
    );
    window.location.href = `mailto:info@rumahhamacare.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sky-900">Hubungi Kami</h2>
            <p className="mt-3 text-sky-700/80">
              Tim kami siap membantu Anda menemukan solusi pengendalian hama terbaik. Hubungi untuk konsultasi gratis dan jadwal inspeksi.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sky-900">
                <Phone className="h-5 w-5 text-teal-600" />
                <a href="tel:+620000000000" className="hover:underline">+62 000-0000-000</a>
              </div>
              <div className="flex items-center gap-3 text-sky-900">
                <Mail className="h-5 w-5 text-teal-600" />
                <a href="mailto:info@rumahhamacare.com" className="hover:underline">info@rumahhamacare.com</a>
              </div>
              <div className="flex items-center gap-3 text-sky-900">
                <MapPin className="h-5 w-5 text-teal-600" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sky-900">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border-sky-200 focus:border-teal-500 focus:ring-teal-500 bg-white/70"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-900">Telepon/WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border-sky-200 focus:border-teal-500 focus:ring-teal-500 bg-white/70"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-900">Alamat</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border-sky-200 focus:border-teal-500 focus:ring-teal-500 bg-white/70"
                  placeholder="Nama jalan, area, kota"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sky-900">Pesan</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-xl border-sky-200 focus:border-teal-500 focus:ring-teal-500 bg-white/70"
                  placeholder="Ceritakan masalah Anda"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-xl bg-gradient-to-r from-sky-700 to-teal-600 text-white px-6 py-3 font-semibold shadow hover:from-sky-800 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Kirim Permintaan
              </button>
              <p className="text-xs text-sky-700/70">Dengan mengirimkan formulir ini, Anda menyetujui kami menghubungi Anda untuk konsultasi.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

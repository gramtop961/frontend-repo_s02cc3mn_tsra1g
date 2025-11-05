import { Bug, Shield, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Pembasmian Serangga",
    description:
      "Solusi tuntas untuk kecoa, semut, nyamuk, rayap, dan hama merayap lainnya dengan bahan yang aman dan efektif.",
    icon: Bug,
  },
  {
    title: "Pengendalian Tikus",
    description:
      "Strategi pencegahan dan eradikasi tikus yang menyeluruh agar properti Anda tetap higienis dan aman.",
    icon: Shield,
  },
  {
    title: "Disinfeksi & Sanitasi",
    description:
      "Layanan fogging dan disinfeksi area untuk mengurangi risiko penyakit dan menjaga kebersihan ruang.",
    icon: Sparkles,
  },
  {
    title: "Perawatan Berkala",
    description:
      "Program monitoring rutin untuk mencegah serangan ulang dan menjaga lingkungan bebas hama.",
    icon: CheckCircle2,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sky-900">
            Layanan Unggulan Kami
          </h2>
          <p className="mt-3 text-sky-700/80">
            Kami merancang layanan yang fleksibel untuk kebutuhan rumah tangga, perkantoran, restoran, hingga fasilitas industri.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-700 to-teal-500 text-white grid place-items-center shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-sky-900 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-sky-700/80">{description}</p>
              <div className="mt-4 text-sm font-semibold text-sky-700 group-hover:text-sky-900">Pelajari lebih lanjut →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

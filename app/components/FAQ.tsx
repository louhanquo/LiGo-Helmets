import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type Lang = "en" | "id" | "de";

type QA = { q: string; a: string };

const content: Record<Lang, {
  badge: string;
  heading: string;
  description: string;
  cta: string;
  faqs: QA[];
}> = {
  en: {
    badge: "FAQ",
    heading: "Frequently Asked Questions",
    description:
      "Find answers to your questions about Ligo and how our helmets can help simplify your riding journey.",
    cta: "Get Started",
    faqs: [
      {
        q: "How does the folding mechanism work?",
        a: "A single hinge collapses the LiGo helmet to half its size in one fluid motion \u2014 no buttons, no tools, just one fold and it disappears into your bag.",
      },
      {
        q: "How many folds it can do in it's lifetime?",
        a: "Every LiGo helmet is tested to over 10,000 fold cycles, far beyond what a daily commuter needs across years of use.",
      },
      {
        q: "What kind of varieties does LiGo offer?",
        a: "LiGo comes in three sizes (S, M, L) and a curated palette of matte and gloss finishes so you can match your everyday style.",
      },
      {
        q: "Is there any first purchase discounts?",
        a: "Yes \u2014 first-time customers get 10% off their first LiGo helmet plus free shipping when they sign up to our newsletter.",
      },
    ],
  },
  id: {
    badge: "FAQ",
    heading: "Pertanyaan Yang Sering Diajukan",
    description:
      "Temukan jawaban atas pertanyaan Anda tentang Ligo dan bagaimana helm kami mempermudah perjalanan berkendara Anda.",
    cta: "Mulai Sekarang",
    faqs: [
      {
        q: "Bagaimana cara kerja mekanisme lipatnya?",
        a: "Satu engsel melipat helm LiGo menjadi separuh ukuran dalam satu gerakan halus \u2014 tanpa tombol, tanpa alat, cukup satu lipatan dan ia masuk ke dalam tas.",
      },
      {
        q: "Berapa kali helm bisa dilipat sepanjang masa pakainya?",
        a: "Setiap helm LiGo diuji lebih dari 10.000 siklus lipatan, jauh di atas kebutuhan komuter harian selama bertahun-tahun.",
      },
      {
        q: "Varian apa saja yang ditawarkan LiGo?",
        a: "LiGo tersedia dalam tiga ukuran (S, M, L) dengan pilihan warna matte dan gloss yang dikurasi agar cocok dengan gayamu sehari-hari.",
      },
      {
        q: "Apakah ada diskon untuk pembelian pertama?",
        a: "Ya \u2014 pelanggan baru mendapatkan diskon 10% untuk pembelian pertama mereka, plus pengiriman gratis dengan mendaftar newsletter kami.",
      },
    ],
  },
  de: {
    badge: "FAQ",
    heading: "H\u00E4ufig Gestellte Fragen",
    description:
      "Hier findest du Antworten auf Fragen zu Ligo und wie unsere Helme deinen Alltag auf dem Bike einfacher machen.",
    cta: "Loslegen",
    faqs: [
      {
        q: "Wie funktioniert der Faltmechanismus?",
        a: "Ein einziges Gelenk faltet den LiGo Helm in einer flie\u00DFenden Bewegung auf die H\u00E4lfte seiner Gr\u00F6\u00DFe \u2014 keine Kn\u00F6pfe, keine Werkzeuge, nur eine Faltung.",
      },
      {
        q: "Wie oft kann der Helm w\u00E4hrend seiner Lebensdauer gefaltet werden?",
        a: "Jeder LiGo Helm wird auf \u00FCber 10.000 Faltzyklen getestet \u2014 weit mehr, als ein t\u00E4glicher Pendler in Jahren ben\u00F6tigt.",
      },
      {
        q: "Welche Varianten bietet LiGo an?",
        a: "LiGo gibt es in drei Gr\u00F6\u00DFen (S, M, L) und einer kuratierten Auswahl an Matt- und Glanz-Finishes, passend zu deinem Alltagsstil.",
      },
      {
        q: "Gibt es einen Rabatt auf die erste Bestellung?",
        a: "Ja \u2014 Neukunden erhalten 10% Rabatt auf ihren ersten LiGo Helm plus kostenlosen Versand bei Anmeldung zu unserem Newsletter.",
      },
    ],
  },
};

export default function FAQ({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#F1F1F1] py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-8 lg:grid-cols-2 lg:gap-20">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <span className="inline-flex w-fit items-center justify-center rounded-2xl bg-[#1B763D] px-7 py-4 text-2xl font-bold text-white">
            {t.badge}
          </span>
          <h2 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl lg:text-[64px]">
            {t.heading}
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-600">
            {t.description}
          </p>
          <button
            type="button"
            className="mt-10 w-fit rounded-xl bg-[#1B763D] px-9 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#155f30] hover:shadow-xl active:scale-[0.98]"
          >
            {t.cta}
          </button>
        </motion.div>

        {/* Right column - FAQ widgets */}
        <div className="flex flex-col gap-6">
          {t.faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left transition-colors hover:bg-neutral-50"
                >
                  <span className="text-lg font-bold text-neutral-900 sm:text-xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-[#1B763D] text-white" : "text-neutral-900"
                    }`}
                  >
                    <Plus className="h-6 w-6" strokeWidth={2.5} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-7 text-base leading-relaxed text-neutral-600 sm:text-[17px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

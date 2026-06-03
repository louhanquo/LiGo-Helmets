'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import riderAsset from '../assets/helmet-rider.svg';

type Lang = 'en' | 'id' | 'de';

interface LigoInsightsProps {
  lang: Lang;
}

const translations = {
  en: {
    badge: 'Insights',
    title: 'Smart and durable.',
    description:
      "LiGo's Segmented Fold-Tech reduces your helmet to half its size in seconds. A reinforced snap-lock clasp system is rated for thousands of cycles. With certified safety standards, we leave no room for compromises on protection.",
    stats: [
      { value: '2000', suffix: '+', label: 'Lifetime Folds' },
      { value: '250', suffix: '+', label: 'Varieties' },
      { value: '>50', suffix: '%', label: 'Smaller When Folded' },
    ],
  },

  id: {
    badge: 'Wawasan',
    title: 'Cerdas dan tahan lama.',
    description:
      'Teknologi Segmented Fold-Tech LiGo mengurangi ukuran helm hingga setengahnya dalam hitungan detik. Sistem pengunci snap-lock yang diperkuat telah diuji untuk ribuan kali penggunaan. Dengan standar keselamatan bersertifikat, perlindungan tetap menjadi prioritas utama.',
    stats: [
      { value: '2000', suffix: '+', label: 'Lipatan Seumur Hidup' },
      { value: '250', suffix: '+', label: 'Variasi' },
      { value: '>50', suffix: '%', label: 'Lebih Kecil Saat Dilipat' },
    ],
  },

  de: {
    badge: 'Einblicke',
    title: 'Intelligent und langlebig.',
    description:
      'Die Segmented Fold-Tech von LiGo reduziert die Größe des Helms in Sekunden auf die Hälfte. Das verstärkte Snap-Lock-System ist für Tausende von Zyklen ausgelegt. Mit zertifizierten Sicherheitsstandards gehen wir keine Kompromisse beim Schutz ein.',
    stats: [
      { value: '2000', suffix: '+', label: 'Faltungen Insgesamt' },
      { value: '250', suffix: '+', label: 'Varianten' },
      { value: '>50', suffix: '%', label: 'Kleiner Zusammengefaltet' },
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.05 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function LigoInsights({ lang }: LigoInsightsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  const t = translations[lang];

  return (
    <section ref={ref} className="bg-[#F1F1F1] py-24 lg:py-32">
      <div className="mx-auto mt-[130px] grid max-w-[1400px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.96 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[40px] shadow-2xl"
        >
          <img
            src={(riderAsset as any).src ?? (riderAsset as unknown as string)}
            alt="Cyclist wearing the LIGO helmet"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={0}
            className="inline-block rounded-md bg-[#1B763D] px-6 py-3 text-base font-semibold text-white"
          >
            {t.badge}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={1}
            className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl"
          >
            {t.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={2}
            className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600"
          >
            {t.description}
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-10 sm:gap-14">
            {t.stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                custom={3 + i}
              >
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                    {s.value}
                  </span>
                  <span className="ml-1 text-4xl font-extrabold text-[#7BD20A] sm:text-5xl">
                    {s.suffix}
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
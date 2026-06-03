'use client';

import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef } from 'react';
import foldedAsset from '../assets/helmet-folded.svg';

type Lang = 'en' | 'id' | 'de';

interface LigoAdvantagesProps {
  lang: Lang;
}

const translations = {
  en: {
    badge: 'Advantages & Benefits',
    title: 'Why LiGo?',
    description:
      'LiGo was designed so that staying safe never gets in the way of your day. Fold it, store it, and forget about it until your next ride.',
    button: 'Try LiGo Today',
    benefits: [
      'Folds to half its size – never leave your helmet behind again',
      'Always your own – no more borrowing, every ride',
      'Sleek and Stylish',
    ],
  },

  id: {
    badge: 'Keunggulan & Manfaat',
    title: 'Mengapa LiGo?',
    description:
      'LiGo dirancang agar keselamatan tidak pernah menghalangi aktivitas Anda. Lipat, simpan, dan gunakan kembali kapan pun Anda membutuhkannya.',
    button: 'Coba LiGo Sekarang',
    benefits: [
      'Dapat dilipat hingga setengah ukuran – tidak perlu meninggalkan helm lagi',
      'Selalu milik Anda – tidak perlu meminjam helm orang lain',
      'Modern dan bergaya',
    ],
  },

  de: {
    badge: 'Vorteile',
    title: 'Warum LiGo?',
    description:
      'LiGo wurde entwickelt, damit Sicherheit niemals Ihrem Alltag im Weg steht. Zusammenfalten, verstauen und bis zur nächsten Fahrt vergessen.',
    button: 'LiGo Jetzt Testen',
    benefits: [
      'Lässt sich auf die Hälfte seiner Größe zusammenfalten',
      'Immer Ihr eigener Helm – kein Ausleihen mehr',
      'Modern und stilvoll',
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

export default function LigoAdvantages({ lang }: LigoAdvantagesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  const t = translations[lang];

  return (
    <section ref={ref} className="bg-[#F1F1F1] py-24 lg:py-32">
      <div className="mx-auto mt-[70px] grid max-w-[1400px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-2 lg:gap-20">
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
            className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl"
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

          <ul className="mt-8 space-y-4">
            {t.benefits.map((benefit, i) => (
              <motion.li
                key={benefit}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                custom={3 + i}
                className="flex items-start gap-3 text-[15px] font-semibold text-neutral-900"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-[5px] bg-[#1B763D] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>

                {benefit}
              </motion.li>
            ))}
          </ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={3 + t.benefits.length}
            className="mt-10"
          >
            <button className="rounded-md bg-white px-7 py-3.5 text-base font-semibold text-[#1B763D] shadow-sm transition-all hover:shadow-md active:translate-y-px">
              {t.button}
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[40px] shadow-2xl"
        >
          <img
            src={(foldedAsset as any).src ?? (foldedAsset as unknown as string)}
            alt="Helmet folded flat being placed into a bag"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
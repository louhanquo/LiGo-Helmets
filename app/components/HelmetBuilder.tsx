"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Check,
  ShoppingBag,
  ArrowLeft,
  Search,
  User,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import ThankYou from "./ThankYou";

type HelmetColor = "black" | "white" | "blue";
type Lang = "en" | "id" | "de";

const helmets = [
  { id: "black" as const, name: "Midnight Black", tagline: "Bold. Stealth. Iconic.", swatch: "#0a0a0a", image: "/helmets/helmet-black.webp" },
  { id: "white" as const, name: "Arctic White", tagline: "Clean. Minimal. Timeless.", swatch: "#f3f1ec", image: "/helmets/helmet-white.webp" },
  { id: "blue" as const, name: "Abyss Blue", tagline: "Deep. Calm. Confident.", swatch: "#1f4a5a", image: "/helmets/helmet-blue.webp" },
];

const navLabels: Record<Lang, { items: string[]; langLabel: string }> = {
  en: { items: ["About us", "For Companies", "Solutions", "Pricing", "Blog"], langLabel: "English" },
  id: { items: ["Tentang kami", "Untuk Perusahaan", "Solusi", "Harga", "Blog"], langLabel: "Indonesia" },
  de: { items: ["Über uns", "Für Unternehmen", "Lösungen", "Preise", "Blog"], langLabel: "Deutsch" },
};

const langOptions: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "id", label: "Indonesia" },
  { code: "de", label: "Deutsch" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HelmetBuilder() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");
  const [selected, setSelected] = useState<HelmetColor>("black");
  const [ordered, setOrdered] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = navLabels[lang];
  const active = helmets.find((h) => h.id === selected)!;

  if (ordered) {
    return (
      <ThankYou
        onHome={() => router.push("/")}
        helmetName={active.name}
      />
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F1F1F1] text-neutral-900">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 left-0 w-[50%]"
      >
        <div className="h-full w-full bg-[#1B763D]" style={{ clipPath: "polygon(0 0, 100% 0, 62% 100%, 0 100%)" }} />
      </motion.div>

      {/* Floating pill nav */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-1/2 top-4 z-50 flex w-[min(1400px,calc(100%-2rem))] -translate-x-1/2 items-center justify-between gap-6 rounded-full border border-white/60 bg-white/70 px-6 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:px-8"
      >
        <button onClick={() => router.push("/")} className="flex items-center" aria-label="LIGO">
          <span className="text-2xl font-extrabold tracking-tight text-[#1B763D]">LIGO</span>
        </button>

        <nav className="hidden items-center gap-12 text-[15px] font-semibold text-neutral-900 lg:flex">
          {t.items.map((label) => (
            <a key={label} href="#" className="transition-colors hover:text-[#1B763D]">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-neutral-700">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 text-[15px] font-medium hover:text-[#1B763D]"
            >
              {t.langLabel}
              <ChevronDown className={`h-4 w-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-2 w-36 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg"
                >
                  {langOptions.map((opt) => (
                    <li key={opt.code}>
                      <button
                        onClick={() => {
                          setLang(opt.code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm hover:bg-neutral-50 ${
                          lang === opt.code ? "text-[#1B763D] font-semibold" : "text-neutral-700"
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <button aria-label="Search" className="hover:text-[#1B763D]"><Search className="h-5 w-5" /></button>
          <button aria-label="Account" className="hover:text-[#1B763D]"><User className="h-5 w-5" /></button>
          <button aria-label="Cart" className="hover:text-[#1B763D]"><ShoppingCart className="h-5 w-5" /></button>
        </div>
      </motion.header>

      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        onClick={() => router.push("/")}
        className="absolute left-8 top-24 z-20 flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </motion.button>

      <main className="relative z-10 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-12 px-8 pb-24 pt-32 lg:grid-cols-2 lg:pt-40">
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 4 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[520px] overflow-hidden rounded-[40px] bg-white/10 shadow-2xl backdrop-blur-sm"
            >
              <img src={active.image} alt={active.name} className="h-auto w-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="text-2xl font-semibold text-[#1B763D]">
            Build Your Helmet
          </motion.p>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1} className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Pick a <span className="text-[#1B763D]">color.</span>
            <br /> Make it yours.
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">Selected</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">{active.name}</p>
                <p className="text-base text-neutral-600">{active.tagline}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-8 flex items-center gap-5">
            {helmets.map((h) => {
              const isActive = h.id === selected;
              return (
                <button key={h.id} onClick={() => setSelected(h.id)} aria-label={h.name} className="group relative flex flex-col items-center gap-2">
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all ${
                      isActive ? "border-[#1B763D] ring-4 ring-[#1B763D]/20" : "border-neutral-300 hover:border-neutral-500"
                    }`}
                    style={{ backgroundColor: h.swatch }}
                  >
                    {isActive && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="rounded-full bg-white/90 p-0.5">
                        <Check className="h-3.5 w-3.5 text-[#1B763D]" strokeWidth={3} />
                      </motion.span>
                    )}
                  </motion.span>
                  <span className={`text-xs font-semibold capitalize ${isActive ? "text-[#1B763D]" : "text-neutral-500"}`}>{h.id}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-12">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              onClick={() => setOrdered(true)}
              className="inline-flex items-center gap-3 rounded-md bg-[#1B763D] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#155f30] hover:shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

    'use client'
    import { useEffect, useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";
    import logoAsset from "../assets/ligo-logo.svg";
    import helmetAsset from "../assets/helmet.svg";
    import { useRouter } from "next/navigation";

    type Lang = "en" | "id" | "de";

    const translations: Record<Lang, {
    nav: { about: string; companies: string; solutions: string; pricing: string; blog: string };
    eyebrow: string;
    headline: [string, string];
    slides: [string, string];
    cta: string;
    langLabel: string;
    }> = {
    en: {
        nav: { about: "About us", companies: "For Companies", solutions: "Solutions", pricing: "Pricing", blog: "Blog" },
        eyebrow: "Safety Made Simple",
        headline: ["One Fold.", "That's All It Takes."],
        slides: [
        "It goes wherever you go, and disappears when you get there.",
        "One less thing standing between you and your day.",
        ],
        cta: "Get Started",
        langLabel: "English",
    },
    id: {
        nav: { about: "Tentang kami", companies: "Untuk Perusahaan", solutions: "Solusi", pricing: "Harga", blog: "Blog" },
        eyebrow: "Keamanan Dibuat Sederhana",
        headline: ["Satu Lipatan.", "Itu Saja yang Dibutuhkan."],
        slides: [
        "Ia ikut ke mana pun kamu pergi, dan menghilang saat kamu tiba.",
        "Satu hal lagi yang tidak menghalangi harimu.",
        ],
        cta: "Mulai Sekarang",
        langLabel: "Indonesia",
    },
    de: {
        nav: { about: "Über uns", companies: "Für Unternehmen", solutions: "Lösungen", pricing: "Preise", blog: "Blog" },
        eyebrow: "Sicherheit ganz einfach",
        headline: ["Einmal falten.", "Mehr braucht es nicht."],
        slides: [
        "Er begleitet dich überall hin und verschwindet, sobald du ankommst.",
        "Eine Sache weniger zwischen dir und deinem Tag.",
        ],
        cta: "Loslegen",
        langLabel: "Deutsch",
    },
    };

    const langOptions: { code: Lang; label: string }[] = [
    { code: "en", label: "English" },
    { code: "id", label: "Indonesia" },
    { code: "de", label: "Deutsch" },
    ];

    type HeroProps = {
    lang: Lang;
    setLang: React.Dispatch<React.SetStateAction<Lang>>;
    };
    export default function LigoHero({lang, setLang}:HeroProps) {;
    const [slideIdx, setSlideIdx] = useState(0);
    const [langOpen, setLangOpen] = useState(false);
    const t = translations[lang];
    const router = useRouter();
    useEffect(() => {
        const id = setInterval(() => setSlideIdx((i) => (i + 1) % t.slides.length), 3800);
        return () => clearInterval(id);
    }, [t.slides.length]);

    // reset slider when language changes
    useEffect(() => setSlideIdx(0), [lang]);

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
        }),
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#F1F1F1] text-neutral-900">
        {/* Green diagonal panel */}
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-y-0 right-0 w-[55%]"
        >
            <div
            className="h-full w-full bg-[#1B763D]"
            style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
        </motion.div>

        {/* Floating pill nav */}
        <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed left-1/2 top-4 z-50 flex w-[min(1400px,calc(100%-2rem))] -translate-x-1/2 items-center justify-between gap-6 rounded-full border border-white/60 bg-white/70 px-6 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:px-8"
        >
            <a href="#" className="flex items-center" aria-label="LIGO">
            <img src={logoAsset.src} alt="LIGO" className="h-9 w-auto" />
            </a>

            <nav className="hidden items-center gap-12 text-[15px] font-semibold text-neutral-900 lg:flex">
            {Object.values(t.nav).map((label) => (
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
                aria-haspopup="listbox"
                aria-expanded={langOpen}
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
                    role="listbox"
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
            <button aria-label="Search" className="hover:text-[#1B763D]">
                <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="hover:text-[#1B763D]">
                <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="hover:text-[#1B763D]">
                <ShoppingCart className="h-5 w-5" />
            </button>
            </div>
        </motion.header>

        {/* Hero content */}
        <main className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-8 pb-24 pt-32 lg:grid-cols-2 lg:pt-40">
            <div>
            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
                className="text-2xl font-semibold text-[#1B763D]"
            >
                {t.eyebrow}
            </motion.p>

            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
                {t.headline[0]}{" "}
                <span className="text-[#1B763D]">{t.headline[1]}</span>
            </motion.h1>

            {/* Vertical text slider */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="relative mt-10 h-[88px] overflow-hidden sm:h-[80px]"
            >
                <AnimatePresence mode="wait">
                <motion.p
                    key={`${lang}-${slideIdx}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute inset-0 text-xl font-semibold leading-snug sm:text-2xl ${
                    slideIdx === 0 ? "text-neutral-900" : "text-neutral-00"
                    }`}
                >
                    {t.slides[slideIdx]}
                </motion.p>
                </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-12">
                <button onClick={() => router.push("/builder")} className="rounded-md bg-[#1B763D] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#155f30] hover:shadow-md active:translate-y-px">
                {t.cta}
                </button>
            </motion.div>
            </div>

            {/* Helmet image */}
            <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
            >
            <div className="overflow-hidden rounded-[40px] bg-neutral-200 shadow-2xl">
                <img src={helmetAsset.src} alt="Collapsible helmet folded into a bag" className="h-auto w-full object-cover" />
            </div>
            </motion.div>
        </main>
        </div>
    );
    }

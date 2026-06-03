import { motion } from "framer-motion";
import { Check, Home } from "lucide-react";

type Props = {
  onHome: () => void;
  helmetName: string;
};

export default function ThankYou({ onHome, helmetName }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F1F1F1] px-6 text-neutral-900">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute h-[140vmax] w-[140vmax] rounded-full bg-[#1B763D]/5"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute h-[90vmax] w-[90vmax] rounded-full bg-[#1B763D]/10"
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.5 }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1B763D] shadow-xl shadow-[#1B763D]/30"
        >
          <Check className="h-12 w-12 text-white" strokeWidth={3} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Thank <span className="text-[#1B763D]">you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-4 max-w-md text-lg text-neutral-600"
        >
          Your <span className="font-semibold text-neutral-900">{helmetName}</span> helmet is on its way. We'll send a confirmation shortly.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 1 }}
          onClick={onHome}
          className="mt-12 inline-flex items-center gap-3 rounded-md bg-[#1B763D] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#155f30] hover:shadow-lg"
        >
          <Home className="h-5 w-5" />
          Back to Home
        </motion.button>
      </div>
    </div>
  );
}

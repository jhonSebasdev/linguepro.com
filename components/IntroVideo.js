"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function IntroVideo() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-brand-dark/88 px-5 pt-24 backdrop-blur-md sm:items-center sm:pt-0"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative grid w-full max-w-[620px] gap-4"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.45 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/18 bg-white shadow-2xl">
              <video
                className="aspect-video w-full bg-white object-contain"
                src="/intro.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => setVisible(false)}
              />
            </div>
            <motion.div
              className="rounded-2xl border border-white/14 bg-white/10 px-5 py-4 text-center text-white shadow-2xl backdrop-blur"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: [14, 0, -4, 0] }}
              transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
            >
              <p className="text-base font-black sm:text-lg">
                Bienvenido a la mejor plataforma de aprendizaje
              </p>
            </motion.div>
          </motion.div>
          <button
            type="button"
            className="focus-ring absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition hover:bg-brand-red active:scale-95"
            aria-label="Saltar intro"
            onClick={() => setVisible(false)}
          >
            <X size={21} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

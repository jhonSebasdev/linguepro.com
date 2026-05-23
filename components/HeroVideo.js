"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import principalImage from "../imagenes/principal.png";
import imageTwo from "../imagenes/2.png";
import imageThree from "../imagenes/3.png";
import imageFour from "../imagenes/4.png";

const slides = [
  { src: principalImage, alt: "LinguePro plataforma educativa" },
  { src: imageTwo, alt: "LinguePro aprendizaje online" },
  { src: imageThree, alt: "LinguePro clases y campus virtual" },
  { src: imageFour, alt: "LinguePro tecnología de aprendizaje" },
];

export default function HeroVideo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <div className="platform-card relative overflow-hidden p-2 sm:p-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-dark sm:aspect-[16/10]">
        {slides.map((slide, index) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className={`object-cover transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}

        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={goToPrevious}
          className="focus-ring absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-brand-red sm:left-3 sm:h-10 sm:w-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={goToNext}
          className="focus-ring absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-brand-red sm:right-3 sm:h-10 sm:w-10"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur sm:bottom-3">
          {slides.map((slide, index) => (
            <button
              key={slide.alt}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? "w-7 bg-brand-red" : "w-2.5 bg-white/55 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

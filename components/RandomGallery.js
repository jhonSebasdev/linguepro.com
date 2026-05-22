"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shuffle } from "lucide-react";
import SectionHeader from "./SectionHeader";

import imageOne from "../imagenes/3.jpeg";
import imageTwo from "../imagenes/4.jpeg";
import imageThree from "../imagenes/5.jpeg";
import imageFour from "../imagenes/6.jpeg";
import imageFive from "../imagenes/7.jpeg";
import imageSix from "../imagenes/8.jpeg";
import imageSeven from "../imagenes/WhatsApp Image 2026-05-12 at 2.25.21 PM.jpeg";
import imageEight from "../imagenes/WhatsApp Image 2026-05-18 at 1.09.43 PM.jpeg";
import imageNine from "../imagenes/WhatsApp Image 2026-05-18 at 1.09.44 PM.jpeg";

const galleryImages = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
];

function shuffleImages(images) {
  return [...images].sort(() => Math.random() - 0.5);
}

export default function RandomGallery() {
  const [images, setImages] = useState(galleryImages);

  useEffect(() => {
    const shuffleTimer = window.setTimeout(() => {
      setImages(shuffleImages(galleryImages));
    }, 0);

    return () => window.clearTimeout(shuffleTimer);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Galeria LinguePro"
          title="Momentos de aprendizaje que cambian en cada visita"
          description="Una seleccion visual de nuestra comunidad, actividades y espacios academicos."
        />

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-brand-ink shadow-sm transition hover:-translate-y-0.5 hover:border-brand-red/40 hover:text-brand-red hover:shadow-xl active:scale-95"
            onClick={() => setImages(shuffleImages(images))}
          >
            <Shuffle className="mr-2" size={17} />
            Mezclar fotos
          </button>
        </div>

        <div className="mt-10 grid auto-rows-[180px] gap-4 sm:auto-rows-[220px] md:grid-cols-4 lg:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              layout
              whileHover={{ y: -7, scale: 1.015 }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 24,
                delay: index * 0.035,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-black/8 bg-neutral-100 shadow-sm ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <Image
                src={image}
                alt="Actividad de LinguePro"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 hover:scale-105"
                placeholder="blur"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

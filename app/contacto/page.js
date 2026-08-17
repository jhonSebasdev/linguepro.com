import { Suspense } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contacto | LinguePro",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Suspense>
        <ContactSection />
      </Suspense>
    </main>
  );
}

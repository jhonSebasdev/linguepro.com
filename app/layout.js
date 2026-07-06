import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "LinguePro | Academia online",
  description:
    "Formacion online en idiomas, lengua de señas y habilidades profesionales con campus virtual Moodle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

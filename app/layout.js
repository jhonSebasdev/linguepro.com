import "./globals.css";

export const metadata = {
  title: "LinguePro | Academia online",
  description:
    "Formacion online en idiomas, lengua de senas y habilidades profesionales con campus virtual Moodle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

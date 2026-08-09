// app/layout.js
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Configuración de las 3 fuentes que usa el portfolio.
// "variable" define el nombre de la variable CSS que
// vamos a poder usar luego en globals.css / Tailwind.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

// Metadata: información que usa el navegador y los motores
// de búsqueda (título de pestaña, descripción para SEO).
export const metadata = {
  title: 'Andreé Robles — Backend Developer',
  description:
    'Portfolio de Andreé Antonio Robles Méndez, desarrollador backend.',
};

// RootLayout envuelve TODAS las páginas del sitio (aquí solo
// tenemos una, pero si agregaras más páginas, todas pasarían
// por aquí). Es el equivalente al <html>/<body> que ya conoces.
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
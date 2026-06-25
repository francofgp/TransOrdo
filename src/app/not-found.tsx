import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Página no encontrada — Transporte Ordoñes',
};

export default function NotFound() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-center bg-[var(--background-primary)] px-6 text-center">
      <span className="font-display text-[clamp(4rem,18vw,9rem)] leading-none text-[var(--brand)]">404</span>
      <h1 className="font-condensed-strong mt-4 text-2xl uppercase text-[var(--text-primary)]">
        Esta ruta no existe
      </h1>
      <p className="mt-3 max-w-sm text-[var(--text-secondary)]">
        La página que buscás no está disponible. Volvé al inicio para seguir.
      </p>
      <Link href="/" className="btn btn-primary btn-lg mt-8">
        Volver al inicio
      </Link>
    </main>
  );
}

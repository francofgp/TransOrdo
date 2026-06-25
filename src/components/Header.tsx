'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Logo from '@/components/Logo';
import { useTheme } from '@/context/ThemeContext';
import { ease } from '@/lib/motion';
import { waLink } from '@/lib/contact';
import {
  WhatsAppIcon,
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
} from '@/components/Icons';
import type { Content } from '@/lib/content';

interface HeaderProps {
  translations: Content['nav'];
  site: Content['site'];
}

export default function Header({ translations, site }: HeaderProps) {
  const { darkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // Header gains a stronger background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock scroll, focus management, Esc to close.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open]);

  const whatsapp = waLink(site.whatsappNumber, site.whatsappMessage);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled && !open
          ? 'border-[var(--border-color)] bg-[var(--header-bg)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-custom flex h-[68px] items-center gap-6">
        <a href="#top" className="mr-auto" aria-label="Transporte Ordoñes, inicio">
          <Logo size="1.35rem" onDark={!scrolled} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {translations.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={translations.toggleTheme}
            className={`grid h-10 w-10 place-items-center rounded-lg border transition-colors ${
              scrolled
                ? 'border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand)] hover:text-[var(--brand)]'
                : 'border-white/30 text-white hover:border-white/70'
            }`}
          >
            {mounted && !darkMode ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            {translations.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={translations.openMenu}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-lg border transition-colors lg:hidden ${
              scrolled
                ? 'border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand)] hover:text-[var(--brand)]'
                : 'border-white/30 text-white hover:border-white/70'
            }`}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[var(--background-primary)] lg:hidden"
          >
            <div className="container-custom flex h-[68px] w-full items-center">
              <Logo size="1.35rem" />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label={translations.closeMenu}
                className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="container-custom flex w-full flex-1 flex-col justify-center gap-1" aria-label="Móvil">
              {translations.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduced ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i, ease }}
                  className="font-display py-2 text-[clamp(2rem,9vw,3rem)] text-[var(--text-primary)] transition-colors hover:text-[var(--brand)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-custom grid w-full grid-cols-2 gap-3 pb-10 pt-6">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary btn-lg"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
              <a href={site.phoneHref} onClick={() => setOpen(false)} className="btn btn-secondary btn-lg">
                <PhoneIcon className="h-5 w-5" />
                Llamar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

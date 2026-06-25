import React from 'react';

interface IconProps {
  className?: string;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.3-1.95 1.34-.5.04-.97.22-3.27-.68-2.76-1.09-4.5-3.91-4.64-4.09-.13-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.98.94-2.25.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.59.83 2.04.9 2.19.07.15.12.32.02.5-.09.18-.14.3-.27.46-.13.16-.28.36-.4.48-.13.13-.27.28-.12.54.15.27.66 1.09 1.42 1.76.97.86 1.79 1.13 2.05 1.26.27.13.42.11.58-.07.16-.18.66-.77.84-1.04.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.27.13.44.2.51.31.07.11.07.64-.17 1.32z" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRightIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export const MenuIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const SunIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const MoonIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const MapPinIcon = ({ className }: IconProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

export const TruckIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M10 17h4V5H2v12h3" />
    <path d="M14 8h4l3 3v6h-2" />
    <path d="M10 17H9" />
    <circle cx="7.5" cy="17.5" r="1.6" />
    <circle cx="17.5" cy="17.5" r="1.6" />
  </svg>
);

export const PackageIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
  </svg>
);

export const WheatIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M2 22 16 8" />
    <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" />
    <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" />
    <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" />
    <path d="M20 2h2v2a3.5 3.5 0 0 1-3.5 3.5H17V6a4 4 0 0 1 3-3.87z" />
  </svg>
);

export const RouteIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </svg>
);

export const ShieldCheckIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const HandshakeIcon = ({ className }: IconProps) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

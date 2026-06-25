import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with proper precedence.
 * clsx for conditionals + tailwind-merge for dedupe.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

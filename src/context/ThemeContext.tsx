'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const defaultValue: ThemeContextType = {
  darkMode: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

function applyThemeClass(isDark: boolean) {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(isDark ? 'dark' : 'light');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      const isDark = stored === 'true';
      setDarkMode(isDark);
      applyThemeClass(isDark);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('darkMode', String(newValue));
      applyThemeClass(newValue);
      return newValue;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

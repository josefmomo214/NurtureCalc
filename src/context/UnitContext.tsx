"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UnitSystem = "metric" | "imperial";

interface UnitContextType {
  system: UnitSystem;
  setSystem: (system: UnitSystem) => void;
}

const UnitContext = createContext<UnitContextType | undefined>(undefined);

export function UnitProvider({ children }: { children: ReactNode }) {
  const [system, setSystemState] = useState<UnitSystem>("metric");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("nurturecalc_unit_system");
    if (saved === "metric" || saved === "imperial") {
      setSystemState(saved);
    }
  }, []);

  const setSystem = (newSystem: UnitSystem) => {
    setSystemState(newSystem);
    localStorage.setItem("nurturecalc_unit_system", newSystem);
  };

  return (
    <UnitContext.Provider value={{ system: mounted ? system : "metric", setSystem }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnitSystem() {
  const context = useContext(UnitContext);
  if (context === undefined) {
    throw new Error("useUnitSystem must be used within a UnitProvider");
  }
  return context;
}

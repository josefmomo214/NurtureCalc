"use client";

import { UnitProvider } from "@/context/UnitContext";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <UnitProvider>
      {children}
    </UnitProvider>
  );
}

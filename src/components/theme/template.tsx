"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider, ToggleTheme } from "./";

type TemplateProps = PropsWithChildren & {
  withToggle?: boolean;
};

export default function Template({
  children,
  withToggle = false,
}: TemplateProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {withToggle && <ToggleTheme />}
      {children}
    </ThemeProvider>
  );
}

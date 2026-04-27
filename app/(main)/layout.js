'use client';

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TooltipProvider>
        <main className="flex-grow">{children}</main>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </div>
  );
}

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import DropdownLanguageSwitcher from "../DropdownLanguageSwitcher.tsx";

interface MobileNavProps {
  currentLang: string;
  newsText: string;
  newsUrl: string;
  languages: Record<string, string>;
  languageUrls: Record<string, string>;
}

export default function MobileNav({
  currentLang,
  newsText,
  newsUrl,
  languages,
  languageUrls,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 p-6">
        <nav className="flex flex-col gap-4">
          <a
            href={newsUrl}
            className="text-sm text-gray-800 font-medium py-2 px-3 rounded hover:bg-gray-100 transition"
          >
            {newsText}
          </a>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
              Language
            </p>
            <DropdownLanguageSwitcher
              currentLang={currentLang}
              languages={languages}
              languageUrls={languageUrls}
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

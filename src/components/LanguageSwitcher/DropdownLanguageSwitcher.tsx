"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

interface DropdownLanguageSwitcherProps {
  currentLang: string;
  languages: Record<string, string>;
  languageUrls: Record<string, string>;
}

export default function DropdownLanguageSwitcher({
  currentLang,
  languages,
  languageUrls,
}: DropdownLanguageSwitcherProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLanguageName = languages[currentLang];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          "transition-colors duration-200",
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {currentLanguageName}
        <ChevronDown className="-mr-1 ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {Object.entries(languages).map(([langCode, langName]) => (
              <a
                key={langCode}
                href={languageUrls[langCode]}
                className={cn(
                  "block px-4 py-2 text-sm transition-colors duration-200",
                  currentLang === langCode
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                )}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {langName}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

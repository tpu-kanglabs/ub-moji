"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileNav() {
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
        <nav className="flex flex-col gap-4 text-sm text-gray-800 font-medium">
          <a href="/ub-moji/news">News</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

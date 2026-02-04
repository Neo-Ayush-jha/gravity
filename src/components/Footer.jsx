import React from "react";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-[#f5efe6] overflow-hidden">

      <h1 className="absolute inset-0 flex items-center justify-center text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold text-[#e6d7c2] opacity-70 select-none whitespace-nowrap">
        Native Sutra
      </h1>

      <div className="relative z-10 mx-auto px-6 sm:px-8 md:px-12 lg:px-14 py-8 md:py-4">

        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4 mb-16 sm:mb-24 md:mb-32">

          <div className="space-y-2 md:space-y-3 text-xs sm:text-sm text-[#6a6a6a]">
            <div className="flex items-center gap-2 md:gap-3">
              <Phone size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              <span>+91 99109 65878</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Mail size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              <span className="break-all">info@nativesutra.com</span>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4 text-[#6a6a6a]">
            <Instagram size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 cursor-pointer hover:text-black transition-colors" />
            <Facebook size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 cursor-pointer hover:text-black transition-colors" />
            <Youtube size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] sm:text-xs text-[#9a9a9a]">

          <p>©2025 NativeSutra. All rights Reserved</p>

          <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
            <span className="cursor-pointer hover:text-black transition-colors">
              Term & Conditions
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="cursor-pointer hover:text-black transition-colors">Privacy</span>
            <span className="hidden sm:inline">|</span>
            <span className="cursor-pointer hover:text-black transition-colors">Sitemap</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

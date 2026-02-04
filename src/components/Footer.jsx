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

      {/* WATERMARK TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center  text-[140px] md:text-[180px] font-bold text-[#e6d7c2] opacity-70 select-none">
        Native Sutra
      </h1>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto px-14 py-4">

        {/* TOP ROW */}
        <div className="flex justify-between items-start mb-32">

          {/* LEFT CONTACT */}
          <div className="space-y-3 text-sm text-[#6a6a6a]">
            <div className="flex items-center gap-3">
              <Phone size={14} />
              <span>+91 99109 65878</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} />
              <span>info@nativesutra.com</span>
            </div>
          </div>

          {/* RIGHT SOCIALS */}
          <div className="flex gap-4 text-[#6a6a6a]">
            <Instagram size={16} className="cursor-pointer hover:text-black" />
            <Facebook size={16} className="cursor-pointer hover:text-black" />
            <svg
              className="w-4 h-4 cursor-pointer fill-current hover:text-black"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1.1 13.6c-1.1 0-2.2-.4-3-.9l.6-1.4c.7.4 1.5.7 2.4.7 1 0 1.5-.4 1.5-1 0-.6-.4-.9-1.4-1.3-1.3-.5-2.2-1.1-2.2-2.3 0-1.3 1.1-2.3 2.8-2.3 1.1 0 1.9.2 2.5.6l-.6 1.4c-.4-.2-1.1-.5-1.9-.5s-1.3.4-1.3.9c0 .6.4.8 1.6 1.3 1.4.5 2 1.2 2 2.3 0 1.3-1 2.4-3 2.4z" />
            </svg>
            <Youtube size={16} className="cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-center text-xs text-[#9a9a9a]">

          <p>©2025 NativeSutra. All rights Reserved</p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-black">
              Term & Conditions
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:text-black">Privacy</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-black">Sitemap</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

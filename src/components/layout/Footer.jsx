import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-50 mt-auto">
      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 order-2 md:order-1">
        © 2026 NIHONGO
      </div>
      <div className="text-[11px] font-medium tracking-[0.1em] text-slate-400 italic font-kanji order-1 md:order-2 text-center">
        「夢見ることができれば、実現できる」
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 order-3">
        ngocng
      </div>
    </footer>
  );
}

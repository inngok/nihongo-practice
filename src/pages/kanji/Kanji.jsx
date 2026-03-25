import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Kanji() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 pb-20 px-6 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        Hán tự
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" />
          Quay lại
        </button>

        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
            Hán tự
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
            Tính năng đang phát triển...
          </p>
        </div>
      </div>
    </div>
  );
}

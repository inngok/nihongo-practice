import React from 'react';
import { Languages, Briefcase, Smile, Construction, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Vocabulary() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-slate-200/60 shadow-sm max-w-2xl flex flex-col items-center gap-8">
        <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-500 shadow-sm animate-pulse">
          <Construction className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Vocabulary Practice</h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
            Tính năng đang được phát triển. Dữ liệu từ vựng N3 sẽ sớm được cập nhật tại đây!
          </p>
        </div>
        <Link 
          to="/" 
          className="group px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-black transition-all shadow-md active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Quay lại Trang chủ
        </Link>
      </div>
    </div>
  );
}

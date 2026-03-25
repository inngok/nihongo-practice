import React from 'react';
import { BookOpen, Languages, ChevronRight, Brain, CheckCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-12 lg:p-20 flex flex-col items-center">
      {/* Background Ornaments (kept from premium) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-violet-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-6 mb-16">
        <div className="bg-indigo-600 text-white p-4 rounded-[2.5rem] shadow-2xl shadow-indigo-200 mb-4 animate-in fade-in zoom-in duration-700">
          <GraduationCap className="w-16 h-16" />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            Nihongo <span className="text-indigo-600">N3</span> Hub
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
            Hệ thống luyện tập học tiếng Nhật N3 toàn diện với lộ trình khoa học và kho dữ liệu phong phú.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Grammar Portal */}
        <Link 
          to="/grammar"
          className="group relative h-[380px] p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.15)] hover:border-indigo-200 hover:-translate-y-3 transition-all duration-700 flex flex-col items-center text-center justify-center gap-6 overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors"></div>
          
          <div className="w-24 h-24 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-700 shadow-sm relative">
            <BookOpen className="w-12 h-12" />
          </div>
          <div className="space-y-3 relative">
            <h3 className="text-4xl font-black text-slate-800">Ngữ Pháp</h3>
            <p className="text-slate-500 text-lg group-hover:text-slate-600 transition-colors">Luyện tập cấu trúc ngữ pháp qua Flashcards & Quiz.</p>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xl relative">
            Bắt đầu <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>

        {/* Vocabulary Portal */}
        <Link 
          to="/vocabulary"
          className="group relative h-[380px] p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)] hover:border-emerald-200 hover:-translate-y-3 transition-all duration-700 flex flex-col items-center text-center justify-center gap-6 overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors"></div>

          <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-700 shadow-sm relative">
            <Languages className="w-12 h-12" />
          </div>
          <div className="space-y-3 relative">
            <h3 className="text-4xl font-black text-slate-800">Từ Vựng</h3>
            <p className="text-slate-500 text-lg group-hover:text-slate-600 transition-colors">Mở rộng vốn từ vựng cấp độ N3 theo từng chủ đề.</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 font-extrabold text-xl relative">
            Bắt đầu <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>

      <div className="mt-16 flex gap-6 animate-pulse hidden md:flex">
         <div className="flex items-center gap-2 px-6 py-2 bg-white rounded-full text-slate-400 text-sm font-bold border border-slate-100 shadow-sm">
            <Brain className="w-4 h-4 text-indigo-400" /> Memorize
         </div>
         <div className="flex items-center gap-2 px-6 py-2 bg-white rounded-full text-slate-400 text-sm font-bold border border-slate-100 shadow-sm">
            <CheckCircle className="w-4 h-4 text-emerald-400" /> Quiz
         </div>
      </div>
    </div>
  );
}

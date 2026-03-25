import React from 'react';
import { BookOpen, Languages, ChevronRight, Brain, CheckCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-12 flex flex-col items-center justify-center font-sans">

      {/* Header Section */}
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-5 mb-14">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-2 shadow-sm">
          <GraduationCap className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Nihongo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">N3</span> Hub
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Hệ thống luyện tập học tiếng Nhật N3 toàn diện với lộ trình khoa học và kho dữ liệu phong phú.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* Grammar Portal */}
        <Link
          to="/grammar"
          className="group bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-indigo-50/80 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <BookOpen className="w-7 h-7" strokeWidth={2} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ngữ Pháp</h3>
            <p className="text-slate-500 leading-relaxed">Luyện tập cấu trúc ngữ pháp qua Flashcards & Quiz thiết kế trực quan.</p>
          </div>
        </Link>

        {/* Vocabulary Portal */}
        <Link
          to="/vocabulary"
          className="group bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-emerald-50/80 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Languages className="w-7 h-7" strokeWidth={2} />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors duration-300">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Từ Vựng</h3>
            <p className="text-slate-500 leading-relaxed">Mở rộng vốn từ vựng cấp độ N3 theo từng chủ đề thực tế.</p>
          </div>
        </Link>
      </div>

      {/* Feature Tags */}
      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <span className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-slate-500 text-sm font-medium border border-slate-200/60 shadow-sm hover:bg-slate-50 transition-colors cursor-default">
          <Brain className="w-4 h-4 text-indigo-500" /> Phương pháp Memorize
        </span>
        <span className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-slate-500 text-sm font-medium border border-slate-200/60 shadow-sm hover:bg-slate-50 transition-colors cursor-default">
          <CheckCircle className="w-4 h-4 text-emerald-500" /> Quiz đánh giá
        </span>
      </div>

    </div>
  );
}
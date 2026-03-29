import React from 'react';
import { Book, Languages, ArrowRight, Sparkles, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 md:pt-32 pb-20 px-4 md:px-6 font-sans relative overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        日本語
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-4 mb-20 relative z-10">
        <span className="text-[10px] tracking-[0.4em] font-bold text-slate-400 uppercase">
          Trình độ N3
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
          Luyện tiếng Nhật Online
        </h1>
        <p className="text-sm md:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed mt-2 font-medium">
          Môi trường học tập chuyên sâu cho hành trình chinh phục tiếng Nhật. Tập trung vào những điều quan trọng nhất.
        </p>
      </div>

      {/* Portal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl relative z-10 px-4">

        {/* Grammar Card */}
        <Link
          to="/grammar"
          className="group bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-500 flex flex-col items-start gap-6 md:gap-8"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
            <Book className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Ngữ Pháp</h3>
            <p className="text-sm md:text-slate-500 leading-relaxed max-w-[280px]">
              Khám phá các cấu trúc và mẫu câu phức tạp với các phân tích chi tiết và khoa học.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
            Bắt đầu học <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Vocabulary Card */}
        <Link
          to="/vocabulary"
          className="group bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-500 flex flex-col items-start gap-6 md:gap-8"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
            <Languages className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Từ Vựng</h3>
            <p className="text-sm md:text-slate-500 leading-relaxed max-w-[280px]">
              Mở rộng vốn từ vựng thông qua các danh sách chọn lọc và ứng dụng các từ mới.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
            Bắt đầu học <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Kanji Card */}
        <Link
          to="/kanji"
          className="group bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-500 flex flex-col items-start gap-6 md:gap-8"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
            <PenTool className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Hán Tự</h3>
            <p className="text-sm md:text-slate-500 leading-relaxed max-w-[280px]">
              Ghi nhớ và luyện tập cách viết, cách đọc các chữ Hán quan trọng trong kỳ thi N3.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
            Bắt đầu học <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

      </div>

      {/* Specialty Bottom Section */}
      <div className="mt-20 md:mt-24 relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <Link
          to="/exam-pc7"
          className="group flex-1 md:flex-none flex items-center justify-between md:justify-start gap-4 px-8 py-3 bg-slate-50 border border-slate-100 rounded-full hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 min-w-[200px]"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
            <Book className="w-4 h-4" />
          </div>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 group-hover:text-slate-900 transition-colors">
            Ôn thi PC7
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/translator"
          className="group flex-1 md:flex-none flex items-center justify-between md:justify-start gap-4 px-8 py-3 bg-slate-50 border border-slate-100 rounded-full hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 min-w-[180px]"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
            <Languages className="w-4 h-4" />
          </div>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 group-hover:text-slate-900 transition-colors">
            Dịch
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
        </Link>
        
        <Link
          to="/tips"
          className="group flex-1 md:flex-none flex items-center justify-between md:justify-start gap-4 px-8 py-3 bg-slate-50 border border-slate-100 rounded-full hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 min-w-[180px]"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 group-hover:text-slate-900 transition-colors">
            Bí kíp
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
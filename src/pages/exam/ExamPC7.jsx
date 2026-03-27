import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, CheckCircle, ChevronLeft, ArrowRight, ShieldCheck, FileText, ClipboardList } from 'lucide-react';

const examModules = [
  {
    id: 'vocab-comprehensive',
    title: "Từ vựng tổng hợp",
    description: "Hệ thống lại toàn bộ từ vựng quan trọng, các cụm từ dễ nhầm lẫn và ứng dụng thực tế.",
    icon: <ClipboardList className="w-6 h-6" />,
    path: "/exam-pc7/vocab-comprehensive",
    status: "ready"
  },
  {
    id: 'grammar-mock',
    title: "Ngữ pháp trọng tâm",
    description: "Các mẫu ngữ pháp N3 xuất hiện nhiều trong đề thi PC7.",
    icon: <FileText className="w-6 h-6" />,
    path: "/grammar/mimikara",
    status: "soon"
  },
  {
    id: 'kanji-special',
    title: "Hán tự nâng cao",
    description: "Tập trung vào các chữ Hán khó và các bộ thủ thường gặp.",
    icon: <ShieldCheck className="w-6 h-6" />,
    path: "/kanji/set-4",
    status: "soon"
  }
];

export default function ExamPC7() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Area */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase mb-8"
        >
          <ChevronLeft className="w-3 h-3" /> Quay lại trang chủ
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-slate-300 uppercase">Chương trình đặc biệt</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight italic">
              Ôn thi PC7
            </h1>
            <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl italic leading-relaxed">
              Lộ trình ôn luyện cấp tốc, tập trung vào kiến thức trọng tâm để đạt kết quả tốt nhất trong kỳ thi PC7.
            </p>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examModules.map((module) => (
            <Link
              key={module.id}
              to={module.path}
              className={`group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 flex flex-col items-start gap-8 ${module.status === 'ready'
                  ? 'bg-white border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] hover:border-slate-200'
                  : 'bg-slate-50/50 border-transparent opacity-60 cursor-not-allowed'
                }`}
              onClick={(e) => module.status === 'soon' && e.preventDefault()}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${module.status === 'ready'
                  ? 'bg-slate-50 text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white'
                  : 'bg-white text-slate-200'
                }`}>
                {module.icon}
              </div>

              <div className="space-y-3 flex-grow">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">{module.title}</h3>
                  {module.status === 'soon' && (
                    <span className="text-[9px] font-black tracking-widest text-slate-400 border border-slate-200 px-2 py-1 rounded-full uppercase">Sắp có</span>
                  )}
                </div>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium italic">
                  {module.description}
                </p>
              </div>

              {module.status === 'ready' && (
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
                  Bắt đầu ôn tập <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

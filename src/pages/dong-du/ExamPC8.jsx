import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ClipboardList, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

const examModules = [
  {
    id: 'kanji-pc8',
    title: "Hán tự PC8",
    description: "Tổng hợp hán tự và âm hán việt cấp độ PC8.",
    icon: <CheckCircle className="w-6 h-6" />,
    path: "/exam-pc8/kanji",
    status: "ready"
  },
  {
    id: 'vocab-test',
    title: "Từ vựng PC8",
    description: "Hệ thống câu hỏi trắc nghiệm từ vựng theo chương trình PC8.",
    icon: <CheckCircle className="w-6 h-6" />,
    path: "/exam-pc8/vocab-test",
    status: "soon"
  },
  {
    id: 'grammar-focus',
    title: "Ngữ pháp PC8",
    description: "Tổng hợp các điểm ngữ pháp quan trọng trong cấp độ PC8.",
    icon: <FileText className="w-6 h-6" />,
    path: "/exam-pc8/grammar",
    status: "soon"
  }
];

export default function ExamPC8() {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Header Area */}
      <div className="pt-20 pb-10 px-6 max-w-4xl mx-auto">
        <Link
          to="/dong-du"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-slate-400 hover:text-black transition-colors uppercase mb-8 group"
        >
          <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" /> 
          Trở về
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Ôn thi PC8
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Chọn nội dung ôn luyện chuyên sâu.
          </p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="px-6 max-w-4xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examModules.map((module) => (
            <Link
              key={module.id}
              to={module.path}
              className={`group p-8 rounded-3xl border transition-all duration-300 flex flex-col items-start gap-4 ${module.status === 'ready'
                ? 'bg-white border-slate-100 hover:border-black hover:shadow-lg active:scale-[0.98]'
                : 'bg-slate-50 border-transparent opacity-60 cursor-not-allowed'
                }`}
              onClick={(e) => module.status === 'soon' && e.preventDefault()}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                  {module.status === 'soon' && (
                    <span className="text-[8px] font-bold tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full uppercase">Soon</span>
                  )}
                </div>
                <p className="text-sm text-slate-400 font-medium">
                  {module.description}
                </p>
              </div>

              {module.status === 'ready' && (
                <div className="mt-2 text-[10px] font-bold tracking-widest text-black uppercase underline underline-offset-8 decoration-slate-100 group-hover:decoration-black transition-all">
                  Bắt đầu
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

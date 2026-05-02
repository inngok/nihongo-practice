import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const programs = [
  {
    id: 'pc7',
    title: "Phổ cập 7",
    description: "Bộ câu hỏi luyện tập và kiến thức trọng tâm cho kỳ thi Phổ cập 7.",
    path: "/exam-pc7",
    status: "ready"
  },
  {
    id: 'pc8',
    title: "Phổ cập 8",
    description: "Lộ trình ôn luyện và các dạng bài tập thực tế cho kỳ thi Phổ cập 8.",
    path: "/exam-pc8",
    status: "ready"
  }
];

export default function DongDu() {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Header Area */}
      <div className="pt-20 pb-10 px-6 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-slate-400 hover:text-black transition-colors uppercase mb-8 group"
        >
          <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" /> 
          Trở về trang chủ
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Chương trình Đông Du
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Chọn lộ trình ôn thi phù hợp với trình độ của bạn.
          </p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="px-6 max-w-4xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program) => (
            <Link
              key={program.id}
              to={program.path}
              className={`group p-8 rounded-3xl border transition-all duration-300 flex flex-col items-start gap-4 ${program.status === 'ready'
                ? 'bg-white border-slate-100 hover:border-black hover:shadow-lg active:scale-[0.98]'
                : 'bg-slate-50 border-transparent opacity-60 cursor-not-allowed'
                }`}
              onClick={(e) => program.status === 'soon' && e.preventDefault()}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                  {program.status === 'soon' && (
                    <span className="text-[8px] font-bold tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full uppercase">Soon</span>
                  )}
                </div>
                <p className="text-sm text-slate-400 font-medium whitespace-pre-wrap">
                  {program.description}
                </p>
              </div>

              {program.status === 'ready' && (
                <div className="mt-2 text-[10px] font-bold tracking-widest text-black uppercase underline underline-offset-8 decoration-slate-100 group-hover:decoration-black transition-all">
                  Khám phá
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

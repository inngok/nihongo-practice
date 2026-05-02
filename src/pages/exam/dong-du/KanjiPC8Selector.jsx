import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const weeks = [
  {
    week: 1,
    days: [1, 2, 3, 4, 5, 6]
  },
  {
    week: 2,
    days: [1, 2, 3, 4, 5, 6, 7]
  }
];

export default function KanjiPC8Selector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20 font-sans selection:bg-slate-100">
      {/* minimalist Header */}
      <div className="pt-20 pb-10 px-6 max-w-4xl mx-auto">
        <Link
          to="/exam-pc8"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-slate-400 hover:text-black transition-colors uppercase mb-8 group"
        >
          <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" /> 
          Trở về
        </Link>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Lộ trình Hán tự PC8
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Chọn ngày học để bắt đầu ôn tập.
          </p>
        </div>
      </div>

      {/* Selector Grid */}
      <div className="px-6 max-w-4xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weeks.map((w) => (
            <button
              key={w.week}
              onClick={() => navigate(`/exam-pc8/kanji/study?week=${w.week}&day=1`)}
              className="group p-12 rounded-3xl border border-slate-100 bg-white hover:border-black transition-all duration-300 flex flex-col items-center justify-center active:scale-[0.98]"
            >
              <h2 className="text-4xl font-bold text-slate-900 tracking-tighter group-hover:scale-110 transition-transform">Tuần {w.week}</h2>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-20 pt-10 px-6 max-w-4xl mx-auto border-t border-slate-50">
        <p className="text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em] text-center italic">
          "Học đi đôi với hành. Hãy kiên trì mỗi ngày."
        </p>
      </div>
    </div>
  );
}

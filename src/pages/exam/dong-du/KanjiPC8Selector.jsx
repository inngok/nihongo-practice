import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';

const weeks = [
  {
    week: 1,
    days: [1, 2, 3, 4, 5, 6]
  }
];

export default function KanjiPC8Selector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header Area */}
      <div className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-50 relative overflow-hidden">


        <Link
          to="/exam-pc8"
          className="px-6 py-2 border-2 border-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all font-sans relative z-[200] cursor-pointer inline-block mb-8"
        >
          Quay lại Ôn thi PC8
        </Link>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-slate-300 uppercase">Hán tự Đông Du</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Lộ trình Hán tự PC8
            </h1>
            <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl italic leading-relaxed">
              Dữ liệu được chia theo Tuần và Ngày học giúp bạn ôn tập có hệ thống và hiệu quả hơn.
            </p>
          </div>
        </div>
      </div>

      {/* Selector Grid */}
      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        {weeks.map((w) => (
          <div key={w.week} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-slate-100 flex-grow"></div>
              <h2 className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">Tuần {w.week}</h2>
              <div className="h-px bg-slate-100 flex-grow"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {w.days.map((d) => (
                <button
                  key={d}
                  onClick={() => navigate(`/exam-pc8/kanji/study?week=${w.week}&day=${d}`)}
                  className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] hover:border-black hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                  <Calendar className="w-6 h-6 text-slate-200 group-hover:text-black transition-colors relative z-10" />
                  <div className="text-center relative z-10">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600">Ngày</span>
                    <span className="block text-4xl font-black text-slate-900 leading-none mt-1">{d}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Practice All Option */}
        <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-black italic uppercase mb-2">Ôn tập tổng hợp</h3>
              <p className="text-slate-400 text-sm font-medium">Luyện tập tất cả 205 chữ Hán tự của Week 1 cùng lúc.</p>
            </div>
            <button 
              onClick={() => navigate('/exam-pc8/kanji/study?week=1&all=true')}
              className="px-8 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Bắt đầu luyện tập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

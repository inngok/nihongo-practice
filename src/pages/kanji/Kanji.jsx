import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Languages, PenTool, BookOpen } from 'lucide-react';

export default function Kanji() {
  const navigate = useNavigate();

  const kanjiSets = [
    {
      id: 'kanji4',
      num: '04',
      icon: Languages,
      title: 'Hán tự 4',
      japanese: 'N3 漢字',
      label: 'TRÌNH ĐỘ N3',
      path: '/kanji/set-4'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 md:pt-32 pb-20 px-4 md:px-6 font-sans relative overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        漢字
      </div>

      <div className="w-full max-w-5xl relative z-10">

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" />
          Quay lại
        </button>

        {/* Title Section */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
            Hán tự
          </h1>
          <p className="text-sm md:text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
            Rèn luyện kỹ năng đọc và viết Hán tự theo lộ trình từ cơ bản đến nâng cao cho trình độ N3.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {kanjiSets.map((set) => (
            <div
              key={set.id}
              onClick={() => set.path !== '#' && navigate(set.path)}
              className={`group relative aspect-square bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between transition-all duration-500
                          ${set.path !== '#' ? 'hover:border-slate-200 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-slate-300 tracking-widest">{set.num}</span>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  <set.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* Center Content */}
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{set.title}</h3>
                <p className="text-slate-400 text-xs font-medium">{set.japanese}</p>
              </div>

              {/* Bottom Label */}
              <div className="pt-4">
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
                  {set.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

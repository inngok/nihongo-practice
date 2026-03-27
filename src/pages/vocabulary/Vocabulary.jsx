import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Vocabulary() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 pb-20 px-6 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        Từ vựng
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-12"
        >
          Quay lại
        </button>

        <div className="mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
            Từ vựng
          </h1>
          <p className="text-sm md:text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
            Học từ vựng theo giáo trình N3 hiệu quả nhất.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Soumatome Card */}
          <div
            onClick={() => navigate('/vocabulary/soumatome')}
            className="group relative aspect-square bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-slate-200 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">Set 01</span>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                LIST
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">Soumatome</h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.1em]">Soumatome N3</p>
            </div>

            <div className="pt-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
                TRÌNH ĐỘ N3
              </span>
            </div>
          </div>

          {/* Try! N3 Card */}
          <div
            onClick={() => navigate('/vocabulary/try-n3')}
            className="group relative aspect-square bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-slate-200 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">Set 02</span>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                BOOK
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">Try! N3</h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.1em]">Giáo trình Try! N3</p>
            </div>

            <div className="pt-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase text-emerald-500">
                QUAN TRỌNG
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Vocabulary() {
  const navigate = useNavigate();

  const vocabSets = [
    {
      id: 'soumatome',
      num: '01',
      title: 'Soumatome',
      japanese: 'Soumatome N3',
      label: 'TRÌNH ĐỘ N3',
      badge: 'LIST',
      path: '/vocabulary/soumatome'
    },
    {
      id: 'try-n3',
      num: '02',
      title: 'Try! N3',
      japanese: 'Giáo trình Try! N3',
      label: 'QUAN TRỌNG',
      badge: 'BOOK',
      path: '/vocabulary/try-n3'
    },
    {
      id: 'mimikara',
      num: '03',
      title: 'Mimikara',
      japanese: 'Mimikara Oboeru N3',
      label: 'CƠ BẢN',
      badge: 'LISTEN',
      path: '/vocabulary/mimikara'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-32 pb-20 px-6 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        VOCAB
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-12"
        >
          Quay lại
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none italic">
            Từ vựng
          </h1>
          <p className="text-sm md:text-lg text-slate-500 max-w-2xl leading-relaxed font-bold italic opacity-60">
            Học từ vựng theo giáo trình N3 hiệu quả nhất.
          </p>
        </div>

        {/* Cards Grid synchronized with Grammar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {vocabSets.map((set) => (
            <div
              key={set.id}
              onClick={() => navigate(set.path)}
              className="group relative aspect-square bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-slate-200 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">{set.num}</span>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  {set.badge}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{set.title}</h3>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.1em]">{set.japanese}</p>
              </div>

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

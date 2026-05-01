import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Brain, Layers, List, Search, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { dekiruGrammarData } from '../data/dekiruGrammarData';

export default function DekiruGrammar() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('menu');
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const activeData = useMemo(() => {
    if (!type) return [];
    const data = dekiruGrammarData[type] || [];
    if (selectedUnit === 'all') return data;
    return data.filter(i => i.unit === parseInt(selectedUnit));
  }, [type, selectedUnit]);

  const currentItem = activeData[currentIndex] || {};

  if (!type) {
    return (
      <div className="min-h-screen w-full bg-white flex flex-col items-center pt-28 pb-16 px-6">
        <div className="w-full max-w-5xl relative z-10">
          <button
            onClick={() => navigate('/grammar')}
            className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-8"
          >
            ← Quay lại
          </button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Dekiru Grammar
            </h1>
            <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
              Chọn chương trình học để bắt đầu luyện tập ngữ pháp theo giáo trình Dekiru Nihongo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'jdp316', title: 'JDP316', japanese: '', label: 'N3' },
              { id: 'jdp326', title: 'JDP326', japanese: '', label: 'N3' }
            ].map((item, idx) => (
              <div
                key={item.id}
                onClick={() => navigate(`/grammar/dekiru/${item.id}`)}
                className="group relative bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-400 hover:shadow-md hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-10">
                  <span className="text-sm font-bold text-slate-300">0{idx + 1}</span>
                  <span className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.japanese}</p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-auto">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => activeMode === 'menu' ? navigate('/grammar/dekiru') : setActiveMode('menu')}
          className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-8"
        >
          ← {activeMode === 'menu' ? 'Thay đổi học phần' : 'Quay lại menu'}
        </button>

        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {type === 'jdp316' ? 'Dekiru JDP316' : 'Dekiru JDP326'}
            </h1>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Unit {selectedUnit === 'all' ? 'Tất cả' : selectedUnit}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['all', ...(type === 'jdp326' ? [6, 7, 8, 9, 10] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])].map(num => (
              <button
                key={num}
                onClick={() => setSelectedUnit(num)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${selectedUnit === num ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
              >
                {num === 'all' ? 'ALL' : `BÀI ${num}`}
              </button>
            ))}
          </div>
        </div>

        {activeMode === 'menu' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'cards', label: 'Flashcard', icon: Layers, desc: 'Ghi nhớ mẫu câu qua thẻ lật' },
              { id: 'list', label: 'Danh sách', icon: List, desc: 'Xem toàn bộ cấu trúc và ví dụ' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => { setActiveMode(m.id); setCurrentIndex(0); }}
                className="bg-white border border-slate-200 rounded-2xl p-10 text-left hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                  <m.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{m.label}</h3>
                <p className="text-sm text-slate-500">{m.desc}</p>
              </button>
            ))}
          </div>
        ) : activeMode === 'list' ? (
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm cấu trúc..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:border-slate-400 outline-none transition-all"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {activeData.filter(i => i.pattern.includes(searchTerm) || i.meaning.includes(searchTerm)).map(item => (
                <div key={item.id} className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-slate-300 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 font-kanji">{item.pattern}</h3>
                    <span className="text-[10px] font-bold text-slate-200 uppercase">Unit {item.unit}</span>
                  </div>
                  <p className="text-slate-600 font-medium italic mb-4">{item.meaning}</p>
                  <div className="space-y-2 pt-4 border-t border-slate-50">
                    {item.examples?.slice(0, 1).map((ex, i) => (
                      <div key={i}>
                        <p className="text-sm text-slate-500 font-kanji">{ex.jp}</p>
                        <p className="text-[10px] text-slate-400 italic">{ex.vn}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-white border border-slate-200 rounded-3xl p-12 md:p-16 text-center shadow-sm">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6 block">Unit {currentItem.unit} • #{currentItem.id}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-kanji">{currentItem.pattern}</h2>
              <div className="h-px w-20 bg-slate-100 mx-auto mb-8" />
              <h3 className="text-2xl font-bold italic text-slate-600 mb-4">{currentItem.meaning}</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed italic">{currentItem.explanation}</p>

              <div className="mt-12 space-y-6 text-left bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2">Ví dụ minh họa</p>
                {currentItem.examples?.map((ex, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-lg font-bold text-slate-900 font-kanji">{ex.jp}</p>
                    <p className="text-xs text-slate-400 italic">{ex.vn}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex-1 py-4 border border-slate-200 rounded-xl text-[10px] font-black uppercase text-slate-400 disabled:opacity-20 hover:border-slate-900 hover:text-slate-900 transition-all"
              >
                Trước
              </button>
              <button
                onClick={() => currentIndex === activeData.length - 1 ? setActiveMode('menu') : setCurrentIndex(prev => prev + 1)}
                className="flex-3 py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase hover:bg-black transition-all shadow-lg"
              >
                {currentIndex === activeData.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .font-kanji { font-family: "Sawarabi Mincho", serif; }
      `}} />
    </div>
  );
}

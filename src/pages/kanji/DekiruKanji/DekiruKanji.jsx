import React, { useState, useMemo, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, ChevronLeft, Search } from 'lucide-react';
import { dekiruKanjiData } from './dekiruKanjiData';

export default function DekiruKanji() {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(10);
  const [expandedKanji, setExpandedKanji] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const currentData = useMemo(() => {
    return dekiruKanjiData[activeLesson] || { title: '', kanji: [] };
  }, [activeLesson]);

  const filteredKanji = useMemo(() => {
    const kanjis = currentData.kanji || [];
    if (!deferredSearchTerm.trim()) return kanjis;
    const term = deferredSearchTerm.toLowerCase().trim();
    return kanjis.filter(item => 
      (item.char && (item.char.toLowerCase().includes(term) || term.includes(item.char.toLowerCase()))) ||
      (item.meaning && item.meaning.toLowerCase().includes(term)) ||
      (item.onyomi && item.onyomi.toLowerCase().includes(term)) ||
      (item.kunyomi && item.kunyomi.toLowerCase().includes(term))
    );
  }, [currentData.kanji, deferredSearchTerm]);

  const toggleExpand = (char) => {
    setExpandedKanji(prev => ({
      ...prev,
      [char]: !prev[char]
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-6">
             <button
               onClick={() => navigate('/kanji')}
               className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-8"
             >
               <span className="transition-transform group-hover:-translate-x-1">←</span>
               Quay lại
             </button>

             <div className="border-l-4 border-slate-900 pl-6 py-1">
               <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                 {currentData.title || 'Hán tự Dekiru'}
               </h1>
               <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                 Giáo trình Dekiru Nihongo
               </p>
             </div>
           </div>

           <div className="flex flex-wrap gap-2">
             {Object.keys(dekiruKanjiData).map(num => (
               <button
                 key={num}
                 onClick={() => setActiveLesson(parseInt(num))}
                 className={`px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeLesson === parseInt(num) ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
               >
                 Bài {num}
               </button>
             ))}
           </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto w-full mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm Hán tự, ý nghĩa, âm On/Kun..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all placeholder:font-normal placeholder:text-slate-400"
          />
        </div>

        {/* Kanji List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredKanji.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-400 transition-all group"
            >
              <div 
                className="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-12 cursor-pointer"
                onClick={() => toggleExpand(item.char)}
              >
                <div className="text-8xl md:text-9xl font-medium text-slate-900 font-kanji leading-none group-hover:scale-105 transition-transform duration-500">
                  {item.char}
                </div>
                
                <div className="flex-grow space-y-6 text-center md:text-left">
                  <div>
                    <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest mb-2 block">Ý nghĩa</span>
                    <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter">{item.meaning}</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest block">Âm On</span>
                      <p className="text-lg font-bold text-slate-600 font-kanji">{item.onyomi || '—'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest block">Âm Kun</span>
                      <p className="text-lg font-bold text-slate-600 font-kanji">{item.kunyomi || '—'}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center gap-2 text-slate-200 group-hover:text-slate-400 transition-colors">
                  <span className="text-[8px] font-bold uppercase tracking-widest">Từ vựng</span>
                  <span className="text-2xl font-black">{item.words.length}</span>
                  {expandedKanji[item.char] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Vocabulary Section */}
              {expandedKanji[item.char] && item.words.length > 0 && (
                <div className="bg-slate-50 border-t border-slate-100 p-8 md:p-12 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.words.map((word, wIdx) => (
                      <div key={wIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-300 transition-all flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <span className="text-xl font-bold text-slate-900 font-kanji">{word.kanji}</span>
                          <span className="text-[8px] font-bold text-slate-300 uppercase">#{wIdx + 1}</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{word.kana}</p>
                        <p className="text-sm font-bold text-slate-600 mt-1">{word.meaning}</p>
                        {word.example && <p className="text-[10px] text-slate-400 italic mt-3 leading-relaxed border-t border-slate-50 pt-3">{word.example}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {currentData.kanji.length === 0 && (
          <div className="py-40 text-center text-slate-400 font-medium italic bg-slate-50 rounded-3xl border border-slate-100">
            Dữ liệu đang được cập nhật...
          </div>
        )}
        {currentData.kanji.length > 0 && filteredKanji.length === 0 && (
          <div className="py-20 text-center text-slate-400 font-medium italic bg-slate-50 rounded-3xl border border-slate-100">
            Không tìm thấy kết quả phù hợp.
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .font-kanji { font-family: "Sawarabi Mincho", serif; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.4s ease-out forwards; }
      `}} />
    </div>
  );
}

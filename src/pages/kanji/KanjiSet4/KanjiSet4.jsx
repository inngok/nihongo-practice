import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

// Import data from the central data folder
import { kanjiData } from './data';

export default function KanjiSet4() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(12);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'flashcard'
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter and memoize current page data
  const currentData = useMemo(() => kanjiData[activePage] || [], [activePage]);

  // Page selection logic (automatically sorted numerically)
  const availablePages = useMemo(() => 
    Object.keys(kanjiData).map(Number).sort((a, b) => a - b),
    []
  );

  // Keyboard navigation for Flashcard Mode
  React.useEffect(() => {
    const handleKey = (e) => {
      if (viewMode !== 'flashcard') return;
      if (e.code === 'ArrowRight') handleNext();
      if (e.code === 'ArrowLeft') handlePrev();
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, flashcardIndex, isFlipped, currentData.length]);

  const handleNext = React.useCallback(() => {
    if (flashcardIndex < currentData.length - 1) {
      setFlashcardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [flashcardIndex, currentData.length]);

  const handlePrev = React.useCallback(() => {
    if (flashcardIndex > 0) {
      setFlashcardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  }, [flashcardIndex]);

  const handleReset = () => {
    setFlashcardIndex(0);
    setIsFlipped(false);
  };

  const switchPage = (pageNum) => {
    setActivePage(pageNum);
    setFlashcardIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 pb-20 px-6 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        漢字集
      </div>

      <div className="w-full max-w-6xl relative z-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-6">
            <button 
              onClick={() => navigate('/kanji')}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              Danh sách hán tự
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-slate-300 font-bold text-sm tracking-widest uppercase">Set 04</span>
                <div className="flex gap-2">
                   {availablePages.map(page => (
                     <button
                       key={page}
                       onClick={() => switchPage(page)}
                       className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${activePage === page ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-200'}`}
                     >
                       Trang {page}
                     </button>
                   ))}
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                Hán tự 4
              </h1>
            </div>
          </div>
          
          {/* View Mode Switcher */}
          <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shadow-sm self-start md:self-end">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <BookOpen className="w-4 h-4" />
              Danh sách
            </button>
            <button 
              onClick={() => setViewMode('flashcard')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${viewMode === 'flashcard' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Brain className="w-4 h-4" />
              Flashcard
            </button>
          </div>
        </div>

        {/* --- DYNAMIC VIEWS --- */}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-white border border-slate-100 rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-default"
                >
                  <span className="absolute top-4 left-5 text-[9px] font-bold text-slate-200 group-hover:text-slate-400 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  
                  <div className="text-5xl font-black text-slate-900 group-hover:scale-110 transition-transform duration-500 py-1">
                    {item.kanji}
                  </div>
                  
                  <div className="w-full text-center pt-3 border-t border-slate-50">
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      {item.hano}
                    </p>
                    <p className="text-[9px] font-medium text-slate-400 mt-0.5 line-clamp-1 group-hover:text-slate-500 transition-colors">
                      {item.meaning}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-slate-400 font-medium italic">
                Chưa có dữ liệu cho trang này.
              </div>
            )}
          </div>
        )}

        {/* Flashcard View */}
        {viewMode === 'flashcard' && (
          currentData.length > 0 ? (
            <div className="max-w-4xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
              
              {/* Progress Top */}
              <div className="w-full flex justify-between items-center mb-10 px-4">
                <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                  Tiến trình: {flashcardIndex + 1} / {currentData.length}
                </span>
                <div className="h-1.5 w-64 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-900 transition-all duration-500" 
                    style={{ width: `${((flashcardIndex + 1) / currentData.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* The Card */}
              <div 
                className="group perspective w-full aspect-[16/10] md:max-h-[450px] cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`relative w-full h-full duration-500 preserve-3d shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-[3rem] flex flex-col items-center justify-center p-12">
                     <div className="absolute top-10 text-[10px] font-bold text-slate-200 uppercase tracking-[0.3em]">Hán tự</div>
                     <div className="text-[10rem] md:text-[14rem] font-black text-slate-900 select-none leading-none">{currentData[flashcardIndex].kanji}</div>
                     <div className="absolute bottom-10 flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                       <RotateCcw className="w-3 h-3" /> Click để lật
                     </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden bg-slate-900 text-white rounded-[3rem] rotate-y-180 flex flex-col items-center justify-center p-12 overflow-hidden">
                     <div className="absolute -top-10 -right-10 text-[20vw] font-black text-white/[0.03] rotate-12 select-none pointer-events-none leading-none">
                       {currentData[flashcardIndex].kanji}
                     </div>
                     
                     <div className="space-y-8 text-center relative z-10">
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Âm Hán Việt</p>
                         <h3 className="text-5xl md:text-7xl font-black text-white italic leading-tight">{currentData[flashcardIndex].hano}</h3>
                       </div>
                       <div className="w-12 h-px bg-white/20 mx-auto" />
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Nghĩa Tiếng Việt</p>
                         <p className="text-2xl md:text-3xl font-medium text-white/90 leading-snug">{currentData[flashcardIndex].meaning}</p>
                       </div>
                     </div>

                     <div className="absolute bottom-10 flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                       <CheckCircle className="w-3.5 h-3.5" /> Đã nhớ
                     </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-16 flex items-center gap-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  disabled={flashcardIndex === 0}
                  className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); handleReset(); }}
                  className="px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-950 transition-colors"
                >
                  Làm mới
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  disabled={flashcardIndex === currentData.length - 1}
                  className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-xl shadow-slate-200 hover:scale-110 active:scale-95 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Shortcuts Info */}
              <p className="mt-12 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Sử dụng phím mũi tên để di chuyển • Space để lật thẻ
              </p>
            </div>
          ) : (
            <div className="py-20 text-center text-slate-400 font-medium italic animate-in fade-in duration-500">
              Chưa có dữ liệu flashcard cho trang này.
            </div>
          )
        )}

      </div>
    </div>
  );
}

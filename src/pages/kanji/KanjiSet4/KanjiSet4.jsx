import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw, HelpCircle, Trophy } from 'lucide-react';

// Import data from the central data folder
import { kanjiData } from './data';

export default function KanjiSet4() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list', 'flashcard', 'quiz'
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz State
  const [quizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  // Filter and memoize current page data
  const currentData = useMemo(() => {
    if (activePage === 'all') {
      return Object.values(kanjiData).flat();
    }
    return kanjiData[activePage] || [];
  }, [activePage]);

  // Page selection logic (automatically sorted numerically)
  const availablePages = useMemo(() => 
    Object.keys(kanjiData).map(Number).sort((a, b) => a - b),
    []
  );

  // Initialize Quiz
  const startQuiz = useCallback(() => {
    const shuffled = [...currentData].sort(() => Math.random() - 0.5);
    setQuizData(shuffled);
    setQuizIndex(0);
    setScore(0);
    setUserInput('');
    setFeedback(null);
    setShowHint(false);
    setViewMode('quiz');
  }, [currentData]);

  // Keyboard navigation for Flashcard & Quiz
  useEffect(() => {
    const handleKey = (e) => {
      if (viewMode === 'flashcard') {
        if (e.code === 'ArrowRight') handleNext();
        if (e.code === 'ArrowLeft') handlePrev();
        if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown') {
          e.preventDefault();
          setIsFlipped(prev => !prev);
        }
      } else if (viewMode === 'quiz') {
        if (e.key === 'Enter') {
          if (!feedback) checkAnswer();
          else nextQuiz();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, flashcardIndex, isFlipped, feedback, userInput]);

  // Focus input on quiz
  useEffect(() => {
    if (viewMode === 'quiz' && !feedback) {
      inputRef.current?.focus();
    }
  }, [viewMode, quizIndex, feedback]);

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
    if (viewMode === 'quiz') setViewMode('list'); 
  };

  // Quiz Logic
  const checkAnswer = () => {
    const currentItem = quizData[quizIndex];
    const answer = currentItem.hano.toLowerCase().trim();
    const input = userInput.toLowerCase().trim();
    
    if (input === answer) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('incorrect');
    }
  };

  const nextQuiz = () => {
    if (quizIndex < quizData.length - 1) {
      setQuizIndex(i => i + 1);
      setUserInput('');
      setFeedback(null);
      setShowHint(false);
    } else {
      // Quiz finished
      alert(`Hoàn thành! Bạn đúng ${score + (feedback === 'correct' ? 1 : 0)}/${quizData.length} câu.`);
      setViewMode('list');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 md:pt-32 pb-20 px-4 md:px-6 font-sans relative overflow-hidden text-slate-900">
      
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
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors underline-offset-8"
            >
              Danh sách hán tự
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-slate-300 font-bold text-sm tracking-widest uppercase">Set 04</span>
                <div className="flex gap-2 flex-wrap items-center">
                   <button
                     onClick={() => switchPage('all')}
                     className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${activePage === 'all' ? 'bg-white text-black border border-black shadow-sm' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                   >
                     Tất cả
                   </button>
                   {availablePages.map(page => (
                     <button
                       key={page}
                       onClick={() => switchPage(page)}
                       className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${activePage === page ? 'bg-white text-black border border-black shadow-sm' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                     >
                       Trang {page}
                     </button>
                   ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none flex items-baseline gap-4">
                Hán tự 4
                <span className="text-sm md:text-2xl font-bold text-slate-300 tracking-tight">
                  ({activePage === 'all' ? Object.values(kanjiData).flat().length : (kanjiData[activePage]?.length || 0)} chữ)
                </span>
              </h1>
            </div>
          </div>
          
          {/* View Mode Switcher */}
          <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-100 shadow-sm self-start md:self-end overflow-hidden whitespace-nowrap max-w-full">
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'list' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Danh sách
            </button>
            <button 
              onClick={() => setViewMode('flashcard')}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'flashcard' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Flashcard
            </button>
            <button 
              onClick={startQuiz}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'quiz' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Luyện tập
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
                  <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-[3rem] flex flex-col items-center justify-center p-8">
                     <div className="absolute top-8 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">Hán tự</div>
                     <div className="text-[7rem] md:text-[12rem] font-black text-slate-900 select-none leading-none">{currentData[flashcardIndex].kanji}</div>
                     <div className="absolute bottom-8 flex items-center justify-center w-full px-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest decoration-slate-100 italic">
                       NHẤN ĐỂ LẬT
                     </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-900 text-slate-950 rounded-[3rem] rotate-y-180 flex flex-col items-center justify-center p-12 overflow-hidden">
                     <div className="absolute -top-10 -right-10 text-[20vw] font-black text-slate-100 rotate-12 select-none pointer-events-none leading-none">
                       {currentData[flashcardIndex].kanji}
                     </div>
                     
                     <div className="space-y-8 text-center relative z-10">
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Âm Hán Việt</p>
                         <h3 className="text-5xl md:text-7xl font-black text-slate-900 italic leading-tight">{currentData[flashcardIndex].hano}</h3>
                       </div>
                       <div className="w-12 h-px bg-slate-200 mx-auto" />
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Nghĩa Tiếng Việt</p>
                         <p className="text-2xl md:text-3xl font-bold text-slate-600 leading-snug">{currentData[flashcardIndex].meaning}</p>
                       </div>
                     </div>

                     <div className="absolute bottom-10 flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                       ĐÃ NHỚ
                     </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-16 flex items-center gap-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  disabled={flashcardIndex === 0}
                  className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-900 hover:bg-slate-50 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  TRƯỚC
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
                  className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-[10px] font-black text-white shadow-xl shadow-slate-200 hover:scale-110 active:scale-95 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  SAU
                </button>
              </div>

              {/* Shortcuts Info */}
              <p className="mt-12 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Phím mũi tên để di chuyển • Space để lật thẻ
              </p>
            </div>
          ) : (
            <div className="py-20 text-center text-slate-400 font-medium italic animate-in fade-in duration-500">
              Chưa có dữ liệu flashcard cho trang này.
            </div>
          )
        )}

        {/* Quiz View */}
        {viewMode === 'quiz' && quizData.length > 0 && (
          <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="w-full flex justify-between items-center mb-12">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Câu hỏi</span>
                  <span className="text-sm font-black text-slate-900">{quizIndex + 1} / {quizData.length}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Điểm số</span>
                  <span className="text-sm font-black text-emerald-600">{score}</span>
                </div>
             </div>

             <div className="text-center space-y-12 w-full">
                <div className="space-y-4">
                  <div className="text-[12rem] font-black text-slate-900 leading-none select-none drop-shadow-sm">
                    {quizData[quizIndex].kanji}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Nhập âm Hán Việt</p>
                </div>

                <div className="space-y-6 w-full max-w-md mx-auto">
                   <input
                     ref={inputRef}
                     type="text"
                     value={userInput}
                     onChange={(e) => setUserInput(e.target.value)}
                     disabled={!!feedback}
                     placeholder="Ví dụ: Nhất"
                     className={`w-full text-center py-6 text-3xl font-black border-b-4 outline-none transition-all uppercase ${
                       feedback === 'correct' ? 'border-emerald-500 text-emerald-600 bg-emerald-50/30' : 
                       feedback === 'incorrect' ? 'border-red-500 text-red-600 bg-red-50/30' : 
                       'border-slate-900 focus:border-slate-400'
                     }`}
                   />

                   <div className="flex flex-col gap-4">
                      {!feedback ? (
                        <div className="grid grid-cols-2 gap-4">
                          <button 
                            onClick={checkAnswer}
                            className="py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-95 transition-all"
                          >
                            Kiểm tra
                          </button>
                          <button 
                            onClick={() => setShowHint(!showHint)}
                            className="py-4 border border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:border-black hover:text-black transition-colors"
                          >
                            {showHint ? 'Ẩn nghĩa' : 'Xem nghĩa'}
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={nextQuiz}
                          className={`py-4 ${feedback === 'correct' ? 'bg-emerald-600' : 'bg-slate-900'} text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl animate-in zoom-in-95 duration-300`}
                        >
                          {quizIndex === quizData.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                        </button>
                      )}
                      
                      {showHint && !feedback && (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 animate-in fade-in duration-300">
                           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Nghĩa tiếng Việt</p>
                           <p className="font-bold text-slate-600 italic">"{quizData[quizIndex].meaning}"</p>
                        </div>
                      )}

                      {feedback === 'incorrect' && (
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 animate-in slide-in-from-top-4 duration-500">
                           <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Đáp án đúng</p>
                           <p className="text-3xl font-black text-emerald-700 uppercase">{quizData[quizIndex].hano}</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}

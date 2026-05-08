import React, { useState, useMemo, useEffect, useCallback, useRef, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

// Import data from the central data folder
import { kanjiData } from './data';

export default function KanjiSet4() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list', 'flashcard', 'quiz'
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [studyData, setStudyData] = useState([]);

  // Quiz State
  const [quizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  // MCQ State
  const [mcqOptions, setMcqOptions] = useState([]);
  const [mcqSelected, setMcqSelected] = useState(null);
  
  const allKanjiFlat = useMemo(() => Object.values(kanjiData).flat(), []);

  // Swipe Support State
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Filter and memoize current page data
  const currentData = useMemo(() => {
    if (activePage === 'all') {
      return Object.values(kanjiData).flat();
    }
    return kanjiData[activePage] || [];
  }, [activePage]);

  // Filtered data for list view
  const filteredData = useMemo(() => {
    if (!deferredSearchTerm.trim()) return currentData;
    const term = deferredSearchTerm.toLowerCase().trim();
    return currentData.filter(item => 
      (item.kanji && (item.kanji.toLowerCase().includes(term) || term.includes(item.kanji.toLowerCase()))) ||
      (item.hano && item.hano.toLowerCase().includes(term)) ||
      (item.meaning && item.meaning.toLowerCase().includes(term))
    );
  }, [currentData, deferredSearchTerm]);
  
  // Sync studyData whenever currentData or isShuffle changes
  // This ensures that switching pages while in Flashcard/Quiz mode updates the data correctly
  useEffect(() => {
    let data = [...currentData];
    if (isShuffle) {
      data.sort(() => Math.random() - 0.5);
    }
    setStudyData(data);
    setFlashcardIndex(0);
    setQuizIndex(0);
    setScore(0);
    setIsFlipped(false);
    setFeedback(null);
    setUserInput('');
    setShowHint(false);
    setShowResults(false);
    setMcqSelected(null);
  }, [currentData, isShuffle]);

  const handleRestart = () => {
    setFlashcardIndex(0);
    setQuizIndex(0);
    setScore(0);
    setIsFlipped(false);
    setFeedback(null);
    setUserInput('');
    setMcqSelected(null);
    setShowHint(false);
    setShowResults(false);
  };

  // Page selection logic (automatically sorted numerically)
  const availablePages = useMemo(() => 
    Object.keys(kanjiData).map(Number).sort((a, b) => a - b),
    [kanjiData]
  );

  // Generate options for MCQ mode
  useEffect(() => {
    if (viewMode === 'mcq' && studyData.length > 0 && !showResults) {
      const currentItem = studyData[quizIndex];
      const formatOption = (item) => `${item.hano} - ${item.meaning}`;
      const correctOption = formatOption(currentItem);

      // Find homophones (same Hán Việt, different option string)
      let homophones = allKanjiFlat.filter(item => 
        item.hano.toLowerCase() === currentItem.hano.toLowerCase() &&
        formatOption(item) !== correctOption
      );

      // Remove duplicates
      const uniqueOptions = new Set();
      const distractorOptions = [];
      
      homophones.forEach(item => {
        const opt = formatOption(item);
        if (!uniqueOptions.has(opt)) {
          uniqueOptions.add(opt);
          distractorOptions.push(opt);
        }
      });

      // Shuffle and pick up to 3 distractors
      distractorOptions.sort(() => Math.random() - 0.5);
      const options = distractorOptions.slice(0, 3);

      // Fill the rest with random options if needed
      while (options.length < 3) {
        const randomItem = allKanjiFlat[Math.floor(Math.random() * allKanjiFlat.length)];
        const randomOpt = formatOption(randomItem);
        if (randomOpt !== correctOption && !options.includes(randomOpt)) {
            options.push(randomOpt);
        }
      }

      // Add correct option and shuffle
      options.push(correctOption);
      options.sort(() => Math.random() - 0.5);
      
      setMcqOptions(options);
      setMcqSelected(null);
      setFeedback(null);
    }
  }, [viewMode, quizIndex, studyData, showResults, allKanjiFlat]);

  const handleMcqSelect = (option) => {
    if (feedback) return;
    const currentItem = studyData[quizIndex];
    if (option === `${currentItem.hano} - ${currentItem.meaning}`) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('incorrect');
    }
    setMcqSelected(option);
  };

  // Initialize Quiz/Flashcard
  const startMode = useCallback((mode) => {
    setViewMode(mode);
  }, []);

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
      } else if (viewMode === 'mcq') {
        if (e.key === 'Enter' && feedback) {
          nextQuiz();
        } else if (!feedback && e.key >= '1' && e.key <= '4') {
          const idx = parseInt(e.key) - 1;
          if (mcqOptions[idx]) handleMcqSelect(mcqOptions[idx]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, flashcardIndex, isFlipped, feedback, userInput, mcqOptions]);

  // Focus input on quiz
  useEffect(() => {
    if (viewMode === 'quiz' && !feedback) {
      inputRef.current?.focus();
    }
  }, [viewMode, quizIndex, feedback]);

  const handleNext = React.useCallback(() => {
    if (flashcardIndex < studyData.length - 1) {
      setFlashcardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [flashcardIndex, studyData.length]);

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
    // Scroll to top when page changes on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Touch Swipe Handlers for Flashcards
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(0);
  };
  const handleTouchMove = (e) => {
    const currentX = e.targetTouches[0].clientX;
    setTouchEndX(currentX);
    if (touchStartX) {
      setDragOffset(currentX - touchStartX);
      if (Math.abs(currentX - touchStartX) > 10) {
        if (e.cancelable) e.preventDefault();
      }
    }
  };
  const handleTouchEnd = () => {
    setDragOffset(0);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isNextSwipe = distance < -80;
    const isPrevSwipe = distance > 80;
    if (isNextSwipe) handleNext();
    if (isPrevSwipe) handlePrev();
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Quiz Logic
  const checkAnswer = () => {
    const currentItem = studyData[quizIndex];
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
    if (quizIndex < studyData.length - 1) {
      setQuizIndex(i => i + 1);
      setUserInput('');
      setFeedback(null);
      setMcqSelected(null);
      setShowHint(false);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className={`min-h-screen w-full bg-white flex flex-col items-center ${viewMode === 'list' ? 'pt-24 md:pt-32' : 'pt-16 md:pt-24'} pb-20 md:pb-32 px-4 md:px-12 selection:bg-black selection:text-white`}>
      
      {/* Header Section */}
      <div className={`w-full max-w-6xl mb-8 flex justify-between items-end ${viewMode !== 'list' ? 'hidden sm:flex' : 'flex'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
          漢字集
        </div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        
        {/* Navigation & Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between ${viewMode === 'list' ? 'mb-16' : 'mb-8'} gap-10`}>
          <div className="space-y-8 flex-grow min-w-0">
            <div className="flex items-center gap-4 flex-wrap">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (viewMode === 'list') {
                    navigate('/kanji');
                  } else {
                    setViewMode('list');
                  }
                }}
                className="px-6 py-2 border-2 border-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all font-sans relative z-[200] cursor-pointer"
              >
                {viewMode === 'list' ? 'Quay lại' : 'Thoát luyện tập'}
              </button>

              {(viewMode === 'quiz' || viewMode === 'flashcard') && (
                 <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-xl border border-slate-100 shadow-sm scale-90 animate-in fade-in duration-300">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-2 font-sans">Xáo trộn</span>
                    <button 
                      onClick={() => setIsShuffle(!isShuffle)}
                      className={`relative w-8 h-4 rounded-full transition-colors duration-300 focus:outline-none ${isShuffle ? 'bg-black' : 'bg-slate-200'}`}
                    >
                      <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-300 ${isShuffle ? 'translate-x-4' : ''}`} />
                    </button>
                 </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-slate-300 font-bold text-[10px] tracking-[0.3em] uppercase">Set 04</span>
                <div className="flex flex-wrap gap-2 items-center max-w-full">
                   <button
                     onClick={() => switchPage('all')}
                     className={`px-4 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-full transition-all ${activePage === 'all' ? 'bg-black text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                   >
                     Tất cả
                   </button>
                   {availablePages.map(page => (
                     <button
                       key={page}
                       onClick={() => switchPage(page)}
                       className={`px-4 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-full transition-all ${activePage === page ? 'bg-black text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                     >
                       Trang {page}
                     </button>
                   ))}
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight flex flex-wrap items-baseline gap-2 md:gap-4">
                Hán tự 4
                <span className="text-base md:text-2xl font-bold text-slate-200 tracking-tight italic">
                  ({activePage === 'all' ? Object.values(kanjiData).flat().length : (kanjiData[activePage]?.length || 0)} chữ)
                </span>
              </h1>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex bg-slate-50 p-1 rounded-2xl border border-slate-100 shadow-sm self-start lg:self-end overflow-x-auto no-scrollbar max-w-full">
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'list' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Danh sách
            </button>
            <button 
              onClick={() => startMode('flashcard')}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'flashcard' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Flashcard
            </button>
            <button 
              onClick={() => startMode('mcq')}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'mcq' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Trắc nghiệm
            </button>
            <button 
              onClick={() => startMode('quiz')}
              className={`px-4 md:px-8 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 ${viewMode === 'quiz' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Gõ phím
            </button>
          </div>
        </div>

        {/* --- DYNAMIC VIEWS --- */}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="w-full flex flex-col gap-6 animate-in fade-in duration-700">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto w-full">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm Hán tự, Hán Việt, ý nghĩa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all placeholder:font-normal placeholder:text-slate-400"
              />
            </div>

            <div 
              key={activePage}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {filteredData.map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-white border border-slate-100 rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-default"
                >
                  <span className="absolute top-4 left-5 text-[9px] font-bold text-slate-200 group-hover:text-slate-400 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  
                  <div className="text-5xl font-medium text-slate-900 group-hover:scale-110 transition-transform duration-500 py-1 font-kanji">
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
              ))}
              
              {currentData.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400 font-medium italic">
                  Chưa có dữ liệu cho trang này.
                </div>
              )}
              {currentData.length > 0 && filteredData.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400 font-medium italic">
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Flashcard View */}
        {viewMode === 'flashcard' && (
          currentData.length > 0 ? (
            <div 
              key={`${activePage}-${viewMode}`}
              className="max-w-4xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-700 touch-none"
              style={{ touchAction: 'none' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Progress Top */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 px-4">
                <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase">
                  {flashcardIndex + 1} / {studyData.length}
                </span>
                <div className="h-1 w-full max-w-[200px] bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-900 transition-all duration-500 ease-out" 
                    style={{ width: `${((flashcardIndex + 1) / studyData.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* The Card */}
              <div 
                key={flashcardIndex}
                className="group perspective w-full aspect-[4/5] sm:aspect-[16/10] md:max-h-[450px] cursor-pointer animate-in fade-in zoom-in-95 duration-500"
                style={{
                  transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.05}deg)`,
                  transition: dragOffset === 0 ? 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none',
                }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`relative w-full h-full duration-500 preserve-3d shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] rounded-3xl md:rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-3xl md:rounded-[3rem] flex flex-col items-center justify-center p-8">
                     <div className="absolute top-8 text-[9px] font-bold text-slate-200 uppercase tracking-[0.4em]">Hán tự</div>
                     <div className="text-[7rem] md:text-[12rem] font-medium text-slate-900 select-none leading-none font-kanji">{studyData[flashcardIndex].kanji}</div>
                     <div className="absolute bottom-8 flex items-center justify-center w-full px-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest decoration-slate-100 italic">
                       NHẤN ĐỂ LẬT
                     </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-900 text-slate-950 rounded-3xl md:rounded-[3rem] rotate-y-180 flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden">
                     <div className="absolute -top-10 -right-10 text-[25vw] font-black text-slate-50 rotate-12 select-none pointer-events-none leading-none opacity-50">
                       {studyData[flashcardIndex].kanji}
                     </div>
                     
                     <div className="space-y-8 text-center relative z-10">
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Âm Hán Việt</p>
                         <h3 className="text-5xl md:text-7xl font-black text-slate-900 italic leading-tight">{studyData[flashcardIndex].hano}</h3>
                       </div>
                       <div className="w-12 h-px bg-slate-200 mx-auto" />
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Nghĩa Tiếng Việt</p>
                         <p className="text-2xl md:text-3xl font-bold text-slate-600 leading-snug">{studyData[flashcardIndex].meaning}</p>
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
                  disabled={flashcardIndex === studyData.length - 1}
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

        {/* MCQ View */}
        {viewMode === 'mcq' && studyData.length > 0 && (
          <div 
            key={`${activePage}-${viewMode}`}
            className="max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-700"
          >
             <div className="w-full max-w-lg mb-8 flex items-end justify-between px-6 py-4 bg-slate-50/50 rounded-3xl border border-slate-100 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Mục tiêu</span>
                  <span className="text-xl font-black text-slate-900 italic tracking-tighter">{quizIndex + 1} <span className="text-slate-200 text-sm">/ {studyData.length}</span></span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Chính xác</span>
                  <span className="text-xl font-black text-emerald-500 italic tracking-tighter">{score}</span>
                </div>
             </div>

             <div className="text-center space-y-6 w-full">
                <div className="space-y-2 relative group">
                  <div className="text-[5rem] md:text-[7rem] font-medium text-slate-900 leading-none select-none drop-shadow-sm font-kanji">
                    {studyData[quizIndex].kanji}
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Hán Việt - Nghĩa</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto mt-6">
                   {mcqOptions.map((option, idx) => {
                     const isCorrect = option === `${studyData[quizIndex].hano} - ${studyData[quizIndex].meaning}`;
                     const isSelected = mcqSelected === option;
                     
                     let btnClass = "py-5 px-6 bg-white border-2 rounded-2xl text-base md:text-lg font-bold transition-all flex items-center justify-between group ";
                     
                     if (!feedback) {
                       btnClass += "border-slate-100 text-slate-700 hover:border-black hover:shadow-md cursor-pointer hover:-translate-y-1";
                     } else {
                       if (isCorrect) {
                         btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md transform scale-[1.02] z-10";
                       } else if (isSelected) {
                         btnClass += "border-red-500 bg-red-50 text-red-700 opacity-90";
                       } else {
                         btnClass += "border-slate-100 bg-slate-50 text-slate-400 opacity-50 cursor-not-allowed";
                       }
                     }
                     
                     return (
                       <button
                         key={idx}
                         onClick={() => handleMcqSelect(option)}
                         disabled={!!feedback}
                         className={btnClass}
                       >
                         <span className="flex items-center gap-3 text-left">
                           <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${!feedback ? 'bg-slate-100 text-slate-400 group-hover:bg-black group-hover:text-white transition-colors' : (isCorrect ? 'bg-emerald-200 text-emerald-800' : (isSelected ? 'bg-red-200 text-red-800' : 'bg-slate-200 text-slate-400'))}`}>
                             {idx + 1}
                           </span>
                           {option}
                         </span>
                       </button>
                     );
                   })}
                </div>

                {feedback && (
                  <div className="mt-8 animate-in slide-in-from-top-4 duration-500">
                    <button 
                      onClick={nextQuiz}
                      className={`py-4 px-10 ${feedback === 'correct' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-900 hover:bg-black'} text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95`}
                    >
                      {quizIndex === studyData.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo (Enter)'}
                    </button>
                  </div>
                )}
             </div>
          </div>
        )}

        {/* Quiz View */}
        {viewMode === 'quiz' && studyData.length > 0 && (
          <div 
            key={`${activePage}-${viewMode}`}
            className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-700"
          >
             <div className="w-full max-w-lg mb-6 flex items-end justify-between px-6 py-4 bg-slate-50/50 rounded-3xl border border-slate-100 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Mục tiêu</span>
                  <span className="text-xl font-black text-slate-900 italic tracking-tighter">{quizIndex + 1} <span className="text-slate-200 text-sm">/ {studyData.length}</span></span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Chính xác</span>
                  <span className="text-xl font-black text-emerald-500 italic tracking-tighter">{score}</span>
                </div>
             </div>

             <div className="text-center space-y-4 w-full">
                <div className="space-y-2 relative group">
                  <div className="text-[6rem] md:text-[8rem] font-medium text-slate-900 leading-none select-none drop-shadow-sm transition-transform group-hover:scale-105 duration-500 font-kanji">
                    {studyData[quizIndex].kanji}
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Hán Việt</span>
                  </div>
                </div>

                <div className="space-y-6 w-full max-w-md mx-auto">
                   <input
                     ref={inputRef}
                     type="text"
                     value={userInput}
                     onChange={(e) => setUserInput(e.target.value)}
                     disabled={!!feedback}
                     placeholder="Ví dụ: Nhất"
                     className={`w-full text-center py-4 text-2xl font-black border-b-4 outline-none transition-all uppercase ${
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
                          {quizIndex === studyData.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                        </button>
                      )}
                      
                      {showHint && !feedback && (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 animate-in fade-in duration-300">
                           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Nghĩa tiếng Việt</p>
                           <p className="font-bold text-slate-600 italic">"{studyData[quizIndex].meaning}"</p>
                        </div>
                      )}

                      {feedback === 'incorrect' && (
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 animate-in slide-in-from-top-4 duration-500">
                           <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Đáp án đúng</p>
                           <p className="text-3xl font-black text-emerald-700 uppercase">{studyData[quizIndex].hano}</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* Results Screen - Now a clean, centered modal popup */}
        {showResults && (
           <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 sm:p-4 animate-in fade-in duration-300">
             {/* Deep backdrop */}
             <div 
               className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
               onClick={() => setShowResults(false)}
             />
             
              {/* Compact Result Modal */}
              <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-[0_30px_100px_-10px_rgba(0,0,0,0.3)] p-8 md:p-10 text-center animate-in zoom-in duration-300">
                 
                 <div className="mt-4 space-y-6">
                   <div className="space-y-1">
                     <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">Hoàn thành!</h2>
                     <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">Kết quả luyện tập của bạn</p>
                   </div>
 
                   <div className="py-6 border-y border-slate-50">
                     <div className="text-7xl font-black text-slate-950 tracking-tighter italic">
                       {score + (feedback === 'correct' ? 1 : 0)}
                       <span className="text-2xl font-black text-slate-200 italic align-top ml-1">/ {studyData.length}</span>
                     </div>
                   </div>
 
                   <p className="text-slate-500 text-[13px] font-medium italic leading-relaxed px-2">
                     {score === studyData.length ? 'Tuyệt đỉnh! Bạn đã chinh phục hoàn toàn bài học này.' : 
                      score > studyData.length / 2 ? 'Rất tốt! Hãy tiếp tục rèn luyện thêm nhé.' : 
                      'Đừng nản lòng! Hãy ôn lại và thử sức một lần nữa nhé.'}
                   </p>
 
                   <div className="grid grid-cols-1 gap-3 pt-2">
                     <button 
                       onClick={() => handleRestart()}
                       className="w-full py-4.5 bg-black text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10"
                     >
                       Luyện tập lại
                     </button>
                     <button 
                       onClick={() => {
                           setShowResults(false);
                           setViewMode('list');
                       }}
                       className="w-full py-4.5 bg-slate-50 text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:text-black transition-all"
                     >
                       Danh sách Hán tự
                     </button>
                   </div>
                 </div>
              </div>
           </div>
        )}

      </div>
    </div>
  );
}
